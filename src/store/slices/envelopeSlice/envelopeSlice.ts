import {createSlice} from "@reduxjs/toolkit";
import {IEnvelopeSliceState} from "./types.ts";
import {RootState} from "../../store.ts";
import EnvelopeApi from "../../APIs/envelopeApi.ts";

const initialState: IEnvelopeSliceState = {
  status : "idle",
  receivedEnvelope : undefined
}

const envelopeSlice = createSlice({
  name : "envelope",
  initialState,
  reducers : {

  },
  extraReducers : builder => {
    builder.addMatcher(EnvelopeApi.endpoints.receiveEnvelope.matchPending, (state, action) => {
      return {
        ...state,
        status : "pending"
      }
    })
    builder.addMatcher(EnvelopeApi.endpoints.receiveEnvelope.matchFulfilled, (state, action) => {
      return {
        ...state,
        status : "success",
        receivedEnvelope : action.payload.envelope
      }
    })
  }
})


export const selectCurrentEnvelopeStatus = (state : RootState) => state.envelope.status
export const selectReceivedEnvelope = (state : RootState) => state.envelope.receivedEnvelope

export const {} = envelopeSlice.actions;
export default envelopeSlice;