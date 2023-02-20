import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search-bar.css";
function SearchBar({ handleChange, inputValue }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="parent-form">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="submit-btn">
          <FontAwesomeIcon
            className="search-icon"
            icon={faSearch}
          ></FontAwesomeIcon>
        </button>
        <input
          value={inputValue}
          onChange={handleChange}
          placeholder="Search for a country"
        />
      </form>
    </section>
  );
}

export default SearchBar;
