import { useContext, useEffect, useState } from 'react';
import { draftContext } from '../providers/DraftProvider';
import PlayerSearch from './PlayerSearch';
import PlayerSearchEmpty from './PlayerSearchEmpty';
import { Droppable } from 'react-beautiful-dnd';

export default function DraftForm(props) {
  const { selectedPlayer, index, clickDraftSlot } = useContext(draftContext);

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
    <Droppable droppableId='draft-order'>
      {(provided) => {
        return (
          <div className='selected-players' ref={provided.innerRef} {...provided.droppableProps}>
            {selectedPlayer.map((player, playerIndex) => {

              return (
                <div className='draft-position-container' key={playerIndex}>
                  {!player.name
                    ? <PlayerSearchEmpty
                      position={playerIndex + 1}
                      index={playerIndex}
                      />
                    : <PlayerSearch
                      position={playerIndex + 1}
                      index={playerIndex}
                      {...player}
                    />}
                </div>
              )
            })
            }
            {provided.placeholder}
          </div>)
      }}
    </Droppable>
  )
}