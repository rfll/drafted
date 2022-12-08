import { useContext } from 'react';
import { draftContext } from '../providers/DraftProvider';
import storeData from '../data/storeData';
import './PlayerResults.scss';
import PlayerSearch from './PlayerSearch';
import PlayerSearchEmpty from './PlayerSearchEmpty';
import { Droppable } from 'react-beautiful-dnd';

export default function DraftForm(props) {
  const { selectedPlayer, updatedPlayer, setIndex } = useContext(draftContext);



  // return Object.values(selectedPlayer).map((player, index) => {

  return selectedPlayer.map((player, index) => {

    return (
      <div className='draft-position-container' key={index}>
        {!player.name
          ? <PlayerSearchEmpty position={index + 1} />
          : <Droppable droppableId={selectedPlayer} >
            {(provided) => (
              <PlayerSearch
                position={index + 1}
                index={index}
                {...player}
                innerRef={provided.innerRef}
                {...provided.droppableProps}
              >
                {provided.placeholder}
              </PlayerSearch>
            )}
          </Droppable>
        }
      </div>)


  })
}