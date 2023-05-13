import { FC, useState } from "react";
import ReactDOM from "react-dom";

import StorySliders from "./StorySliders";
import { XMarkIcon } from "./Icons/XMarkIcon";

interface IStoriesModalProps {
  onClose: () => void;
}

const stories: string[] = [
  "/src/assets/stories/story-1.jpeg",
  "/src/assets/stories/story-2.jpeg",
  "/src/assets/stories/story-3.jpeg",
  "/src/assets/stories/story-4.jpeg",
  "/src/assets/stories/story-5.jpeg",
];

const StoriesModal: FC<IStoriesModalProps> = ({ onClose }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const onPrevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const onNextSlide = () => {
    if (activeSlide < stories.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-90 flex justify-center items-center z-60">
      <div className="flex flex-col relative h-full w-full sm:w-1/2 lg:w-1/3">
        <header className="grid grid-flow-row gap-2 z-40  p-3">
          <div className="flex justify-end">
            <button onClick={onClose}>
              <XMarkIcon fill="#fff" />
            </button>
          </div>
          <StorySliders
            totalSlide={stories.length}
            activeSlide={activeSlide}
            durationTime={10000}
            onNextSlide={onNextSlide}
          />
        </header>

        <div className="w-full h-full z-40 grid grid-cols-4">
          <div className="col-span-1" onClick={onPrevSlide} />
          <div className="col-span-3" onClick={onNextSlide} />
        </div>

        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
          <img
            src={stories[activeSlide]}
            alt="image"
            className="w-full bg-cover"
          />
        </div>
      </div>
    </div>,
    document.getElementById("stories-modal") as HTMLElement
  );
};

export default StoriesModal;
