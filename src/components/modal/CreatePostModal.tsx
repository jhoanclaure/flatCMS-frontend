import Modal from "./Modal";
import "./CreatePostModal.css";

import { BiSolidImageAlt } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePostModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="create-modal">
        <section className="" >
          <IoClose className="close-btn" onClick={onClose} />
        </section>
        
        <input
          type="text"
          placeholder="TITULO (no obligatorio)"
          className="title-input"
        />

        <textarea
          placeholder="cuerpo del texto (no obligatorio)"
          className="body-textarea"
        />

        <div className="actions">
          <section className="upload-box" >
            <BiSolidImageAlt className="upload-icon" />
          </section>
          <section className="add-box" >
            <FaPlus className="upload-icon" />
          </section>
          <button className="publish-btn">Publicar</button>
        </div>
      </div>
    </Modal>
  );
};

export default CreatePostModal;