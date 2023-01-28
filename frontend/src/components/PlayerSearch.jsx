import { useContext } from "react";
import { draftContext } from "../providers/DraftProvider";
import { Draggable } from "react-beautiful-dnd";

export default function PlayerSearch(props) {
  const { clickDraftSlot, index } = useContext(draftContext);

  console.log(props);

  return (
    <Draggable
      draggableId={props.index.toString()}
      index={props.index}
      key={props.index}
    >
      {(provided) => (
        <div
          className={
            index !== props.index
              ? "selected-player-info"
              : "selected-player-info-clicked"
          }
          key={props.name}
          onClick={(e) => clickDraftSlot(e, props)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="selected-player-info-top-row">
            <div className="draft-position">{props.position}</div>
            <div className="selected-player-text">
              <div className="selected-player-name">{props.name}</div>
              <div className="selected-player-team">{props.team}</div>
            </div>
            <img
              className="selected-player-image"
              src={props.img}
              alt={props.name}
            ></img>
          </div>
          {index === props.index && (
            <table className="selected-player-info-stats">
              <tr>
                <th>Games Played</th>
                <th>Points</th>
                <th>Assists</th>
                <th>Rebounds</th>
                <th>Steals</th>
                <th>Blocks</th>
              </tr>
              <tr>
                <th>{props.gamesPlayed}</th>
                <th>{props.pointsPerGame}</th>
                <th>{props.assistsPerGame}</th>
                <th>{props.reboundsPerGame}</th>
                <th>{props.stealPerGame}</th>
                <th>{props.blocksPerGame}</th>
              </tr>
              <tr>
                <th>BPM</th>
                <th>Steal %</th>
                <th>Block %</th>
              </tr>
              <tr>
                <th>{props.bpm}</th>
                <th>{props.stlPercentage}</th>
                <th>{props.blkPercentage}</th>
              </tr>
            </table>
          )}
        </div>
      )}
    </Draggable>
  );
}
