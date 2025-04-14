const SearchBar = ({ onSubmit, query, onChangeQuery }) => {
  return (
    <div>
      <header>
        <form onSubmit={onSubmit}>
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
