import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
const SearchBar = ({ onSubmit, query, onChangeQuery }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Enter the text for looking images please.");
      return;
    }
    onSubmit(e);
  };
  return (
    <div>
      <header className={s.header}>
        <form className={s.searchForm} onSubmit={handleFormSubmit}>
          <span className="s.search-button">🔍</span>
          <input
            className={s.searchInput}
            type="text"
            value={query}
            onChange={(e) => onChangeQuery(e.target.value)}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.searchButton} type="submit">
            Search
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
