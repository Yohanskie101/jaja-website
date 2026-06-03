import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BunnyGif from "../assets/BunnyCute.gif";
import img2 from "../assets/thinking.png";

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
    <div className="imgboy-container flex items-end justify-center w-full h-full">
      <div className="flex flex-col items-center justify-end">

        {/* Bubble Chat */}
        <div className="relative flex items-center justify-center mb-4">
          <img src={img2} className="bubble-chat w-40 md:w-48" alt="Thinking Bubble" />
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-4">
            {!showNextText && (
              <>
                <p className={`anna-text ${isTyping ? "typing-effect" : ""}`}>
                  Hi, Jaja!
                </p>
                {!isTyping && (
                  <button onClick={handleNextClick} className="next-button">
                    Next
                  </button>
                )}
              </>
            )}
            {showNextText && (
              <>
                <p className={`anna-text ${isTyping ? "typing-effect" : ""}`}>
                  Look at this.
                </p>
                {!isTyping && (
                  <Link to="/flower" className="next-button">
                    Next
                  </Link>
                )}
              </>
            )}
          </div>
        </div>

        {/* Bunny GIF */}
        <img src={BunnyGif} className="w-48 md:w-60" alt="Bunny" />

      </div>
    </div>
  );
}

export default Imgboy;