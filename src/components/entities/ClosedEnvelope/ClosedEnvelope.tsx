import Images from "../../../assets/images";
import "./index.css"

function ClosedEnvelope() {
  return (
    <div className={"relative"}>
      <img src={Images.ClosedEnvelope} className={"w-full max-w-[270px] relative z-10"} alt={"envelope_icon"}/>
      <div className={"background-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"} />
    </div>
  );
}

export default ClosedEnvelope;