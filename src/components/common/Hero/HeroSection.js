import React from "react";
import { Link } from "react-router-dom";
import "./hero.css"
const HeroSection = () => {
  return (
    <section id="hero">
      <div className="row" style={{ height: "100%" }}>
        <div className="col-md-8 offset-md-2 d-flex flex-column justify-content-center">
          <h1 className="text-center h-hero"> Create. Invite. Collaborate</h1>
          <p className="p-hero text-center">
            Share and Collaborate with best <br />
            <strong>Authors</strong>,<strong> Artists</strong> &{" "}
            <strong>Content Writers</strong>{" "}
          </p>
          <p className="text-center">
           <Link to="/collaborate" ><button className="btn btn-black">Start To Collaborate</button></Link>
            <button className="btn btn-outline-black">Explore Xperia</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
