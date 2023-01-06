import { useContext } from 'react';
import { draftContext } from '../providers/DraftProvider';
import './PlayerForm.scss';

export default function PlayerForm(props) {
  const { onClick } = useContext(draftContext);

  return (
    <div className='draft-results' onClick={e => onClick(e.target, props)}>
      <img className='player-image' src={props.img} alt='draftee'></img>
      <div className='player-info' key={props.name}>
        {/* <img className='player-image' src={props.image} alt='draftee'></img>  */}
        <div className='player-name'>{props.name}</div> 
        <div className='player-team'>{props.team}</div>
        </div>
    </div>
  )
}