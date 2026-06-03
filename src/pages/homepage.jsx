import React from "react";
import { Link } from "react-router-dom"; // Import Link
import HomeBG from "../assets/HomeBG.mp4";
import Content1 from "../components/content";
import Img1 from "../components/imgboy.jsx";
import transition from "./transition";

function homepage() {
  return (
    <div className="homepage-container">
      {/* Video container */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={HomeBG} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Content1 />
      <Img1 />
    </div>
  );
}

export default transition(homepage);
