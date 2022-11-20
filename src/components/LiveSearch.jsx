import React, { Fragment, useContext } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import fakeData from "../data/fakeDataArray";
import useDebounce from "../hooks/useDebounce";
import storeData from "../data/storeData";
import { draftContext } from "../providers/DraftProvider";

export default function LiveSearch(props) {
  const { searchResults, searchTerm } = useContext(draftContext);

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
