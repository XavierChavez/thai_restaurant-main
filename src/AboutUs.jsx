import React from "react";
import "./aboutUs.css";
import Chef from "./images/chef-gc6f83ea2e_1920.jpg";
import Food from "./images/thai-food-5997301_1920.jpg";
import Farmer from "./images/watering-1822642_1920.jpg";

function AboutMe() {
  return (
    <div id="AboutUs">
      <div className="about_container">
        <div>
          <img src={Food} alt="thai food on cutting board" />
        </div>
        <div className="about_text">
          <h1>OUR FOOD</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
            aliquam magna, porttitor consequat ex. Donec et dapibus tortor.
            Praesent ultricies orci sit amet dictum imperdiet. Vivamus laoreet
            lorem quis ex ornare dapibus. In sed gravida enim. Ut eget felis
            augue. Nam sagittis placerat justo, vel congue dolor bibendum et.
          </p>
        </div>
      </div>

      <div className="about_container">
        <div className="about_text">
          <h1>OUR TEAM</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
            aliquam magna, porttitor consequat ex. Donec et dapibus tortor.
            Praesent ultricies orci sit amet dictum imperdiet. Vivamus laoreet
            lorem quis ex ornare dapibus. In sed gravida enim. Ut eget felis
            augue. Nam sagittis placerat justo, vel congue dolor bibendum et.
          </p>
        </div>
        <div>
          <img src={Chef} alt="chef preparing food" />
        </div>
      </div>

      <div className="about_container">
        <div>
          <img src={Farmer} alt="farmer walking" />
        </div>
        <div className="about_text">
          <h1>OUR INSPIRATION</h1>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
            aliquam magna, porttitor consequat ex. Donec et dapibus tortor.
            Praesent ultricies orci sit amet dictum imperdiet. Vivamus laoreet
            lorem quis ex ornare dapibus. In sed gravida enim. Ut eget felis
            augue. Nam sagittis placerat justo, vel congue dolor bibendum et.
          </p>
        </div>

      </div>

    </div>
  );
}

export default AboutMe;
