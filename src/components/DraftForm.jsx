import './DraftForm.scss';

export default function DraftForm(props) {
  const listNames = props.data;

  const showData = Object.values(listNames).map((playerName) => {
  return <div className='player-info' key={playerName.name}><img className='player-image' src={playerName.image}></img> {playerName.name} {playerName.team}</div>
})
  
  return (
    <div className='draft-results'>
      {showData}
    </div>
  );
}