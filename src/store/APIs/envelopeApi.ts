import {createApi} from "@reduxjs/toolkit/query/react";
import {InitRequest, InitResponse} from "./types/InitTypes.ts";
import {ReceiveEnvelopeResponse} from "./types/ReceiveEnvelopeTypes.ts";
import {TPlatform} from "../slices/userSlice/types.ts";
import {baseQuery} from "../../utility/externalPlatformController/baseQuery.ts";

const platform = import.meta.env.VITE_PLATFORM as TPlatform

const envelopeApi = createApi({
  baseQuery : baseQuery[platform],
  endpoints : (builder) => ({
    init : builder.mutation<InitResponse, InitRequest>({
      query : (data) => ({
        url : "init",
        method : "POST",
        body : {
          ...data,
        }
      })
    }),
    receiveEnvelope : builder.mutation<ReceiveEnvelopeResponse, void>({
      query : () => ({
        url : "gameplay/receive-envelope",
        method : "POST",
      })
    })
  })
})

export const {
  useInitMutation,
  useReceiveEnvelopeMutation
} = envelopeApi

export default envelopeApi;