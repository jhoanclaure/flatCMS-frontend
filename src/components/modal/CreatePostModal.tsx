import Modal from "./Modal";
import "./CreatePostModal.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePostModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="create-modal">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

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
          <div className="upload-box" />
          <div className="add-box" />
          <button className="publish-btn">Publicar</button>
        </div>
      </div>
    </Modal>
  );
};

export default CreatePostModal;