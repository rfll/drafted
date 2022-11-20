import { useContext } from 'react';
import { draftContext } from '../providers/DraftProvider';
import './PlayerResults.scss';
import PlayerSearch from './PlayerSearch';

export default function DraftForm(props) {
  const { selectedPlayer, setSelectedPlayer } = useContext(draftContext);
  const listPlayers = props.storeData;

  return selectedPlayer.map((player, index) => {
    return <PlayerSearch key={player.name} index={index + 1} {...player} />
  })
}