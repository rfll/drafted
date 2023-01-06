import { useContext } from 'react';
import { draftContext } from '../providers/DraftProvider';
import { Draggable } from 'react-beautiful-dnd';


export default function PlayerSearch(props) {

  return (
    <Draggable draggableId={props.index.toString()} index={props.index} key={props.index}>
      {(provided) => (
        <div
          className='selected-player-info'
          key={props.name}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          <div className="draft-position">{props.position}</div>
          <div className="selected-player-text">
            <div className='selected-player-name'>{props.name}</div>
            <div className='selected-player-team'>{props.team}</div>
          </div>
          <img className='selected-player-image' src={props.img} alt='draftee'></img>
        </div>
      )}
    </Draggable>
  )
}
