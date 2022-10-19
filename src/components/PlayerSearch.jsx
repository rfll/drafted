import React from "react";

export default function PlayerSearch(props) {

  return (
    <div className='draft-results'>
      <div className='player-info' key={props.name}><img className='player-image' src={props.image} alt='draftee'></img> {props.name} {props.team}</div>
    </div>
  )
}