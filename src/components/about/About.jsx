import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import Bg from "../../assets/bg1.jpg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <div className="img" style={{ backgroundImage: `url(${Bg})`}}>
      <section className="about container section" id="about">
        <div className="img" style={{ backgroundImage: `url(${Bg})`}}></div>
        <h2 className="section_title">Discover the Power of Innovation: Learn about us</h2>

        <div className="about__container grid">
          <img src={Image} alt="" className="about__img" />

          <div className="about__data grid">
            <div className="about__info">
              <p className="about__description">
              We are committed to delivering high-quality, innovative solutions 
              that drive value and growth for our customers.
              As a growing software systems integrator, we offer a wide range 
              of front-end technology deployment services to help our clients achieve their goals. 
              </p>
              <a href="/" className="btn">
                Know more
              </a>
            </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Digital Marketing</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
      </section>
    </div>
  );
};

export default About;
