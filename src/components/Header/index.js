import { useState } from "react";
import "./header.css";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [iconTheme, setIconTheme] = useState(faMoon);
  const [textTheme, setTextTheme] = useState("Dark Mode");

  function handleThemeClick() {
    if (iconTheme === faMoon) {
      function toLightMode() {
        setIconTheme(faSun);
        setTextTheme("Light Mode");
      }
      toLightMode();
    } else {
      function toDarkMode() {
        setIconTheme(faMoon);
        setTextTheme("Dark Mode");
      }
      toDarkMode();
    }
  }

  return (
    <Navbar className="header">
      <Container>
        <Navbar.Brand className="web-name" href="#home">
          Where is the World?
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className="theme-changer" onClick={handleThemeClick}>
              <FontAwesomeIcon icon={iconTheme}></FontAwesomeIcon>
              <span>{textTheme}</span>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
