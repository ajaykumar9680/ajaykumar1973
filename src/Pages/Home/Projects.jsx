import React from 'react';
import "../../styles/projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-heading">Projects</h2>
        <div className="project">
          <h3 className="project-title">Integration of Protective Measures and the Generation of Cancelable Biometric Templates</h3>
          <p className="project-description">
            Published paper in IEEE Explorer on novel biometric template protection, introducing two innovative methods.
            Evaluated facial recognition data, demonstrating strong performance in recognition rate, computation time, and confidentiality.
          </p>
        </div>
        <div className="project">
          <h3 className="project-title">Aadhar Thumb Platform for all money services</h3>
          <p className="project-description">
            Developed a secure biometric authentication website using fingerprint recognition, facilitating seamless financial transactions for individuals with Aadhaar Numbers.
            Improved security and reduced transaction times, providing a reliable and convenient financial services solution.
          </p>
        </div>
        <div className="project">
          <h3 className="project-title">Memory Master: Java-based Multi-Level Memory Game</h3>
          <p className="project-description">
            Designed and implemented a Java-based Memory game with multiple levels in a Software Design course, showcasing expertise in Java, object-oriented design, and GUI development using Swing/JavaFX.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
