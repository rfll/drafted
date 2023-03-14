import React, { useContext } from "react";
import { draftContext } from "../providers/DraftProvider";

export default function PlayerProfile() {
  const { playerProfile, setClickedItem, clickedItem } = useContext(
    draftContext
  );

  return (
    <div className="player-profile">
      {playerProfile.img && (
        <div className="profile-container">
          <div className="profile-top-row">
            <img
              className="profile-image"
              src={playerProfile.img}
              alt={playerProfile.name}
            ></img>
            <div className="profile-information">
              <div className="profile-name">{playerProfile.name}</div>
              <div className="profile-team">{playerProfile.team}</div>
              {playerProfile.league === "NCAA" && (
                <div className="profile-league">
                  {playerProfile.league} {playerProfile.conference}
                </div>
              )}
              {playerProfile.league === "GLI" && (
                <div className="profile-league">
                  {playerProfile.leagueTwo}
                </div>
              )}
              {playerProfile.league === "INT" && (
                <div className="profile-league">
                  {playerProfile.leagueTwo}
                </div>
              )}
              {playerProfile.league === "OTE" && (
                <div className="profile-league">
                  {playerProfile.leagueTwo}
                </div>
              )}
              <div className="profile-height">{playerProfile.height}</div>
              <div className="profile-weight">{playerProfile.weight}</div>
            </div>
          </div>
          <div className="profile-buttons">
            <div className="profile-nav">
              <button
                className={
                  clickedItem === "stats"
                    ? "profile-button-clicked"
                    : "profile-button"
                }
                onClick={() => setClickedItem("stats")}
              >
                Stats
              </button>
              <button
                className={
                  clickedItem === "video"
                    ? "profile-button-clicked"
                    : "profile-button"
                }
                onClick={() => setClickedItem("video")}
              >
                Video
              </button>
            </div>
          </div>
          {clickedItem === "stats" && (
            <div className="profile-stats">
              <table className="selected-player-info-stats">
                <thead>
                  <tr>
                    <th>GP</th>
                    <th>MPG</th>
                    <th>PPG</th>
                    <th>APG</th>
                    <th>RPG</th>
                    <th>SPG</th>
                    <th>BPG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{playerProfile.gamesPlayed}</td>
                    <td>{playerProfile.minutesPerGame}</td>
                    <td>{playerProfile.pointsPerGame}</td>
                    <td>{playerProfile.assistsPerGame}</td>
                    <td>{playerProfile.reboundsPerGame}</td>
                    <td>{playerProfile.stealPerGame}</td>
                    <td>{playerProfile.blocksPerGame}</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>FG%</th>
                    <th>3P%</th>
                    <th>TPG</th>
                    <th>FPG</th>
                    <th>BPM</th>
                    <th>PER</th>
                    <th>WS40</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{playerProfile.fgPercentage}</td>
                    <td>{playerProfile.threePercentage}</td>
                    <td>{playerProfile.turnoversPerGame}</td>
                    <td>{playerProfile.foulsPerGame}</td>
                    <td>{playerProfile.bpm}</td>
                    <td>{playerProfile.per}</td>
                    <td>{playerProfile.wsPer40}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {clickedItem === "video" && (
            <div className="video-container">
              <iframe
                className="video-player"
                src={`https://www.youtube.com/embed/${playerProfile.video}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
