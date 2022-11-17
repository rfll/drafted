// import PlayerSearch from "./PlayerSearch"
import PlayerForm from "./PlayerForm";
import DraftForm from "./DraftForm";



export default function SearchResults(props) {
  const results = props.results;
  // const draftOrderArray = props.storeData;

  function onClick(e, player) {
    props.storeData.push(player)

    console.log(props.storeData);

    props.setTerm("");
    props.setResults([]);
  }

  return results.map(player => {
    return <PlayerForm key={player.name} {...player}
      onClick={onClick}
    />;
  });
}
