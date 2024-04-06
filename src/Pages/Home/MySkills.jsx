import React, { useState } from "react";
import data from "../../data/index.json";
import "../../styles/skills.css";

export default function MySkills() {
  const [activeDescription, setActiveDescription] = useState(""); // State to track active description

  return (
    <section className="skills-section" id="mySkills">
      <div className="portfolio-container">
        <h2 className="section-heading">My Skills</h2>
        <h2 className="sub-title">Expertise</h2>
      </div>
      <div className="skills-section-part">
        <div className="skills-section-skills">
          <div className="skills-section-container">
            {data?.skills?.map((item, index) => (
              <div key={index} className="skills-section-card">
                <div className="skills-section-img">
                  <img src={process.env.PUBLIC_URL + item.src} alt="Product Chain" />
                </div>
                <div className="skills-section-card-content">
                  <h3 className="skills-section-title">{item.title}</h3>
                  {/* Display buttons for each skill */}
                  <div>
                    {item.skill && item.skill.map((skill, idx) => (
                      <button
                        key={idx}
                        className="ajay-button"
                        onClick={() => setActiveDescription(skill.description)} // Set active description on button click
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-section-describe">
          {/* Conditionally render the statement */}
        {activeDescription === "" && (
          <div className="click-prompt">
            <p>Click on a skill button to see its description</p>
          </div>
        )}
          {/* Display active description */}
          <p>{activeDescription}</p>
        </div>
      </div>
    </section>
  );
}
