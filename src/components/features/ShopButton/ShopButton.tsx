import {Button} from "../../shared";
import {SVGs} from "../../../assets/svgs";

function ShopButton() {
  return (
    <div className={"p-1 bg-black/10 rounded-[10px]"}>
      <Button className={"w-[50px] relative"}>
        <img src={SVGs.Cart} className={"absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"} alt={"cup"}/>
      </Button>
    </div>
  );
}

export default ShopButton;