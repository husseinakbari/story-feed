import { FC, useState } from "react";
import StoriesModal from "./StoriesModal";

interface IStoriesProps {}

const Stories: FC<IStoriesProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <button
        className="w-20 h-20 rounded-full border-2 border-blue-500 flex items-center justify-center"
        onClick={toggleModal}
      >
        <h4 className="text-black">Stories</h4>
      </button>
      {isModalOpen ? <StoriesModal onClose={toggleModal} /> : null}
    </>
  );
};

export default Stories;
