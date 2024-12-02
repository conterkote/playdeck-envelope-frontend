import Images from "./assets/images";
import DefaultPage from "./components/pages/DefaultPage.tsx";
import {useAppDispatch} from "./store/store.ts";
import {useInitMutation} from "./store/APIs/envelopeApi.ts";
import {TExternalPlatformUserData, useInitExternalPlatform} from "./utility/hooks/useInitExternalPlatform.ts";
import {useEffect} from "react";
import {externalPlatformController} from "./main.tsx";

function App() {
  const dispatch = useAppDispatch();

  const [initUser, {data, isSuccess : serverInitializationSuccess}] = useInitMutation();

  const onComplete = (userData : TExternalPlatformUserData) => {
    initUser(userData)
  }

  const {success : successExternalPlatformInit} = useInitExternalPlatform({onComplete})

  useEffect(() => {
    if (successExternalPlatformInit && serverInitializationSuccess) {
      externalPlatformController.setLoadingProgress(100);
    }
  }, []);

  return (

        <div className={"h-screen w-screen max-w-[648px] mx-auto background"}>
          <div style={{
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundImage: `url(${Images.BackgroundOverlay})`
          }} className={"w-full h-full"}>
            <DefaultPage/>
          </div>
        </div>
  )
}

export default App
