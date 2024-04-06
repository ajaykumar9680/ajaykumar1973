import React, { useEffect } from 'react';
import "../../styles/about.css";
import chessImage from "../../assets/img/chess.jpeg";
import musicImage from "../../assets/img/music.jpg";
import techImage from "../../assets/img/tech.jpg";
import spaceImage from "../../assets/img/space.jpg";

const AboutMe = () => {
  useEffect(() => {
    const aboutRows = document.querySelectorAll('.about-section-row-animate');

    function checkInView() {
      aboutRows.forEach(row => {
        const rect = row.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // If the bottom of the row is within the viewport, add the animate class
        if (rect.bottom <= windowHeight) {
          row.classList.add('animate');
        }
      });
    }

    // Trigger checkInView on page load and scroll
    checkInView();
    window.addEventListener('scroll', checkInView);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', checkInView);
    };
  }, []); // Run only on component mount

  return (
    <section id="AboutMe" className="about-section">
      <div className="about-section-columns">
        <div className="about-section-column about-section-column-1">
          <h2>About Me</h2>
          <div className="about-section-row about-section-row-animate">
            <p>
              Hello, I'm Ajay Kumar Medikonda, a passionate computer science student pursuing my Master's degree with a specialization in Computer Science. I am deeply fascinated by the limitless possibilities of technology and its transformative impact on society. With a blend of technical expertise and creative thinking, I aspire to contribute to groundbreaking innovations that shape the future.
            </p>
          </div>
          <div className="about-section-row about-section-row-animate">
            <p>
              As a chess enthusiast, I've learned valuable lessons in strategy, critical thinking, and resilience. I approach challenges with a strategic mindset, seeking innovative solutions and embracing continuous learning. Chess has instilled in me the importance of foresight, adaptability, and perseverance, qualities that I bring to every aspect of my life.
            </p>
          </div>
          <div className="about-section-row about-section-row-animate">
            <p>
              Music is another passion of mine, serving as a source of inspiration and creativity. Whether I'm playing the guitar or immersing myself in diverse genres, music enriches my life and fuels my creativity. It's a universal language that transcends boundaries and connects people from different cultures and backgrounds.
            </p>
          </div>
          <div className="about-section-row about-section-row-animate">
            <p>
              My fascination with technology extends beyond the realm of coding. I am intrigued by the intersection of technology and humanity, exploring topics such as ethical AI, human-computer interaction, and the societal implications of technological advancements. I believe in leveraging technology for positive change, advocating for ethical and inclusive practices that prioritize the well-being of individuals and communities.
            </p>
          </div>
          <div className="about-section-row about-section-row-animate">
            <p>
              Space exploration has always been a subject of wonder and curiosity for me. The mysteries of the cosmos and the quest for knowledge beyond Earth inspire me to contemplate the universe's vastness and humanity's place within it. I'm eager to contribute to the advancement of space exploration technologies and the exploration of distant worlds, pushing the boundaries of human understanding and discovery.
            </p>
          </div>
          <div className="about-section-row about-section-row-animate">
            <p>
              In addition to my academic pursuits, I'm an avid learner and a dedicated team player. I thrive in collaborative environments where diverse perspectives converge to solve complex problems and drive innovation. With a growth mindset and a passion for continuous improvement, I am committed to lifelong learning and personal development.
            </p>
          </div>
          <div className="about-section-row about-section-row-animate">
            <p>
              Let's connect and embark on a journey of exploration, innovation, and growth. Together, we can push the boundaries of what's possible and make a meaningful impact on the world.
            </p>
          </div>
        </div>
        <div className="about-section-column about-section-column-2">
          <div className="about-section-content-box">
            <div className="about-section-row about-section-row-animate">
              <img src={chessImage} alt="Chess" />
              <h3>Chess Enthusiast</h3>
              <p>Chess has taught me valuable lessons in strategy, critical thinking, and resilience. I approach challenges with a strategic mindset, seeking innovative solutions and embracing continuous learning.</p>
            </div>
            <div className="about-section-row about-section-row-animate">
              <img src={musicImage} alt="Music" />
              <h3>Music Lover</h3>
              <p>Music enriches my life and fuels my creativity. It's a universal language that transcends boundaries and connects people from different cultures and backgrounds.</p>
            </div>
            <div className="about-section-row about-section-row-animate">
              <img src={techImage} alt="Technology" />
              <h3>Passion for Technology</h3>
              <p>I'm deeply fascinated by the limitless possibilities of technology and its transformative impact on society. With a blend of technical expertise and creative thinking, I aspire to contribute to groundbreaking innovations that shape the future.</p>
            </div>
            <div className="about-section-row about-section-row-animate">
              <img src={spaceImage} alt="Space Exploration" />
              <h3>Space Exploration Enthusiast</h3>
              <p>The mysteries of the cosmos and the quest for knowledge beyond Earth inspire me to contemplate the universe's vastness and humanity's place within it. I'm eager to contribute to the advancement of space exploration technologies and the exploration of distant worlds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
