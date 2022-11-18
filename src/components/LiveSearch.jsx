import React, { Fragment, useContext } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import fakeData from "../data/fakeDataArray";
import useDebounce from "../hooks/useDebounce";
import storeData from "../data/storeData";
import { draftContext } from "../providers/DraftProvider";

export default function LiveSearch(props) {
  const { searchResults, searchTerm } = useContext(draftContext);

  // const [term, setTerm] = useState("");
  // const [results, setResults] = useState([]);

  // const terms = useDebounce(term, 400);

  // useEffect(() => {
  //   if (!terms) {
  //     return setResults([])
  //   }

  //   function loadData() {
  //     return setResults([...fakeData.filter((c) => c.name.toLowerCase().includes(term.toLowerCase()))]);
  //   }

  //   loadData();

  // }, [terms]);

  return (
    <Fragment>
      <header className="logo">
        {/* <img src="images/brand.png" alt="Brand" /> */}
      </header>
      <main>
        <SearchBar
          // setTerm={setTerm}
        />
        <SearchResults
          // key={results.name}
          // results={results}
          // setResults={setResults}
          storeData={storeData}
          // term={term}
          // setTerm={setTerm}
          // terms={terms}
        />
      </main>
    </Fragment>
  );
}
