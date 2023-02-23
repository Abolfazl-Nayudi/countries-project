// import { Container } from "react-bootstrap";
// import Header from "./components/Header";
// import FilterCards from "./components/FilterCards";
// import "./App.css";
// import CardList from "./components/CardList";
// import { createContext, useEffect, useState } from "react";
// import useFetch from "./components/useFetch";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CountryDetail from "./components/CountryDetail";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import Header from "./components/Header";
import Countries from "./Countries";

// export const ThemeContext = createContext(null);
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (themeType) => {
    setTheme(themeType);
  };
  const body = document.querySelector("body");
  body.style.background = theme === "light" ? "white" : "hsl(207, 26%, 17%)";

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id={theme}>
        <BrowserRouter>
          <Header themeFunc={toggleTheme} />
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/country/:name" element={<CountryDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
  // const [theme, setTheme] = useState("light");
  // const { data: fetchData } = useFetch();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   if (fetchData.length) {
  //     setData(fetchData);
  //   }
  // }, [fetchData]);
  // function getFilteredDataBySearch(arr) {
  //   setData(arr);
  // }

  // const toggleTheme = (themeType) => {
  //   setTheme(themeType);
  // };

  // const body = document.querySelector("body");
  // body.style.background = theme === "light" ? "white" : "hsl(207, 26%, 17%)";

  // return (
  //   <ThemeContext.Provider value={{ theme, setTheme }}>
  //     <div id={theme}>
  //       <BrowserRouter>
  //         <Header themeFunc={toggleTheme} />
  //         <Routes>
  //           <Route path="/country/:name" element={<CountryDetail />} />
  //         </Routes>
  //       </BrowserRouter>
  //       <Container fluid="xl">
  //         <FilterCards getData={getFilteredDataBySearch} data={fetchData} />
  //         <CardList data={data} />
  //       </Container>
  //     </div>
  //   </ThemeContext.Provider>
  // );
}

export default App;
