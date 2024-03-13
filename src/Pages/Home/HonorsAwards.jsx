import React from 'react';
import "../../styles/honors.css";

function HonorsAwards() {
  return (
    <section id="honorsAwards" className="honors-awards">
      <h2 className="section-heading">Honors and Awards</h2>
      <div className="container">
        <ul className="honors-awards-list">
          <li className="honors-awards-item honor1">100% Scholarship for undergraduate studies</li>
          <li className="honors-awards-item honor2">College Chess Player Award</li>
          <li className="honors-awards-item honor3">Winner of the 2019 Coding Competition</li>
          <li className="honors-awards-item honor4">Volunteered for NSS events in college</li>
        </ul>
      </div>
    </section>
  );
}

export default HonorsAwards;
