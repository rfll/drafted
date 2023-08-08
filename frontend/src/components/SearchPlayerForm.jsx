import { useContext } from "react";
import { draftContext } from "../providers/DraftProvider";

export default function SearchPlayerForm(props) {
  const { onClick } = useContext(draftContext);
  
  return (
    <div className="player-search-results" onClick={(e) => onClick(e.target, props)}>
      <img className="player-image" src={props.img} alt={props.name}></img>
      <div className="player-info" key={props.name}>
        <div className="player-name">{props.name}</div>
        <div className="player-team">{props.team}</div>
      </div>
    </div>
  );
}
