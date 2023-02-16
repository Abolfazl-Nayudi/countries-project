import FilterByContinent from "../FilterByContinent";
import SearchBar from "../SearchBar";
import "./filter-cards.css";
function FilterCards() {
  return (
    <div className="parent">
      <SearchBar />
      <FilterByContinent />
    </div>
  );
}

export default FilterCards;
