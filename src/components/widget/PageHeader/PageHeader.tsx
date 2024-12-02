import {HTMLProps} from "react";
import {useAppSelector} from "../../../store/store.ts";
import {selectCurrentCoins, selectCurrentEnvelopes} from "../../../store/slices/userSlice/userSlice.ts";
import {SVGs} from "../../../assets/svgs";
import Images from "../../../assets/images";


function PageHeader({className, ...rest} : HTMLProps<HTMLDivElement>) {
  const coins = useAppSelector(selectCurrentCoins)
  const envelopes = useAppSelector(selectCurrentEnvelopes)
  return (
    <div {...rest} className={`sticky flex space-x-4 items-center justify-end h-[72px] px-5 ${className ?? ""}`}>
      <div className={"bg-black/20 w-[111px] h-[26px] rounded-[20px] flex items-center justify-between px-1.5"}>
        <div className={"w-[18px] h-[18px] rounded-full bg-[#E4C93D]"} />
        <div className={"flex items-center space-x-1"}>
          <p>{coins}</p>
          <div className={"rounded-full flex items-center justify-center w-[18px] h-[18px] bg-[#99D805]"}>
            <img className={""} src={SVGs.Plus} alt={"plus_sign_icon"} />
          </div>
        </div>
      </div>
      <div className={"bg-black/20 w-[111px] h-[26px] rounded-[20px] flex items-center justify-between px-1.5"}>
        <img src={Images.ClosedEnvelope} className={"w-[18px]"} alt={"envelope_icon"} />
        <div className={"flex items-center space-x-1"}>
          <p>{envelopes}</p>
          <div className={"rounded-full flex items-center justify-center w-[18px] h-[18px] bg-[#99D805]"}>
            <img className={""} src={SVGs.Plus} alt={"plus_sign_icon"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;