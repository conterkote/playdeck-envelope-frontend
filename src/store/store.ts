import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import userSlice from "./slices/userSlice/userSlice.ts";
import envelopeSlice from "./slices/envelopeSlice/envelopeSlice.ts";
import popoutSlice from "./slices/popoutSlice/popoutSlice.ts";
import envelopeApi from "./APIs/envelopeApi.ts";

const store = configureStore({
  reducer : {
    [envelopeApi.reducerPath] : envelopeApi.reducer,
    [userSlice.name] : userSlice.reducer,
    [envelopeSlice.name] : envelopeSlice.reducer,
    [popoutSlice.name] : popoutSlice.reducer,
  },
  middleware : (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(envelopeApi.middleware)
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;