// resume.jsx

import React from "react";
import "../../styles/resume.css";

const resumes = [
    { id: 1, name: "Resume 1", pdfUrl: "https://drive.google.com/file/d/1U74yqdtxBJWvhhGHE6wB27zFdnujjLZS/view?usp=sharing" },
    { id: 2, name: "Resume 2", pdfUrl: "https://drive.google.com/file/d/1U74yqdtxBJWvhhGHE6wB27zFdnujjLZS/view?usp=sharing" },
    // Add more resumes with their PDF URLs
    { id: 3, name: "Resume 2", pdfUrl: "https://drive.google.com/file/d/1U74yqdtxBJWvhhGHE6wB27zFdnujjLZS/view?usp=sharing" },
    { id: 4, name: "Resume 2", pdfUrl: "https://drive.google.com/file/d/1U74yqdtxBJWvhhGHE6wB27zFdnujjLZS/view?usp=sharing" },
    { id: 5, name: "Resume 2", pdfUrl: "https://drive.google.com/file/d/1U74yqdtxBJWvhhGHE6wB27zFdnujjLZS/view?usp=sharing" },

];

const Resume = () => {
    const handleResumeClick = (pdfUrl) => {
        window.open(pdfUrl, "_blank");
    };

    return (
    <section className="resume-section" id="Resume">
        <div className="resume-heading">
            <h2>Documnets</h2>
        </div>
        <div className="resume-grid">
            {resumes.map((resume) => (
                <div
                    key={resume.id}
                    className="resume-item"
                    onClick={() => handleResumeClick(resume.pdfUrl)}
                >
                    <h3>{resume.name}</h3>
                    <img src={`./img/hero_img.png`} alt={resume.name} />
                </div>
            ))}
        </div>
    </section>
    );
};

export default Resume;
