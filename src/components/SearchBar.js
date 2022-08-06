const SearchBar = ({ search, setSearch, name }) => {
  return (
    <div>
      {/* ⬇︎ à chaque fois que le contenu de l'input change la function sera déclanchée*/}
      <input
        type="text"
        placeholder={`Search for ${name}`} // name : characters ou comics
        value={search} // ce qui est affiché dans l'input est la value du state search
        onChange={(event) => {
          // ⬇︎ setSearch stock dans le state le contenu de l'input à chaque fois qu'il change
          setSearch(event.target.value);
        }}
      />
    </div>
  );
};
export default SearchBar;
