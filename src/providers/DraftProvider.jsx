import { createContext, useState, useEffect } from "react";
import fakeData from "../data/fakeDataArray";
import useDebounce from "../hooks/useDebounce";
import storeData from "../data/storeData";

export const draftContext = createContext();


export default function DraftProvider(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(storeData);
  const [updatedPlayer, setUpdatedPlayer] = useState();
  const [draftPosition, setDraftPosition] = useState();

  const debounceTerm = useDebounce(searchTerm, 400);

  useEffect(() => {
    if (!debounceTerm) {
      return setSearchResults([])
    }

    function loadData() {
      return setSearchResults([...fakeData.filter((c) => c.name.toLowerCase().includes(debounceTerm.toLowerCase()))]);
    }

    loadData();

  }, [debounceTerm]);


  useEffect(() => {
    // storeData.push(updatedPlayer);
    // setSelectedPlayer(storeData)

    storeData.splice(0, 1, updatedPlayer)
    
  }, [updatedPlayer])


  function onClick(e, player) {
    // storeData.push(player)

    // console.log(storeData);

    // setSelectedPlayer([...selectedPlayer, player]);
    // selectedPlayer.splice(0, 1, player);
    setUpdatedPlayer(player)
    setSearchTerm("");
    setSearchResults([]);
  }


  function changeDraftOrder(e, player) {

  }


  const draftData = {
    searchTerm, setSearchTerm,
    searchResults, setSearchResults,
    selectedPlayer, setSelectedPlayer,
    updatedPlayer, setUpdatedPlayer,
    draftPosition, setDraftPosition,
    onClick
  }

  return (
    <draftContext.Provider value={draftData}>
      {props.children}
    </draftContext.Provider>
  );
}