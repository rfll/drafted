import React from "react";

// import PlayerSearch from "./PlayerSearch"
import PlayerForm from "./PlayerForm";

export default function Results(props) {
  // console.log(props)
  // const { results } = props;
  const results = props.results;
  // const term = props.term;

  // console.log(results);
  // console.log(term);

  return results.map(player => {
    // console.log(player.name);
    return <PlayerForm key={player.name} {...player} />;
  });
}
