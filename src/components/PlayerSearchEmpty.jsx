export default function PlayerSearchEmpty(props) {

  return (
    <div className='selected-player-info' key={props.index}>
      <div className="draft-position">{props.index}</div>
      <div className="selected-player-text">
        <div className='selected-player-name'></div>
        <div className='selected-player-team'></div>
      </div>
      {/* <img className='selected-player-image' src={props.image} alt='draftee'></img> */}
    </div>)
}