import {useEffect, useState} from "react";
import { preloadedImages } from "../../assets/images"
import { preloadedSVGs } from "../../assets/svgs"

export interface TUseInitAppAssetsProps {
  onComplete: () => void
}

type TUseInitAppAssets = ({onComplete}: TUseInitAppAssetsProps) => { success: boolean };

export const useInitAppAssets: TUseInitAppAssets = function ({onComplete}) {
  const [success, setSuccess] = useState<boolean>(false);

  const [preloadedAssetsCount, setPreloadedAssetsCount] = useState(0);

  const PreloadedAssets = [...Object.values(preloadedImages), ...Object.values(preloadedSVGs)]

  const preloadAsset = async (src : string) => {
    const image = new Image();
    image.src = src
    image.onload = () => {
      setPreloadedAssetsCount(prevState => prevState + 1)
    }
  }

  const postLoadAssets = () => {
    // Если нужно что-то сделать с ассетами, которые необязательно подгружать до показа первого экрана
  }

  useEffect(() => {
    const preloadAssets = async () => {
      await Promise.all(PreloadedAssets.map(preloadAsset))
    }
    preloadAssets().then(() => {
      postLoadAssets()
    })
  }, []);

  useEffect(() => {
    const assetsIsPreloaded = PreloadedAssets.length === preloadedAssetsCount
    if (assetsIsPreloaded) {
      onComplete();
      setSuccess(() => true)
    }
  }, [preloadedAssetsCount]);

  return {success}
}