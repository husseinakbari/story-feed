import { FC, useState } from "react";
import ReactDOM from "react-dom";

import blueImage from "../assets/blubank.png";
import StorySliders from "./StorySliders";
import { XMarkIcon } from "./Icons/XMarkIcon";

interface IStoriesModalProps {
  onClose: () => void;
}

const TOTAL_SLIDES = 5;

const StoriesModal: FC<IStoriesModalProps> = ({ onClose }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const onPrevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const onNextSlide = () => {
    if (activeSlide < TOTAL_SLIDES) {
      setActiveSlide(activeSlide + 1);
    } else {
      // onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black z-60">
      <div className="flex flex-col relative w-full h-full">
        <header className="grid grid-flow-row gap-2 z-40  p-3">
          <div className="flex justify-end">
            <button onClick={onClose}>
              <XMarkIcon fill="#fff" />
            </button>
          </div>
          <StorySliders
            totalSlide={TOTAL_SLIDES}
            activeSlide={activeSlide}
            durationTime={10000}
            onNextSlide={onNextSlide}
          />
        </header>

        <div className="w-full h-full z-40 grid grid-cols-4">
          <button className="col-span-1" onClick={onPrevSlide} />
          <button className="col-span-3" onClick={onNextSlide} />
        </div>

        <div className="absolute top-0 bottom-0 left-0 right-0">
          <img src={blueImage} alt="blubank" className="w-full" />
        </div>
      </div>
    </div>,
    document.getElementById("stories-modal") as HTMLElement
  );
};

export default StoriesModal;
