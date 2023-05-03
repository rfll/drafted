import { createContext, useState, useEffect } from "react";
import axios from "axios";
import draftPositionData from "../data/draftPositionData";
import useDebounce from "../hooks/useDebounce";

export const draftContext = createContext();

export default function DraftProvider(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState(
    draftPositionData.position
  );
  const [playerData, setPlayerData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [index, setIndex] = useState(0);
  const [clickedItem, setClickedItem] = useState("stats");
  const [playerProfile, setPlayerProfile] = useState([]);

  // This is state
  const debounceTerm = useDebounce(searchTerm, 200);

  // React Beautiful DnD
  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.index === destination.index) return;

    let add;
    let active = selectedPlayer;

    if (source.index !== destination.index) {
      add = active[source.index];
      active.splice(source.index, 1);
      active.splice(destination.index, 0, add);
      setSelectedPlayer(active);
    }
  };

  // Server call for player data
  useEffect(() => {
    axios.get("/db/players").then((response) => {
      const players = response.data;
      setSearchResults([...players]);
      setPlayerData([...players]);
    });
  }, []);

  // Search function
  useEffect(() => {
    setSearchResults([
      ...playerData.filter((playerInfo) =>
        playerInfo.name.toLowerCase().includes(debounceTerm.toLowerCase())
      ),
    ]);
    console.log('y');
    // eslint-disable-next-line
  }, [debounceTerm]);

  function onClick(e, player) {
    // Index of player clicked in searchResults
    const newIndex = playerData.findIndex(
      (element) => element.name === player.name
    );

    // Add player object to selectedPlayer array and stores deleted player
    const deletedPlayer = selectedPlayer.splice(index, 1, player);
    const [destructedDeletedPlayer] = deletedPlayer;

    // When a player is being replaced on the draft board, return them to the search array
    if (destructedDeletedPlayer.name) {
      playerData.push(destructedDeletedPlayer);
    }

    // searchResults.splice(newIndex, 1);
    playerData.splice(newIndex, 1);
    setSearchResults(playerData.sort((a,b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0)));
    setIndex(index + 1);

    setSearchTerm("");
    // setSearchResults([]);
    setPlayerProfile(player);
    setClickedItem("stats");
  }

  function clickDraftSlot(e, player) {
    setIndex(player.index);
    // setPlayerProfile(player);
    !player.name ? setPlayerProfile(playerProfile) : setPlayerProfile(player)
    setClickedItem("stats");
  }

  const draftData = {
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults,
    selectedPlayer,
    setSelectedPlayer,
    onClick,
    clickDraftSlot,
    onDragEnd,
    index,
    setIndex,
    clickedItem,
    setClickedItem,
    playerProfile,
    setPlayerProfile
  };

  return (
    <draftContext.Provider value={draftData}>
      {props.children}
    </draftContext.Provider>
  );
}
