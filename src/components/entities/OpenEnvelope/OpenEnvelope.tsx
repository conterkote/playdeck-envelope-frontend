import Images from "../../../assets/images";
import "./index.css"
import {IReceivedEnvelope} from "../../../store/APIs/types/ReceiveEnvelopeTypes.ts";

import "./index.css"

export interface IOpenEnvelopeProps {
  receivedEnvelope : IReceivedEnvelope
}

function OpenEnvelope({ receivedEnvelope } : IOpenEnvelopeProps) {
  return (
    <div className={"relative"}>
      <img src={Images.OpenEnvelopeBack} className={"w-full max-w-[270px] relative z-10"} alt={"envelope_icon"}/>
      <img src={Images.OpenEnvelopeFront} className={"w-full max-w-[270px] z-30 absolute bottom-0"} alt={"envelope_icon"}/>
      <div className={"background-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}/>
      <div className={"absolute w-[217px] bottom-0 left-1/2 -translate-x-1/2 z-20"}>
        <img src={Images.MessagePaper} className={"w-full slide-up-paper"}/>
        <p className={"absolute top-8 px-4 left-0 right-0 text-center font-franxurter slide-up-paper text-[#495EA7] text-[23px]"}>
          {receivedEnvelope.text}
        </p>
      </div>
    </div>
  );
}

export default OpenEnvelope;