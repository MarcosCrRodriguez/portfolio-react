import React from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Personal Portfolio</h1>
          {/* <img src={footer_logo} alt="" /> */}
          <p>
            I am a Full-Stack Developer from Buenos Aires, Argentina, with
            several years of experience in both back-end and front-end
            programming, seeking new opportunities to further enhance my skills
            and contribute to innovative projects.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Marcos Cruz Rodriguez</p>
        <div className="footer-bottom-right">
          <a
            href="https://github.com/MarcosCrRodriguez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="footer-icon">
              <i className="fa-brands fa-github"></i>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/marcos-cruz-rodriguez-3151a2230/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="footer-icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </button>
          </a>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
