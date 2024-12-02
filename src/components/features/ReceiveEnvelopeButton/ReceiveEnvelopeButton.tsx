import {Button} from "../../shared";
import Images from "../../../assets/images";
import {useReceiveEnvelopeMutation} from "../../../store/APIs/envelopeApi.ts";

function ReceiveEnvelopeButton() {
  // Обработка получения конверта с предсказанием находится в envelopeSlice в extraReducers
  const [sendReceiveEnvelope] = useReceiveEnvelopeMutation()

  const onClick = () => {
    sendReceiveEnvelope()
  }

  return (
    <div
      onClick={onClick}
      className={"p-1 bg-black/10 rounded-[10px]"}
    >
      <Button className={"flex items-center justify-center space-x-3 px-4"}>
        <div className={"text-[20px] -translate-y-[2px]"}>Открыть</div>
        <div className={"flex items-center space-x-1 px-2 bg-black/10 rounded-[20px]"}>
          <div className={"bg-[#395100]/20 p-[2px] rounded-[4px]"}>
            <img
              src={Images.ClosedEnvelope}
              className={"w-[22px]"}
              alt={"envelope_icon"}
            />
          </div>
          <p className={"font-franxurter"}>x 1</p>
        </div>
      </Button>
    </div>
  );
}

export default ReceiveEnvelopeButton;