import "./SearchBar.css";
import { IoMdImage } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Publicar una nueva noticia..."
        className="search-input"
      />
      <IoMdImage style={{ fontSize: "24px", color: "black" }} />
    </div>
  );
};

export default SearchBar;