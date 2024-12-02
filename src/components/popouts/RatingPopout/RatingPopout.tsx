import "./index.css"
import {useState} from "react";
import RatingList from "../../entities/RatingList/RatingList.tsx";
import ScrollableContainer from "../../shared/ScrollableContainer/ScrollableContainer.tsx";

export type TRatingTimeInterval = "day" | "week" | "month"

function RatingPopout() {
  const [selectedTimeInterval, setSelectedTimeInterval] = useState<TRatingTimeInterval>("day")
  const onTimeIntervalClick = (interval : TRatingTimeInterval) => {
    return () => {
      setSelectedTimeInterval(interval)
    }
  }

  return (
    <div className={"bg-[#7A49EF]/70 rounded-[20px] mx-4 mt-[64px]"}>
      <div className={"popout-header relative py-5 flex items-center justify-center"}>
        <h1 className={"popout-header-text uppercase text-[20px]"}>Рейтинг игроков</h1>
      </div>
      <div className={"grid grid-cols-3"}>
        <div
          onClick={onTimeIntervalClick("day")}
          className={`font-franxurter py-1 text-center text-[18px] ${selectedTimeInterval === "day" ? "popout-selected-interval-gradient border-[#85BDFF] border-b-[3px]" : "bg-[#170542]/30"}`}>
          День
        </div>
        <div
          onClick={onTimeIntervalClick("week")}
          className={`font-franxurter py-1 text-center text-[18px] ${selectedTimeInterval === "week" ? "popout-selected-interval-gradient border-[#85BDFF] border-b-[3px]" : "bg-[#170542]/30"}`}>
          Неделя
        </div>
        <div
          onClick={onTimeIntervalClick("month")}
          className={`font-franxurter py-1 text-center text-[18px] ${selectedTimeInterval === "month" ? "popout-selected-interval-gradient border-[#85BDFF] border-b-[3px]" : "bg-[#170542]/30"}`}>
          Месяц
        </div>
      </div>
      <div className={"h-[400px] py-6 px-4"}>
        <ScrollableContainer className={"h-full"}>

        </ScrollableContainer>
      </div>
    </div>
  );
}

export default RatingPopout;