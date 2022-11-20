import React from "react";

export default function PlayerSearch(props) {

  return (
    <div className='drafted-player-container'>
      <div className='selected-player-info' key={props.name}>
        <div className="draft-position">{props.index}</div>
        <div className="selected-player-text">
        <div className='selected-player-name'>{props.name}</div> 
        <div className='selected-player-team'>{props.team}</div>
        </div>
        <img className='selected-player-image' src={props.image} alt='draftee'></img>
        </div>
    </div>
  )
}
