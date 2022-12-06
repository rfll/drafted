import { createContext, useState, useEffect } from "react";
import fakeData from "../data/fakeDataArray";
import useDebounce from "../hooks/useDebounce";
import storeData from "../data/storeData";
import storeDataObject from "../data/storeDataObject";

export const draftContext = createContext();


export default function DraftProvider(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(storeDataObject);
  const [updatedPlayer, setUpdatedPlayer] = useState();
  const [draftPosition, setDraftPosition] = useState({
    ...selectedPlayer
  });
  const [index, setIndex] = useState(1);

  // This is state
  const debounceTerm = useDebounce(searchTerm, 400);

  // console.log(draftPosition)

  useEffect(() => {
    if (!debounceTerm) {
      return setSearchResults([])
    }

    function loadData() {
      return setSearchResults([...fakeData.filter((c) => c.name.toLowerCase().includes(debounceTerm.toLowerCase()))]);
    }

    loadData();

  }, [debounceTerm]);


  function onClick(e, player) {
    // storeData.push(player)

    // console.log(e);

    setSelectedPlayer({
      ...selectedPlayer,
      [index]: {
        position: index,
        name: player.name,
      team: player.team,
      image: player.image}
    })

    // selectedPlayer.splice(0, 1, player);
    setIndex(index + 1)
    setUpdatedPlayer(player)
    setSearchTerm("");
    setSearchResults([]);
  }


  // useEffect(() => {
  //     // storeData.push(updatedPlayer);
  //     // setSelectedPlayer(storeData)

  //     // storeData.splice(0, 1, updatedPlayer)

  //     // setSelectedPlayer([...selectedPlayer, updatedPlayer])

  //     console.log(selectedPlayer)

  //   }, [updatedPlayer])

  function changeDraftOrder(e, player) {

  }


  const draftData = {
    searchTerm, setSearchTerm,
    searchResults, setSearchResults,
    selectedPlayer, setSelectedPlayer,
    updatedPlayer, setUpdatedPlayer,
    draftPosition, setDraftPosition,
    onClick,
    index, setIndex
  }

  return (
    <draftContext.Provider value={draftData}>
      {props.children}
    </draftContext.Provider>
  );
}