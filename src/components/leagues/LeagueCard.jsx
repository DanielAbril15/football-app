import React from "react";
import "../styles/leagues/leagueCard.css";

const LeagueCard = ({ competition }) => {
  return (
    <div className="card-comp__container">
      <figure className="card-comp__logo">
        <img src={competition.league.logo} alt={competition.league.name} />
      </figure>
      <p className="card-comp__name">{competition.league.name}</p>
      <p className="card-comp__type">{competition.league.type}</p>
    </div>
  );
};

export default LeagueCard;
