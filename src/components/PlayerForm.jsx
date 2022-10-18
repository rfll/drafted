import './PlayerForm.scss';

export default function PlayerForm(props) {

  return (
    <div className='draft-results'>
      <div className='player-info' key={props.name}><img className='player-image' src={props.image} alt=''></img> {props.name} {props.team}</div>
    </div>
  )
}