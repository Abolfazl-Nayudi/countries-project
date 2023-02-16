import { Container } from "react-bootstrap";
import Header from "./components/Header";
import FilterCards from "./components/FilterCards";
import "./App.css";
import CardList from "./components/CardList";

function App() {
  return (
    <div>
      <Header />
      <Container fluid="xl">
        <FilterCards />
        <CardList />
      </Container>
    </div>
  );
}

export default App;
