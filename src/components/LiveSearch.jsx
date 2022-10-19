import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import fakeData from "../data/fakeData";
import useDebounce from "../hooks/useDebounce";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState({});

  const terms = useDebounce(term, 400);

useEffect(() => {
  // axios.get('../data/fakeData').then(response => {
  //   setResults([...response.data.results])
  //   console.log(response);
  // });

  function loadData() {
  return setResults({...fakeData});}

  loadData();

  // Object.entries(
  //   fakeData
  //     .filter((c) => c.name.toLowerCase().includes(term.toLowerCase()))
  //     .reduce((res, c) => {
  //       if (!res[c.continent.name]) {
  //         res[c.continent.name] = [];
  //       }
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
        <SearchBar onSearch={term => setTerm(term)} />
        <SearchResults key={results.name} results={results} term={term} />
      </main>
    </Fragment>
  );
}
