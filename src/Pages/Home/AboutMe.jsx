import React from "react";
import "../../styles/about.css";

function AboutMe() {
  return (
    <section id="AboutMe" className="about-section">
      <form>
      <div className="about-section-content">
        <img src="/img/about-me.png" alt="About Me" className="about-section-img" />
        <div className="circle-container">
          <div className="circle">Web Developer</div>
          <div className="circle">Passionate Coder</div>
          <div className="circle">Tech Enthusiast</div>
          <div className="circle">Problem Solver</div>
          <div className="circle">UX Designer</div>
          <div className="circle">Creative Thinker</div>
        </div>
      </div>
      </form>
    </section>
  );
}

export default AboutMe;
