import { useContext } from "react";
import { draftContext } from "../providers/DraftProvider";
import { Draggable } from "react-beautiful-dnd";

export default function PlayerSearch(props) {
  const { clickDraftSlot, index } = useContext(draftContext);

  // console.log(props);

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
              <thead>
                <tr>
                  <th>HT</th>
                  <th>WT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.height}</td>
                  <td>{props.weight}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>GP</th>
                  <th>MPG</th>
                  <th>PPG</th>
                  <th>APG</th>
                  <th>RPG</th>
                  <th>SPG</th>
                  <th>BPG</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.gamesPlayed}</td>
                  <td>{props.minutesPerGame}</td>
                  <td>{props.pointsPerGame}</td>
                  <td>{props.assistsPerGame}</td>
                  <td>{props.reboundsPerGame}</td>
                  <td>{props.stealPerGame}</td>
                  <td>{props.blocksPerGame}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>FG%</th>
                  <th>3P%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.fgPercentage}</td>
                  <td>{props.threePercentage}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>BPM</th>
                  <th>Stl%</th>
                  <th>Blk%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.bpm}</td>
                  <td>{props.stlPercentage}</td>
                  <td>{props.blkPercentage}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      )}
    </Draggable>
  );
}
