import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPopoutSliceState} from "./types.ts";
import {RootState} from "../../store.ts";

const initialState: IPopoutSliceState = {
  currentPopout : undefined
}

const popoutSlice = createSlice({
  name : "popout",
  reducers : {
    setCurrentPopout : (state, action: PayloadAction<IPopoutSliceState["currentPopout"]>) => ({
      ...state,
      currentPopout : action.payload
    })
  },
  initialState
})

export const selectCurrentPopout = (state : RootState) => state.popout.currentPopout

export const {
  setCurrentPopout
} = popoutSlice.actions

export default popoutSlice;