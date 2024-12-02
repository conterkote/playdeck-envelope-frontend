import {TExternalPlatformUserData} from "../../../utility/hooks/useInitExternalPlatform.ts";

export interface IUserSliceState {
  coins : number
  envelopes : number
  platform : TPlatform
  token : string | undefined
  externalPlatformUserData : TExternalPlatformUserData | undefined
}

export type TPlatform = "playdeck" | "TMA"