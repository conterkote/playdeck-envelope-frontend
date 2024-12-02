import {Button} from "../../shared";
import {SVGs} from "../../../assets/svgs";
import {useAppDispatch} from "../../../store/store.ts";
import {setCurrentPopout} from "../../../store/slices/popoutSlice/popoutSlice.ts";

function RatingButton() {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(setCurrentPopout("rating"))
  }
  return (
    <div onClick={onClick} className={"p-1 bg-black/10 rounded-[10px]"}>
      <Button className={"w-[50px] relative"}>
        <img src={SVGs.Cup} className={"absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"} alt={"cup"}/>
      </Button>
    </div>
  );
}

export default RatingButton;