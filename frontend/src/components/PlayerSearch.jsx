import { useContext } from "react";
import { draftContext } from "../providers/DraftProvider";
import { Draggable } from "react-beautiful-dnd";

export default function PlayerSearch(props) {
  const { clickDraftSlot, index } = useContext(draftContext);

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
          <div className="left-side">
            <div className="draft-position-width"><div className="draft-position">{props.position}</div></div>
            <div className="selected-player-text">
              <div className="selected-player-name">{props.name}</div>
              <div className="selected-player-team">{props.team}</div>
              {props.league === "NCAA" ? (
                <div className="selected-player-league">
                  {`${props.league} `}
                  {props.conference}
                </div>
              ) : (
                <div className="selected-player-league">{props.leagueTwo}</div>
              )}
            </div>
          </div>
          <img
            className="selected-player-image"
            src={props.img}
            alt={props.name}
          ></img>
        </div>
      )}
    </Draggable>
  );
}
