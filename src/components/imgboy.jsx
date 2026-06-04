import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BunnyGif from "../assets/BunnyCute.gif";

function Imgboy() {
  const [showNextText, setShowNextText] = useState(false);
  const [key, setKey] = useState(0);

  const handleNextClick = () => {
    setShowNextText(true);
    setKey(prev => prev + 1); // restart animation
  };

  return (
    <div className="imgboy-container flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center gap-4">

    {!showNextText ? (
  <>
    <div className="text-container">
      <h1 key={`title-${key}`} className="anna-text text-5xl typing-h1">Hi, Jaja!</h1>
      <p key={`sub-${key}`} className="sub-text typing-p-first">You make my world brighter</p>
    </div>
  </>
) : (
  <>
    <div className="text-container">
      <div key={`title-${key}`} className="flex flex-col items-center">
        <h1 className="anna-text text-5xl typing-h1">I'll show you</h1>
        <h1 className="anna-text text-5xl typing-h1-line2">something!</h1>
      </div>
      <p key={`sub-${key}`} className="sub-text typing-p">Look at this</p>
    </div>
  </>
)}

        {/* Bunny GIF */}
        <img src={BunnyGif} className="w-48 md:w-60 my-4" alt="Bunny" />

        {/* Button */}
        {!showNextText ? (
          <button onClick={handleNextClick} className="next-pill-button">
            Next <span>→</span>
          </button>
        ) : (
          <Link to="/flower" className="next-pill-button">
            Next <span>→</span>
          </Link>
        )}

      </div>
    </div>
  );
}

export default Imgboy;