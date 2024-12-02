import {useEffect, useState} from "react";
import {TPlatform} from "../../store/slices/userSlice/types.ts";
import {externalPlatformController} from "../../main.tsx";

export interface TUseInitExternalPlatformProps {
  onComplete: (user: TExternalPlatformUserData) => void,
}

type TUseInitAppVK = ({onComplete}: TUseInitExternalPlatformProps) => { success: boolean };
export type TExternalPlatformUserData = {
  platform: TPlatform,
  user_id : string
  name : string
  photo ?: string
  token ?: string
}

export const useInitExternalPlatform: TUseInitAppVK = function ({onComplete}) {
  const [success, setSuccess] = useState<boolean>(false);
  const onSuccess = (userData : TExternalPlatformUserData) => {
    onComplete(userData)
    setSuccess(() => true)
  }

  useEffect(() => {
    externalPlatformController.init({
      onSuccess,
    })
  }, []); // Init vk.ts Data

  return {success}
}