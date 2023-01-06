import { useContext, useEffect, useState } from 'react';
import { draftContext } from '../providers/DraftProvider';
import storeData from '../data/storeData';
import './PlayerResults.scss';
import PlayerSearch from './PlayerSearch';
import PlayerSearchEmpty from './PlayerSearchEmpty';
import { Droppable } from 'react-beautiful-dnd';

export default function DraftForm(props) {
  const { selectedPlayer, updatedPlayer, setIndex } = useContext(draftContext);

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <Droppable droppableId='draft-order' >
      {(provided) => {
        return (
          <div className='selected-players' ref={provided.innerRef} {...provided.droppableProps}>
            {provided.placeholder}
            {selectedPlayer.map((player, index) => {

              return (
                <div className='draft-position-container' >
                  {!player.name
                    ? <PlayerSearchEmpty
                      position={index + 1}
                      index={index} />
                    : <PlayerSearch
                      position={index + 1}
                      index={index}
                      {...player}
                    />}
                </div>
              )
            })
            }
          </div>)
      }}
    </Droppable>
  )
}