import { Container } from "react-bootstrap";
import Header from "./components/Header";
import FilterCards from "./components/FilterCards";
import "./App.css";
import CardList from "./components/CardList";
import { useEffect, useState } from "react";
import useFetch from "./components/useFetch";

function App() {
  const { data: fetchData } = useFetch();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (fetchData.length) {
      setData(fetchData);
    }
  }, [fetchData]);
  function getFilteredDataBySearch(arr) {
    setData(arr);
  }

  return (
    <div>
      <Header />
      <Container fluid="xl">
        <FilterCards getData={getFilteredDataBySearch} data={fetchData} />
        <CardList data={data} />
      </Container>
    </div>
  );
}

export default App;
