export interface ReceiveEnvelopeResponse {
  envelope : IReceivedEnvelope
}

export interface IReceivedEnvelope {
  text : string
  gift : number
}