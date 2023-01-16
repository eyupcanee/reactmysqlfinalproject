import React from "react";
import ParticlesBg from "particles-bg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <ParticlesBg type="circle" bg={true} />
        <div className="container">
          <h1>HELLO WORLD!</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
            magni maiores sequi nihil minus fugiat modi culpa, voluptatibus et
            maxime vitae in impedit recusandae enim consequatur rerum officia
            harum labore.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
