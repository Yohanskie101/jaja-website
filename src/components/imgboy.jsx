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
    <div className="imgboy-container">
      <div className="imgboy absolute bottom-12 left-0">
        <img src={BunnyGif} className="w-60" alt="Bunny" />
      </div>

      {/* Bubble Chat Container */}
      <div className="absolute left-36 bottom-80">
        <img src={img2} className="bubble-chat w-48" alt="Thinking Bubble" />

        {/* Text and Buttons Inside Bubble Chat */}
        <div className="absolute left-10 top-6 w-32 text-center">
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
    </div>
  );
}

export default Imgboy;