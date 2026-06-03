import React from "react";
import { Link } from "react-router-dom";
import Content1 from "../components/content";
import Img1 from "../components/imgboy.jsx";
import transition from "./transition";

function Homepage() {
  return (
    <div
      className="homepage-container"
      style={{
        backgroundColor: "#fdf5f7",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Content1 />
      <Img1 />
    </div>
  );
}

export default transition(Homepage);