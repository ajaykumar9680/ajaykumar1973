import React from "react";
import "../../styles/resume.css";

const resumes = [
    { id: 1, name: "Resume 1", pdfUrl: "https://drive.google.com/file/d/1U74yqdtxBJWvhhGHE6wB27zFdnujjLZS/view?usp=sharing" },
    { id: 2, name: "Resume 2", pdfUrl: "https://drive.google.com/file/d/1U74yqdtxBJWvhhGHE6wB27zFdnujjLZS/view?usp=sharing" },
    // Add more resumes with their PDF URLs
    { id: 3, name: "Resume 3", pdfUrl: "https://drive.google.com/file/d/1U74yqdtxBJWvhhGHE6wB27zFdnujjLZS/view?usp=sharing" },
    { id: 4, name: "Resume 4", pdfUrl: "https://drive.google.com/file/d/1U74yqdtxBJWvhhGHE6wB27zFdnujjLZS/view?usp=sharing" },
    { id: 5, name: "Resume 5", pdfUrl: "https://drive.google.com/file/d/1U74yqdtxBJWvhhGHE6wB27zFdnujjLZS/view?usp=sharing" },
];

const Resume = () => {
    const handlePdfIconClick = (pdfUrl) => {
        window.open(pdfUrl, "_blank");
    };

    return (
        <section className="resume-section" id="Resume">
            <div className="resume-heading">
                <h2>Documents</h2>
            </div>
            <div className="resume-grid">
                {resumes.map((resume) => (
                    <div
                        key={resume.id}
                        className="resume-item">
                        
                        <div className="resume-pdf-icon" onClick={() => handlePdfIconClick(resume.pdfUrl)}>
                            <img src={process.env.PUBLIC_URL +"/img/pdficon1.png"} alt="Click on this to see Document" />
                        </div> {/* PDF icon */}
                        <h3>{resume.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Resume;
