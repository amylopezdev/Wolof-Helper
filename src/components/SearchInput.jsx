export const SearchInput = ({ handleChange, searchField }) => {
  return (
    <input
      type="search"
      name="search-input"
      id="search-input"
      className="search-input"
      onChange={handleChange}
      placeholder="Search 🔎"
      value={searchField}
    />
  );
};
