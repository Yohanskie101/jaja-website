import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BunnyGif from "../assets/BunnyCute.gif";

function Imgboy() {
  const [showNextText, setShowNextText] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  const handleNextClick = () => {
    setShowNextText(true);
    setIsTyping(true);
  };

  useEffect(() => {
    if (isTyping) {
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000);

      return () => clearTimeout(typingTimeout);
    }
  }, [isTyping]);

  return (
    <div className="imgboy-container flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center gap-4">

        {/* Title */}
        {!showNextText ? (
          <>
            <h1 className="anna-text text-5xl">Hi, Jaja!</h1>
            <p className="sub-text">You make my world brighter </p>
          </>
        ) : (
          <>
            <h1 className="anna-text text-5xl">Look at this</h1>
          </>
        )}

        {/* Bunny GIF */}
        <img src={BunnyGif} className="w-48 md:w-60 my-4" alt="Bunny" />

        {/* Button */}
        {!isTyping && (
          <>
            {!showNextText ? (
              <button onClick={handleNextClick} className="next-pill-button">
                Next <span>→</span>
              </button>
            ) : (
              <Link to="/flower" className="next-pill-button">
                Next <span>→</span>
              </Link>
            )}
          </>
        )}

      </div>
    </div>
  );
}

export default Imgboy;