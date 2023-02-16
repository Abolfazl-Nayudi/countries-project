// import { Dropdown, DropdownButton } from "react-bootstrap";
import "./filter-by-continent.css";
function FilterByContinent() {
  const continentArray = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const continentItem = continentArray.map((continent, index) => {
    return (
      <option className="each-continent" key={index}>
        {continent}
      </option>
    );
  });

  return (
    <select>
      <option>Filter by Region</option>
      {continentItem}
    </select>
  );
}

export default FilterByContinent;
