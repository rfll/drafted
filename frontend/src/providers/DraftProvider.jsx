import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import draftPositionData from "../data/draftPositionData";
import useDebounce from "../hooks/useDebounce";

export const draftContext = createContext();


export default function DraftProvider(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(draftPositionData.position);
  const [draftPosition, setDraftPosition] = useState({
    ...selectedPlayer
  });
  const [index, setIndex] = useState(0);
  const [clickedItem, setClickedItem] = useState(index);

  // This is state
  const debounceTerm = useDebounce(searchTerm, 200);

  // React Beautiful DnD
  const onDragEnd = result => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.index === destination.index) return;

    let add;
    let active = selectedPlayer;

    if (source.index !== destination.index) {
      add = active[source.index]
      active.splice(source.index, 1)
      active.splice(destination.index, 0, add)
      setSelectedPlayer(active)
    }
  }

  useEffect(() => {
    // if (!debounceTerm) {
    //   return setSearchResults([])
    // }

    axios.get('/db/players').then(response => {

      const players = response.data;

      setSearchResults([...players.filter((c) => c.name.toLowerCase().includes(debounceTerm.toLowerCase()))])
    })

  }, [debounceTerm]);


  function onClick(e, player) {

    const newIndex = searchResults.findIndex(element => element.name === player.name)

    selectedPlayer.splice(index, 1, player);
    searchResults.splice(newIndex, 1)
    setIndex(index + 1)

    setSearchTerm("");
    // setSearchResults([]);
  }

  function clickDraftSlot(e, player) {
    setIndex(player.index);
  }

  const draftData = {
    searchTerm, setSearchTerm,
    searchResults, setSearchResults,
    selectedPlayer, setSelectedPlayer,
    draftPosition, setDraftPosition,
    onClick,
    clickDraftSlot,
    onDragEnd,
    index, setIndex,
    clickedItem, setClickedItem
  }

  return (
    <draftContext.Provider value={draftData}>
      {props.children}
    </draftContext.Provider>
  );
}