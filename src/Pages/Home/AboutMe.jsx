import React from "react";
import "../../styles/about.css";

const AboutSection = () => {
  return (
    <section id="AboutMe" className="about-section">
      <div className="about-section-content-box">
        <h2 className="skills-section-heading">About Me</h2>
        <div className="about-section-content">
          <a href="#Contact" className="btn btn-primar">Get In Touch</a>
          <a href="#Contact" className="btn btn-primar">Get In Touch</a>
          <a href="#Contact" className="btn btn-primar">Get In Touch</a>
        </div>
        <div className="about-section-img">
          <img src="./img/hero_img.png" alt="about Section" />
        </div>
        <div className="about-section-content">
          <a href="#Contact" className="btn btn-primar">Get In Touch</a>
          <a href="#Contact" className="btn btn-primar">Get In Touch</a>
          <a href="#Contact" className="btn btn-primar">Get In Touch</a>
        </div>
      </div>
      <div className="video-container">
        <video width="500px" height="auto" autoPlay controls disablePictureInPicture>
          <source src="./videos/tech1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default AboutSection;
