import React from "react";
import "./home.css";
import office from "../../assets/office.jpg";
import Me from "../../assets/Horizon_logo.png";
import HeaderSocials from "./HeaderSocials";


const Home = () => {
  return (
    <div className="img" style={{ backgroundImage: `url(${office})`}}>
      <section className="home container" id="home">
        <div className="intro">
          <img src={Me} alt="" className="home__img" />
          <h1 className="home__name">Horizon Nexus Solutions</h1>
          <span className="home__education">Craft your digital identity with us</span>

          <HeaderSocials />

          <a href="#contact" className="btn">
           Free Consulting
          </a>
        </div>
      </section>
    </div>
  
    
  );
};

export default Home;
