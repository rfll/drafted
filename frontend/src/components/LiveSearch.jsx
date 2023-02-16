import React, { Fragment } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default function LiveSearch(props) {
  return (
    <Fragment>
      <div className="search-components">
        <SearchBar />
        <div className="search-results">
          <SearchResults />
        </div>
      </div>
    </Fragment>
  );
}
