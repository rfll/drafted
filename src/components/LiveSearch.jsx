import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Results from "./SearchResults";
// import fakeData from "../data/fakeData";
import fakeData from "../data/fakeDataArray";
import useDebounce from "../hooks/useDebounce";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const terms = useDebounce(term, 400);

useEffect(() => {
  // axios.get('../data/fakeData').then(response => {
  //   setResults([...response.data.results])
  //   console.log(response);
  // });

  function loadData() {
  return setResults([...fakeData]);}

  loadData();

  // Object.entries(
  //   fakeData
  //     .filter((c) => c.name.toLowerCase().includes(term.toLowerCase()))
  //     .reduce((res, c) => {
  //       res[c.continent.name].push(c);
  //       return res;
  //     }, {})
  // );

}, [terms]);

  return (
    <Fragment>
      <header className="logo">
        <img src="images/brand.png" alt="Brand" />
      </header>
      <main>
        <SearchBar setTerm={setTerm} />
        <Results key={results.name} results={results} term={term} />
      </main>
    </Fragment>
  );
}
