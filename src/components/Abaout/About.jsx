import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        {/* <div className="about-left">
          <img src="src\assets\wpp-me.jpeg" alt="" />
        </div> */}
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate Full-Stack Developer with a strong foundation
              built through years of dedicated study and hands-on experience.
              While I may not have extensive professional experience, I have
              successfully completed numerous personal and collaborative
              projects, continually honing my skills in both front-end and
              back-end development.
            </p>
            <p>
              My passion for Full-Stack Development is reflected not only in the
              enthusiasm and dedication I bring to each project but also in my
              continuous pursuit of excellence in every aspect of my work.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>Angular</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "25%" }} />
            </div>
            <div className="about-skill">
              <p>TypeScript</p>
              <hr style={{ width: "35%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>C#</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>PHP</p>
              <hr style={{ width: "55%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Searching for</h1>
          <p>NEW EXPERIENCES</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
