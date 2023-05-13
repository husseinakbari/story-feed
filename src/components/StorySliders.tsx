import { FC } from "react";
import ProgressBar from "./ProgressBar";

interface ISliderProps {
  totalSlide: number;
  activeSlide?: number;
  durationTime?: number;
  onNextSlide: () => void;
}

const StorySliders: FC<ISliderProps> = ({
  totalSlide,
  activeSlide = 0,
  durationTime = 10000,
  onNextSlide,
}) => {
  return (
    <div className="grid grid-flow-col gap-1">
      {Array(totalSlide)
        .fill("x")
        .map((_, index) => (
          <ProgressBar
            key={index}
            duration={durationTime}
            isFill={index < activeSlide}
            disabled={index > activeSlide}
            onFinish={onNextSlide}
          />
        ))}
    </div>
  );
};

export default StorySliders;
