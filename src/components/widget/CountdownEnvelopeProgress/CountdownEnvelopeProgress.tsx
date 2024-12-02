import Images from "../../../assets/images";
import {HTMLProps} from "react";

function CountdownEnvelopeProgress({className, ...rest} : HTMLProps<HTMLDivElement>) {
  return (
    <div {...rest} className={`flex flex-col items-center justify-center ${className ?? ""}`}>
      <div className={"flex items-center space-x-1"}>
        <p className={"uppercase text-[#EBECEE]/70 text-[8px]"}>Следующий конверт через</p>
        <p className={"font-franxurter text-[15px]"}>23:45:11</p>
      </div>
      <div className={"relative w-full"}>
        <div className={"w-full h-[14px] bg-black/20 p-0.5 rounded-[20px]"}>
          <div className={"h-full rounded-[20px] bg-gradient-to-r from-[#BE52FF] to-[#FF50F1] w-[70%]"}/>
        </div>
        <img src={Images.ClosedEnvelope} className={"w-[36px] absolute right-0 top-1/2 -translate-y-1/2"} alt={"envelope_icon"} />
      </div>
    </div>
  );
}

export default CountdownEnvelopeProgress;