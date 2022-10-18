import './PlayerResults.scss';
import PlayerForm from './PlayerForm';

export default function DraftForm(props) {
  const listNames = props.data;

  const showData = Object.values(listNames).map((playerName) => {
  return <PlayerForm key={playerName.name} {...playerName} />
})
  
  return (
    <div>
      {showData}
    </div>
  );
}