import './PlayerForm.scss';

export default function PlayerForm(props) {

  return (
    <div className='draft-results'>
      <img className='player-image' src={props.image} alt='draftee'></img>
      <div className='player-info' key={props.name}>
        {/* <img className='player-image' src={props.image} alt='draftee'></img>  */}
        <div className='player-name'>{props.name}</div> 
        <div className='player-team'>{props.team}</div>
        </div>
    </div>
  )
}