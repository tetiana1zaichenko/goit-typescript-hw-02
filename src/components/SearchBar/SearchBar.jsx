import toast from "react-hot-toast";
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
      <header>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => onChangeQuery(e.target.value)}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
