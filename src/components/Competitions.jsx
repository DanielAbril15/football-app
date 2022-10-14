import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchLeague from "./leagues/SearchLeague";
import LeagueCard from "./leagues/LeagueCard";
import "./styles/competitions.css";

const Competitions = () => {
  const [competitions, setCompetitions] = useState();
  useEffect(() => {
    const config = {
      method: "get",
      url: "https://v3.football.api-sports.io/leagues",
      headers: {
        "x-rapidapi-key": "140cad4a113814978e0d283e75b830d7",
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
    };
    axios(config)
      .then((res) => setCompetitions(res.data.response))
      .catch((err) => console.log(err));
  }, []);
  return (
    <article className="competitions">
      <h2>COMPETITIONS</h2>
      <div className="competitions__search">
        <SearchLeague />
      </div>
      <section className="competitions__container">
        {competitions?.map((competition) => (
          <LeagueCard competition={competition} key={competition?.league.id} />
        ))}
      </section>
    </article>
  );
};

export default Competitions;
