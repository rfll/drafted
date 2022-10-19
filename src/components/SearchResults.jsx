import React from "react";

import PlayerSearch from "./PlayerSearch"

export default function Results(props) {
  // const { results } = props;
  const results = props.results;

  console.log(results);

  return Object.values(results).map(player => {
    return <PlayerSearch key={player.name} {...player} />;
  });
}
