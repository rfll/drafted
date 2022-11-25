import { useContext } from 'react';
import { draftContext } from '../providers/DraftProvider';
import './PlayerResults.scss';
import PlayerSearch from './PlayerSearch';
import PlayerSearchEmpty from './PlayerSearchEmpty';

export default function DraftForm(props) {
  const { selectedPlayer } = useContext(draftContext);
  const listPlayers = props.storeData;



  return selectedPlayer.map((player, index) => {

    if (!player) {
      console.log('goodbye')
      return (
        <div className='draft-position-container' key={index}>
          <PlayerSearchEmpty index={index + 1} />
        </div>)
    }

    if (player) {
      console.log('bonjour')
      return (
        <div className='draft-position-container' key={index}>
          <PlayerSearch index={index + 1} {...player} />
        </div>)
    }
  })
}