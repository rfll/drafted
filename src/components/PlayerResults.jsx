import './PlayerResults.scss';
import PlayerSearch from './PlayerSearch';

export default function DraftForm(props) {
  const listNames = props.data;

  const showData = listNames.map((playerName) => {
  return <PlayerSearch key={playerName.name} {...playerName} />
})
  
  return (
    <div>
      {showData}
    </div>
  );
}