import { FC, useState, useCallback } from "react";
import ProgressBar from "./ProgressBar";

interface ISliderProps {
  totalStory: number;
  activeStory?: number;
}

const DURATION_TIME = 4000;

const StorySliders: FC<ISliderProps> = ({ totalStory, activeStory = 0 }) => {
  const [activeSlide, setActiveSlide] = useState(activeStory);

  const nextAction = useCallback(() => {
    if(activeSlide < totalStory) {
      setActiveSlide(activeSlide + 1);
    }
  }, [activeSlide, setActiveSlide]);

  return (
    <div className="grid grid-flow-col gap-1">
      {Array(totalStory)
        .fill("x")
        .map((_, index) => (
          <ProgressBar
            key={index}
            duration={DURATION_TIME}
            isFill={index < activeSlide}
            disabled={index > activeSlide}
            onFinish={nextAction}
          />
        ))}
    </div>
  );
};

export default StorySliders;
