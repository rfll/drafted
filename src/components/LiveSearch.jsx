import React, { Fragment } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
// import storeData from "../data/storeData";

export default function LiveSearch(props) {

  return (
    <Fragment>
      <header className="logo">
        {/* <img src="images/brand.png" alt="Brand" /> */}
      </header>
      <main>
        <SearchBar />
        <SearchResults
          // storeData={storeData}
        />
      </main>
    </Fragment>
  );
}
