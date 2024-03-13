import React from 'react';
import "../../styles/work.css";

function WorkExperience() {
  return (
    <section id="workExperience" className="work-experience">
      <h2 className="section-heading">Work Experience</h2>
      <div className="container">
        <div className="job">
          <h3 className="job-title">Salesforce Developer - Virtual Intern</h3>
          <p className="job-duration">July 2022 – Dec 2022</p>
          <ul className="job-responsibilities">
            <li>Worked with a team to create a new Salesforce workflow that automated a manual process.</li>
            <li>Completed several hands-on projects and became familiar with the Salesforce platform and its services.</li>
          </ul>
        </div>
        <div className="job">
          <h3 className="job-title">AWS Cloud Virtual Internship offered by AICTE</h3>
          <p className="job-duration">Oct 2021 – Dec 2021</p>
          <ul className="job-responsibilities">
            <li>Learned about a new AWS service and used it to solve a real-world problem.</li>
            <li>Built a cloud-based application that uses multiple AWS services.</li>
          </ul>
        </div>

        <div className="job">
          <h3 className="job-title">AWS Cloud Virtual Internship offered by AICTE</h3>
          <p className="job-duration">Oct 2021 – Dec 2021</p>
          <ul className="job-responsibilities">
            <li>Learned about a new AWS service and used it to solve a real-world problem.</li>
            <li>Built a cloud-based application that uses multiple AWS services.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
