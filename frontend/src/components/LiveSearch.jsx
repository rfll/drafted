import React, { Fragment } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
// import storeData from "../data/storeData";

export default function LiveSearch(props) {

  return (
    <Fragment>
      <div className="search-components">
        <SearchBar />
        <SearchResults />
      </div>
    </Fragment>
  );
}
