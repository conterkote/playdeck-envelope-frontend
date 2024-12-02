import {TPlatform} from "../../store/slices/userSlice/types.ts";
import ExternalPlatformControllerInstance from "./platform/abstract.ts";
import Playdeck from "./platform/playdeck.ts";
import {TExternalPlatformUserData} from "../hooks/useInitExternalPlatform.ts";

class ExternalPlatformController {
  initialized: boolean = false
  platformInstance: ExternalPlatformControllerInstance

  constructor(platform: TPlatform) {
    const platformInstanceClasses: Record<TPlatform, { new(): ExternalPlatformControllerInstance }> = {
      "playdeck": Playdeck,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      TMA: undefined
    }

    this.platformInstance = new platformInstanceClasses[platform]();
  }

  init({onSuccess} : {onSuccess : (userData : TExternalPlatformUserData) => void}) {
    this.platformInstance.init()
      .then(userData => {
        onSuccess(userData)
        this.initialized = true;
      })
  }

  setLoadingProgress(percentage : number) {
    this.platformInstance.setLoadingProgress(percentage);
  }
}

export default ExternalPlatformController