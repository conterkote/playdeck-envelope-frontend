import {IReceivedEnvelope} from "../../APIs/types/ReceiveEnvelopeTypes.ts";

export interface IEnvelopeSliceState {
  status : TEnvelopeStatus
  receivedEnvelope : IReceivedEnvelope | undefined
}

export type TEnvelopeStatus = "idle" | "pending" | "success";