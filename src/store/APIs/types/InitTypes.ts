import {TExternalPlatformUserData} from "../../../utility/hooks/useInitExternalPlatform.ts";

export type InitRequest = TExternalPlatformUserData
export interface InitResponse {
  user : IInitUser
}

export interface IInitUser {
  coins : number
  envelopes : number
  name : string
}