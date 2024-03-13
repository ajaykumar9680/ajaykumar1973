// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <Profile />
      <Education />
      <WorkExperience />
      <Skills />
      <Projects />
      <HonorsAwards />
    </div>
  );
}

function Profile() {
  return (
    <section id="profile">
      <h2>PROFILE</h2>
      <p>Ajay Kumar Medikonda</p>
      <p>Email: ajaykumar.medikonda@slu.edu | Phone: 314-393-7423</p>
      <p>Resourceful graduate, blending academic expertise with practical experience to engineer innovative solutions. Proficient in software development and communication for successful, professional projects.</p>
    </section>
  );
}

function Education() {
  return (
    <section id="education">
      <h2>EDUCATION</h2>
      <p><strong>Saint Louis University</strong>, St Louis, MO (Expected by May 2025)</p>
      <p>Master of Science in Computer Science</p>
      <p>GPA: 3.43 /4.0</p>
      <p><strong>Lakireddy Bali Reddy College of Engineering</strong>, May 2023</p>
      <p>Undergraduation in Computer Science and Engineering</p>
      <p>GPA: 8.8/10.0</p>
    </section>
  );
}

function WorkExperience() {
  return (
    <section id="work-experience">
      <h2>WORK EXPERIENCE</h2>
      <p><strong>Salesforce Developer</strong></p>
      <p>Virtual Intern | July 2022 – Dec 2022</p>
      <ul>
        <li>Worked with a team to create a new Salesforce workflow that automated a manual process.</li>
        <li>Completed several hands-on projects and familiar with the Salesforce platform and its services.</li>
      </ul>
      <p><strong>AWS Cloud Virtual Internship offered by AICTE</strong></p>
      <p>Virtual Intern | Oct 2021 – Dec 2021</p>
      <ul>
        <li>Learned about a new AWS service and used it to solve a real-world problem.</li>
        <li>Built a cloud-based application that uses multiple AWS services.</li>
      </ul>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <h2>SKILLS</h2>
      <p><strong>Programming skills:</strong> Proficient in Python, expert in Java, C, data structures, algorithms, object-oriented programming, web development, software design, and agile methodology.</p>
      <p><strong>Data science skills:</strong> Proficient in machine learning, natural language processing, cloud computing, and data science.</p>
      <p><strong>Soft skills:</strong> Communication, teamwork, problem-solving, leadership, and time management.</p>
      <p><strong>Language:</strong> Fluent in English, Telugu, and Hindi.</p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      <p><strong>Integration of Protective Measures and the Generation of Cancelable Biometric Templates</strong></p>
      <ul>
        <li>Published paper in IEEE Explorer on novel biometric template protection, introducing two innovative methods.</li>
        <li>Evaluated facial recognition data, demonstrating strong performance in recognition rate, computation time, and confidentiality.</li>
      </ul>
      <p><strong>Aadhar Thumb Platform for all money services</strong></p>
      <ul>
        <li>Developed a secure biometric authentication website using fingerprint recognition, facilitating seamless financial transactions for individuals with Aadhaar Numbers.</li>
        <li>Improved security and reduced transaction times, providing a reliable and convenient financial services solution.</li>
      </ul>
      <p><strong>Memory Master: Java-based Multi-Level Memory Game</strong></p>
      <ul>
        <li>Designed and implemented a Java-based Memory game with multiple levels in a Software Design course, showcasing expertise in Java, object-oriented design, and GUI development using Swing/JavaFX.</li>
      </ul>
    </section>
  );
}

function HonorsAwards() {
  return (
    <section id="honors-awards">
      <h2>HONORS & AWARDS</h2>
      <ul>
        <li>100% Scholarship for undergraduate studies.</li>
        <li>College Chess Player Award and 2019 Coding Competition Winner.</li>
        <li>Volunteered for NSS events in college.</li>
      </ul>
    </section>
  );
}

export default App;


/* App.css 
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  section {
    margin-bottom: 40px;
  }
  
  h2 {
    color: #333;
    font-size: 24px;
  }
  
  strong {
    font-weight: bold;
  }
  
  p {
    font-size: 16px;
    line-height: 1.5;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  */
