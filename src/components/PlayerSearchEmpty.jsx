import { Draggable } from "react-beautiful-dnd";

export default function PlayerSearchEmpty(props) {

  return (
    <Draggable draggableId={props.index.toString()} index={props.index} key={props.index}>
      {(provided) => (
    <div 
    className='selected-player-info' 
    key={props.position}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    ref={provided.innerRef}>
      <div className="draft-position">{props.position}</div>
    </div>)}
    </Draggable>)
}
