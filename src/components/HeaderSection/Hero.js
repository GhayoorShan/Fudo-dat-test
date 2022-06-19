import React from "react";

import heroImg2 from "../../assests/header-img.png";
import grassImg from "../../assests/Grass.png";

const Hero = () => {
  return (
    <>
      <div className="container  position-relative">
        <div class="row py-4">
          <div className="col-md-7 pt-5 pb-3">
            <h2 className="hero-heading py-2">
              Different Spice For A Different Taste
            </h2>
            <p className="hero-subtitle pb-3 ">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, nulla enim
              posuere quis consequat.
            </p>
            <button
              type="button"
              className="btn btn-yellow rounded-pill px-5 py-3 fs-6"
            >
              GET STARTED
            </button>
          </div>

          <div className="col ">
            <img className="img-fluid" src={heroImg2} alt="Hero Img" />
          </div>
        </div>
        <img
          className="grass-img position-absolute bottom-0 start-50 translate-middle-x "
          src={grassImg}
          alt="Grass Img"
        />
      </div>
    </>
  );
};

export default Hero;
