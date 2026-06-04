import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import transition from "./transition";

function FlowerPage() {
  useEffect(() => {
    // Add class to body when the component mounts
    document.body.classList.add("flower-page-active");

    // Load and play background music
    const audio = new Audio("/bgmusic1.mp3"); // Ensure the file is in the public folder
    audio.loop = true;
    audio.play().catch((error) => console.log("Audio play failed:", error));

    // Remove the "not-loaded" class after 1 second for animations
    const timeout = setTimeout(() => {
      document.body.classList.remove("not-loaded");
    }, 1000);

    // Cleanup function: remove class and stop music
    return () => {
      document.body.classList.remove("flower-page-active");
      audio.pause();
      audio.currentTime = 0;
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flower-page">
      <div className="night"></div>

      <button
        className="btn absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Click Me!
      </button>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className="modal-content">
      <p>Hi Jaja,</p>
      <br/>
      <p>I hope you find this simple website okay for you. I just wanted to say — you are the most prettiest person. 😊</p>
      <br/>
      <p>I like how you smile. I love everything about you — and especially, I like how I always tease you. You're so cute and pretty.</p>
      <br/>
      <p>Just so you know, I'm so proud and happy for you as you are doing your very best always on your own. Don't pressure yourself, and enjoy mo lang lagi ang time mo.</p>
      <br/>
      <p>I'm always here for you and will be there for you always. Muah 💋</p>
      <br/>
      <p>Palagi mo tatandaan — nandito lang ako palagi para sa'yo. Hindi ka nag-iisa. 🤍</p>
      <br/>
      <p>I'm always grateful na nakilala kita, and I will never regret everything I do for you and what we always do.</p>
      <br/>
      <p>Hope you find what you always dream for, Jaja. I will always support you sa anumang gusto mo.</p>
      <br/>
      <p>- Yohan</p>
    </div>
  </div>
</dialog>

      <div className="flowers">
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1" key="leaf1"></div>
            <div className="flower__leaf flower__leaf--2" key="leaf2"></div>
            <div className="flower__leaf flower__leaf--3" key="leaf3"></div>
            <div className="flower__leaf flower__leaf--4" key="leaf4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1" key="light1"></div>
            <div className="flower__light flower__light--2" key="light2"></div>
            <div className="flower__light flower__light--3" key="light3"></div>
            <div className="flower__light flower__light--4" key="light4"></div>
            <div className="flower__light flower__light--5" key="light5"></div>
            <div className="flower__light flower__light--6" key="light6"></div>
            <div className="flower__light flower__light--7" key="light7"></div>
            <div className="flower__light flower__light--8" key="light8"></div>
          </div>
          <div className="flower__line">
            <div
              className="flower__line__leaf flower__line__leaf--1"
              key="lineLeaf1"
            ></div>
            <div
              className="flower__line__leaf flower__line__leaf--2"
              key="lineLeaf2"
            ></div>
            <div
              className="flower__line__leaf flower__line__leaf--3"
              key="lineLeaf3"
            ></div>
            <div
              className="flower__line__leaf flower__line__leaf--4"
              key="lineLeaf4"
            ></div>
            <div
              className="flower__line__leaf flower__line__leaf--5"
              key="lineLeaf5"
            ></div>
            <div
              className="flower__line__leaf flower__line__leaf--6"
              key="lineLeaf6"
            ></div>
          </div>
        </div>

        <div class="flower flower--2">
          <div class="flower__leafs flower__leafs--2">
            <div class="flower__leaf flower__leaf--1"></div>
            <div class="flower__leaf flower__leaf--2"></div>
            <div class="flower__leaf flower__leaf--3"></div>
            <div class="flower__leaf flower__leaf--4"></div>
            <div class="flower__white-circle"></div>

            <div class="flower__light flower__light--1"></div>
            <div class="flower__light flower__light--2"></div>
            <div class="flower__light flower__light--3"></div>
            <div class="flower__light flower__light--4"></div>
            <div class="flower__light flower__light--5"></div>
            <div class="flower__light flower__light--6"></div>
            <div class="flower__light flower__light--7"></div>
            <div class="flower__light flower__light--8"></div>
          </div>
          <div class="flower__line">
            <div class="flower__line__leaf flower__line__leaf--1"></div>
            <div class="flower__line__leaf flower__line__leaf--2"></div>
            <div class="flower__line__leaf flower__line__leaf--3"></div>
            <div class="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        <div class="flower flower--3">
          <div class="flower__leafs flower__leafs--3">
            <div class="flower__leaf flower__leaf--1"></div>
            <div class="flower__leaf flower__leaf--2"></div>
            <div class="flower__leaf flower__leaf--3"></div>
            <div class="flower__leaf flower__leaf--4"></div>
            <div class="flower__white-circle"></div>

            <div class="flower__light flower__light--1"></div>
            <div class="flower__light flower__light--2"></div>
            <div class="flower__light flower__light--3"></div>
            <div class="flower__light flower__light--4"></div>
            <div class="flower__light flower__light--5"></div>
            <div class="flower__light flower__light--6"></div>
            <div class="flower__light flower__light--7"></div>
            <div class="flower__light flower__light--8"></div>
          </div>
          <div class="flower__line">
            <div class="flower__line__leaf flower__line__leaf--1"></div>
            <div class="flower__line__leaf flower__line__leaf--2"></div>
            <div class="flower__line__leaf flower__line__leaf--3"></div>
            <div class="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        {/* Add the rest of the flower and grass elements here */}
      </div>
      <h1>This is the Flower Page</h1>
      <p>
        Go back to the <Link to="/">Home Page</Link>.
      </p>
    </div>
  );
}

export default transition(FlowerPage);
