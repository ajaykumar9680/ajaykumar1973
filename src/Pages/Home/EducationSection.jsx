import React from 'react';
import data from '../../data/index.json';
import '../../styles/education.css';

function EducationSection() {
  return (
    <section className="education-section" id="educationSection">
      <p className="section-title" text-align="left">{data.education.title}</p>
      <div className="container">
        <div className="education-content">
          {data.education.degrees.map((degree, index) => (
            <div key={index} className="education-item">
              <h3 className="education-item-title">{degree.degree}</h3>
              <p className="education-item-university">{degree.university}, {degree.location}</p>
              <p className="education-item-date">{degree.graduation}</p>
              <p className="education-item-gpa">GPA: {degree.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
