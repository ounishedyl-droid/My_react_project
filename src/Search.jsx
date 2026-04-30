function Search({ searchTerm, onSearch }) {
  return (
    <div>
      <label htmlFor="search">Search:</label>

      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;