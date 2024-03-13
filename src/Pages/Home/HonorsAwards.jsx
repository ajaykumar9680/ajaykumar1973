import React from 'react';
import "../../styles/honors.css";

function HonorsAwards() {
  return (
    <section id="honorsAwards" className="honors-awards">
      <div className="container">
        <h2 className="section-heading">Honors and Awards</h2>
        <ul className="honors-awards-list">
          <li className="honors-awards-item">100% Scholarship for undergraduate studies</li>
          <li className="honors-awards-item">College Chess Player Award</li>
          <li className="honors-awards-item">Winner of the 2019 Coding Competition</li>
          <li className="honors-awards-item">Volunteered for NSS events in college</li>
        </ul>
      </div>
    </section>
  );
}

export default HonorsAwards;
