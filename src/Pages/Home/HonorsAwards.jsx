/*import React from 'react';
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

export default HonorsAwards;*/

import  React from 'react';
import "../../styles/honors.css";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import honor3 from "../../assets/img/honor3.jpg";
import honor1 from "../../assets/img/honor1.jpg";
import honor2 from "../../assets/img/honor2.avif";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//import arrow1 from "../assets/img/arrow1.svg";
//import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png"

const HonorsAwards = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section id="honorsAwards" className="honors-awards">
        <div className="honors-container">
          <h2>Honors and Awards</h2>
            <div className="smallthings">
              <p>"The journey of a thousand miles begins with one step." - Lao Tzu<br></br> Upto now, my achievements have been more than just milestones. Each accomplishment has been a stepping stone towards my ultimate goals, and I am grateful for every opportunity that has come my way.<br/></p>
                <div className="honors-awards">
                    <div className="honors-awards-list">
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme honor-slider">
                            <div className="item">
                                <img src={honor3} alt="Image" />
                                <h5>100% Scholarship for undergraduate studies</h5>
                            </div>
                            <div className="item">
                                <img src={honor2} alt="Image" />
                                <h5>College Chess Player Award</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Winner of the 2019 Coding Competition</h5>
                            </div>
                            <div className="item">
                                <img src={honor1} alt="Image" />
                                <h5>Volunteered for NSS events in college</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default HonorsAwards;

