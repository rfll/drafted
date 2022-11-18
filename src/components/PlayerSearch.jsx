import React from "react";

export default function PlayerSearch(props) {

  return (
    <div className='draft-results'>
      <div className='selected-player-info' key={props.name}>
        <img className='selected-player-image' src={props.image} alt='draftee'></img>
        <div className='selected-player-name'>{props.name}</div> 
        <div className='selected-player-team'>{props.team}</div>
        </div>
    </div>
  )
}
