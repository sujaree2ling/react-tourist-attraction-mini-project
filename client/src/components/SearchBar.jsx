import "./SearchBar.css";

function SearchBar(props) {
  function handleChange(event) {
    props.onChange(event.target.value);
  }

  return (
    <div className="search-bar">
      <label className="search-bar__label" htmlFor="search-input">
        ค้นหาที่เที่ยว
      </label>
      <input
        id="search-input"
        className="search-bar__input"
        type="text"
        placeholder="หาที่เที่ยวแล้วไปกัน ..."
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
