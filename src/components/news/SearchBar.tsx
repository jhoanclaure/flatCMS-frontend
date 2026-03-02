import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar noticia..."
        className="search-input"
      />
      <div className="search-icon" />
    </div>
  );
};

export default SearchBar;