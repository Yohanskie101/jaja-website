import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HomeBG from "../assets/HomeBG.mp4";
import Content1 from "../components/content";
import Img1 from "../components/imgboy.jsx";
import transition from "./transition";

function Homepage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.60; //
    }
  }, []);

  return (
    <div className="homepage-container">
      {/* Video background with overlay */}
      <div className="video-background">
        <video ref={videoRef} autoPlay loop muted>
          <source src={HomeBG} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay" />
      </div>

      <Content1 />
      <Img1 />
    </div>
  );
}

export default transition(Homepage);