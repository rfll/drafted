import { useContext } from 'react';
import { draftContext } from '../providers/DraftProvider';

export default function PlayerForm(props) {
  const { onClick } = useContext(draftContext);

  return (
    <div className='draft-results' onClick={e => onClick(e.target, props)}>
      <img className='player-image' src={props.img} alt='draftee'></img>
      <div className='player-info' key={props.name}>
        <div className='player-name'>{props.name}</div> 
        <div className='player-team'>{props.team}</div>
        </div>
    </div>
  )
}