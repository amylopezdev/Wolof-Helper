export const SearchInput = ({ handleChange }) => {
  return (
    <input
      type="search"
      name="search-input"
      id="search-input"
      className="search-input"
      onChange={handleChange}
      placeholder="Search 🔎"
    />
  );
};
