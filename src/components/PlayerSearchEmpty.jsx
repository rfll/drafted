export default function PlayerSearchEmpty(props) {

  return (
    <div className='selected-player-info' key={props.position}>
      <div className="draft-position">{props.position}</div>
    </div>)
}
