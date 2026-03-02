import "./SearchBar.css";
import { IoMdImage } from "react-icons/io";

interface Props {
  onOpen: () => void;
}

const SearchBar = ({ onOpen }: Props) => {
  return (
    <div className="search-container" onClick={onOpen}>
      <input
        type="text"
        placeholder="Publicar una nueva noticia..."
        className="search-input"
        readOnly
      />
      <IoMdImage style={{ fontSize: "24px", color: "black" }} />
    </div>
  );
};

export default SearchBar;