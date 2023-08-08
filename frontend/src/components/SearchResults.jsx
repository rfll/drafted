import { useContext } from "react";
import { draftContext } from "../providers/DraftProvider";
import SearchPlayerForm from "./SearchPlayerForm";


export default function SearchResults(props) {
  const { searchResults, onClick } = useContext(draftContext);
  
  return searchResults.map(player => {
    return <SearchPlayerForm key={player.name} {...player}
      onClick={onClick}
    />;
  });
}
