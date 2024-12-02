import {TExternalPlatformUserData} from "../../hooks/useInitExternalPlatform.ts";

abstract class ExternalPlatformControllerInstance {
  abstract init : () => Promise<TExternalPlatformUserData>;
  abstract setLoadingProgress : (percentage : number) => void;
}

export default ExternalPlatformControllerInstance;