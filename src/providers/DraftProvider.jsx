import { createContext, useState, useEffect } from "react";
import fakeData from "../data/fakeDataArray";
import useDebounce from "../hooks/useDebounce";
import storeData from "../data/storeData";

export const draftContext = createContext();


export default function DraftProvider(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const debounceTerm = useDebounce(searchTerm, 400);

  useEffect(() => {
    if (!debounceTerm) {
      return setSearchResults([])
    }

    function loadData() {
      return setSearchResults([...fakeData.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()))]);
    }

    loadData();

  }, [debounceTerm]);


  function onClick(e, player) {
    storeData.push(player)

    console.log(storeData);

    setSelectedPlayer([...selectedPlayer, player]);
    setSearchTerm("");
    setSearchResults([]);
  }


  const draftData = {
    searchTerm, setSearchTerm,
    searchResults, setSearchResults,
    selectedPlayer, setSelectedPlayer,
    onClick
  }

  return (
    <draftContext.Provider value={draftData}>
      {props.children}
    </draftContext.Provider>
  );
}