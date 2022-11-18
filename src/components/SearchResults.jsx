import { useContext } from "react";
import { draftContext } from "../providers/DraftProvider";
import PlayerForm from "./PlayerForm";
import DraftForm from "./DraftForm";



export default function SearchResults(props) {
  const { searchResults, setSearchResults, setSearchTerm, onClick } = useContext(draftContext);
  // const results = props.results;
  // const draftOrderArray = props.storeData;

  // function onClick(e, player) {
  //   props.storeData.push(player)

  //   console.log(props.storeData);

  //   setSearchTerm("");
  //   setSearchResults([]);
  // }

  return searchResults.map(player => {
    return <PlayerForm key={player.name} {...player}
      onClick={onClick}
    />;
  });
}
