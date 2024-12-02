import {TPlatform} from "../../store/slices/userSlice/types.ts";
import {BaseQueryFn} from "@reduxjs/toolkit/query";
import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RootState} from "../../store/store.ts";

const baseUrl = import.meta.env.VITE_BACKEND_URL;
const baseUrlApi = `${baseUrl}/api`;

export const baseQuery: Record<TPlatform, BaseQueryFn> = {
  playdeck : fetchBaseQuery({
    baseUrl : baseUrlApi,
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as RootState).user.token
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `${token}`)
      }

      return headers
    }
  }),
  TMA : fetchBaseQuery({
    baseUrl : baseUrlApi,
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as RootState).user.token
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `${token}`)
      }

      return headers
    }
  }),
}