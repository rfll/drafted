import { useContext } from "react";
import { draftContext } from "../providers/DraftProvider";
import PlayerForm from "./PlayerForm";


export default function SearchResults(props) {
  const { searchResults, onClick } = useContext(draftContext);
  
  return searchResults.map(player => {
    return <PlayerForm key={player.name} {...player}
      onClick={onClick}
    />;
  });
}
