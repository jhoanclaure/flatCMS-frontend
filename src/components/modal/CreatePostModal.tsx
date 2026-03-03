import { useState, useRef } from "react";
import Modal from "./Modal";
import "./CreatePostModal.css";

import { BiSolidImageAlt } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { createNews } from "../../services/news.service"; // Importamos tu servicio

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePostModal = ({ isOpen, onClose }: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  
  // Referencia para ocultar el input real de tipo file
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImageFile(file);
      setPreview(URL.createObjectURL(file)); // Crea una URL temporal para previsualizar
    }
  };

  const handlePublish = async () => {
    try {
      await createNews({
        title,
        content,
        image: imageFile
      });
      
      // Limpiar estados y cerrar modal tras el éxito
      setTitle("");
      setContent("");
      setImageFile(null);
      setPreview(null);
      onClose();
      
      // Opcional: Aquí podrías recargar las noticias llamando a una función del padre
    } catch (error) {
      console.error("Error al publicar la noticia:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="create-modal">
        <section>
          <IoClose className="close-btn" onClick={onClose} />
        </section>
        
        <input
          type="text"
          placeholder="TÍTULO (no obligatorio)"
          className="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="cuerpo del texto (no obligatorio)"
          className="body-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="actions">
          {/* Input oculto para subir archivos */}
          <input 
            type="file" 
            accept="image/*" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            style={{ display: "none" }} 
          />
          
          <section 
            className="upload-box" 
            onClick={handleImageClick} 
            style={{ cursor: "pointer", overflow: "hidden" }}
          >
            {preview ? (
              <img src={preview} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <BiSolidImageAlt className="upload-icon" />
            )}
          </section>

          <section className="add-box">
            <FaPlus className="upload-icon" />
          </section>
          
          <button className="publish-btn" onClick={handlePublish}>
            Publicar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreatePostModal;