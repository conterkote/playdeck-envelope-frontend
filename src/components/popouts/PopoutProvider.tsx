import {HTMLProps, ReactNode} from "react";
import {useAppSelector} from "../../store/store.ts";
import {selectCurrentPopout} from "../../store/slices/popoutSlice/popoutSlice.ts";
import {TPopoutName} from "../../store/slices/popoutSlice/types.ts";
import RatingPopout from "./RatingPopout/RatingPopout.tsx";

function PopoutProvider({...rest}: HTMLProps<HTMLDivElement>) {
  const currentPopout = useAppSelector(selectCurrentPopout)
  if (!currentPopout) return null;

  const popoutCases: Record<TPopoutName, ReactNode> = {
    "rating" : <RatingPopout />,
    "shop" : <RatingPopout />,
  }

  return (
    <div {...rest} className={"max-w-[648px] mx-auto left-0 top-0 right-0 bottom-0 fixed bg-[#110016]/70 z-50"}>
      {popoutCases[currentPopout]}
    </div>
  );
}

export default PopoutProvider;