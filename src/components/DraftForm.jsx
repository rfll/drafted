import { useContext } from 'react';
import { draftContext } from '../providers/DraftProvider';
import storeData from '../data/storeData';
import './PlayerResults.scss';
import PlayerSearch from './PlayerSearch';
import PlayerSearchEmpty from './PlayerSearchEmpty';

export default function DraftForm(props) {
  const { selectedPlayer, updatedPlayer, setIndex } = useContext(draftContext);

  return Object.values(selectedPlayer).map((player, index) => {

    if (!player.name) {
      return (
        <div className='draft-position-container' key={index}>
          <PlayerSearchEmpty position={player.position} />
        </div>)
    }

    if (player.name) {
      return (
        <div className='draft-position-container' key={index}>
          <PlayerSearch index={index + 1} {...player} />
        </div>)
    }


  })
}