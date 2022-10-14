import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";

const Home = () => {
  return (
    <article className="home">
      <h1>Just Football</h1>
      <section className="home__options">
        <div className="home__option-league">
          <h3>
            <Link to="/leagues">COMPETITIONS</Link>
          </h3>
        </div>
        <div className="home__option-live">
          <h3>
            <Link>LIVE MATCHES</Link>
          </h3>
        </div>
      </section>
    </article>
  );
};

export default Home;
