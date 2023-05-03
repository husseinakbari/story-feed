import { FC } from "react";
import ReactDOM from "react-dom";
import blueImage from "../assets/blubank.png";
import StorySliders from "./StorySliders";
import { XMarkIcon } from "./Icons/XMarkIcon";

interface IStoriesModalProps {
  onClose: () => void;
}

const StoriesModal: FC<IStoriesModalProps> = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black z-60">
      <div className="flex flex-col relative w-full h-full p-3">
        <header className="grid grid-flow-row gap-2 z-40">
          <div className="flex justify-end">
            <button onClick={onClose}>
              <XMarkIcon fill="#fff" />
            </button>
          </div>
          <StorySliders totalStory={5} />
        </header>

        <div className="absolute top-0 bottom-0 left-0 right-0">
          <img src={blueImage} alt="blubank" className="w-full" />
        </div>
      </div>
    </div>,
    document.getElementById("stories-modal") as HTMLElement
  );
};

export default StoriesModal;
