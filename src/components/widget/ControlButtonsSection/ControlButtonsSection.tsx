import {HTMLProps} from "react";
import {RatingButton, ReceiveEnvelopeButton, ShopButton} from "../../features";

function ControlButtonsSection({className, ...rest}: HTMLProps<HTMLDivElement>) {
  return (
    <div {...rest} className={`flex justify-center space-x-2 ${className ?? ""}`}>
      <RatingButton/>
      <ReceiveEnvelopeButton />
      <ShopButton />
    </div>
  );
}

export default ControlButtonsSection;