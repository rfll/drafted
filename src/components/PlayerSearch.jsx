import { useContext } from 'react';
import { draftContext } from '../providers/DraftProvider';


export default function PlayerSearch(props) {
  // const {setIndex} = useContext(draftContext);


  return (
    <div className='selected-player-info' key={props.name}>
      <div className="draft-position">{props.index}</div>
      <div className="selected-player-text">
        <div className='selected-player-name'>{props.name}</div>
        <div className='selected-player-team'>{props.team}</div>
      </div>
      <img className='selected-player-image' src={props.image} alt='draftee'></img>
    </div>)
}
