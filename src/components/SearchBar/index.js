import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search-bar.css";
function SearchBar() {
  return (
    <section className="parent-form">
      <form className="form">
        <button type="submit" className="submit-btn">
          <FontAwesomeIcon
            className="search-icon"
            icon={faSearch}
          ></FontAwesomeIcon>
        </button>
        <input placeholder="Search for a country" />
      </form>
    </section>
  );
}

export default SearchBar;
