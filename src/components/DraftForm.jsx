import './PlayerResults.scss';
import PlayerSearch from './PlayerSearch';

export default function DraftForm(props) {
  const listPlayers = props.storeData;

  return listPlayers.map((player) => {
    return <PlayerSearch key={player.name} {...player} />
  })
}