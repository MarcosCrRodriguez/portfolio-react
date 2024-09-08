import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import myport_data from "./../../assets/myport_img";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={myport_data[0].p_img} alt="Perfil" />
      <h1>
        <span>I'm Marcos Rodriguez,</span> Full-Stack Developer based in
        Argentina
      </h1>
      <p>
        I am a Full-Stack Developer from Buenos Aires, Argentina, with several
        years of experience in both back-end and front-end programming, seeking
        new opportunities to further enhance my skills and contribute to
        innovative projects.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
