import {useAppSelector} from "../../../store/store.ts";
import {
  selectCurrentEnvelopeStatus,
  selectReceivedEnvelope
} from "../../../store/slices/envelopeSlice/envelopeSlice.ts";
import {ClosedEnvelope, OpenEnvelope} from "../../entities";
import {HTMLProps, useEffect, useState} from "react";

import "./index.css"

export type TEnvelopeAnimationStatus = "idle" | "animate-lowering" | "animate-lowered" | "success"

function Envelope({className, ...rest}: HTMLProps<HTMLDivElement>) {
  const currentReceivedEnvelope = useAppSelector(selectReceivedEnvelope)
  const currentReceivedEnvelopeStatus = useAppSelector(selectCurrentEnvelopeStatus)

  const [animationStatus, setAnimationStatus] = useState<TEnvelopeAnimationStatus>("idle")
  const [envelopeComponent, setEnvelopeComponent] = useState(<ClosedEnvelope/>)

  const classCases: Record<TEnvelopeAnimationStatus, string> = {
    idle : "",
    "animate-lowering" : "envelope-lowering",
    "animate-lowered" : "envelope-lowered",
    success : ""
  }

  useEffect(() => {
    if (currentReceivedEnvelopeStatus === "pending") {
      setEnvelopeComponent(<ClosedEnvelope />)
      setAnimationStatus("animate-lowering")
      setTimeout(() => {
        setAnimationStatus("animate-lowered")
      }, 550)
    } else if (animationStatus === "animate-lowered" && currentReceivedEnvelope) {
      setEnvelopeComponent(<OpenEnvelope receivedEnvelope={currentReceivedEnvelope} />)
    }
  }, [currentReceivedEnvelopeStatus, animationStatus, currentReceivedEnvelope]);

  return (
    <div {...rest} className={`h-[352px] ${classCases[animationStatus]} ${className ?? ""}`}>
      {envelopeComponent}
    </div>
  );
}

export default Envelope;