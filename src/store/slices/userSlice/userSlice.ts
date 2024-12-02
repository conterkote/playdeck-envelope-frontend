import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserSliceState, TPlatform} from "./types.ts";
import {RootState} from "../../store.ts";
import envelopeApi from "../../APIs/envelopeApi.ts";

const initialState: IUserSliceState = {
  coins : 0,
  envelopes : 0,
  externalPlatformUserData : undefined,
  platform : import.meta.env.VITE_PLATFORM as TPlatform,
  token : undefined
}

const userSlice = createSlice({
  name : "user",
  reducers : {
    setExternalPlatformUserData : (state, action : PayloadAction<IUserSliceState["externalPlatformUserData"]>) => ({
      ...state,
      externalPlatformUserData : action.payload
    }),
  },
  extraReducers : builder => {
    builder.addMatcher(envelopeApi.endpoints.init.matchFulfilled, (state, action) => ({
      ...state,
      coins : action.payload.user.coins,
      envelopes : action.payload.user.envelopes,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      token: action.meta.baseQueryMeta.response.headers.get("X-Token")
    }))
  },
  initialState
})

export const selectCurrentCoins = (state : RootState) => state.user.coins
export const selectCurrentEnvelopes = (state : RootState) => state.user.envelopes
export const selectExternalPlatformUserData = (state : RootState) => state.user.externalPlatformUserData

export const {
  setExternalPlatformUserData
} = userSlice.actions

export default userSlice;