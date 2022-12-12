import { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { draftContext } from "../providers/DraftProvider";

export default function PlayerSearchEmpty(props) {
  const { clickDraftSlot } = useContext(draftContext)

  return (
    <Draggable draggableId={props.index.toString()} index={props.index} key={props.index}>
      {(provided) => (
    <div 
    className='selected-player-info' 
    key={props.position}
    onClick={e => clickDraftSlot(e.target, props)}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    ref={provided.innerRef}>
      <div className="draft-position">{props.position}</div>
    </div>)}
    </Draggable>)
}
