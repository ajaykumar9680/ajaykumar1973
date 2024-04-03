import "../../styles/Hero.css";
import React from "react";

const HeroSection = () => {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title">Hey, I'm Ajay Kumar Medikonda</p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">Student</span> <br />
            {/* Developer */}
          </h1>
          <p className="hero-section-description">
            Developer
          </p>
        </div>
        <a href="#Contact" className="btn btn-primary">Get In Touch</a>
      </div>
      <div className="hero-section-img">
        <img src={process.env.PUBLIC_URL + '/img/hero_img.png'} alt="Hero Section" />
      </div>
    </section>
  );
}

export default HeroSection;
