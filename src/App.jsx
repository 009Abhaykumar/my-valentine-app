import { useEffect, useState } from "react";
import FloatingHearts from "./FloatingHearts";
import "./App.css";

const HER_NAME = "Babe❤️";

export default function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPos, setNoPos] = useState({ top: "65%", left: "50%" });
  const [noScale, setNoScale] = useState(1);

  const moveNoButton = () => {
    const safeTop = Math.random() * 60 + 10;   // 10% – 70%
    const safeLeft = Math.random() * 60 + 10; // avoid edges

    // ❌ Avoid YES button zone (center bottom)
    if (safeTop > 40 && safeLeft > 30 && safeLeft < 70) {
      return moveNoButton();
    }

    setNoPos({
      top: `${safeTop}%`,
      left: `${safeLeft}%`,
    });

    // 🔒 Limit shrinking
    setNoScale((prev) => Math.max(prev - 0.06, 0.65));
  };

  useEffect(() => {
    if (yesClicked) {
      const audio = new Audio("/music.mp3");
      audio.volume = 0.7;
      audio.play().catch(() => {});
    }
  }, [yesClicked]);

  return (
    <>
      <FloatingHearts explode={yesClicked} />

      <div className="page">
        {!yesClicked ? (
          <div className="card">
            <div className="emoji">🐶💖</div>

            <h1>
              {HER_NAME}, will you be my <br /> Valentine?
            </h1>

            <div className="buttons">
              <button className="yes" onClick={() => setYesClicked(true)}>
                Yes 💕
              </button>

              <button
                className="no"
                style={{
                  top: noPos.top,
                  left: noPos.left,
                  transform: `scale(${noScale})`,
                }}
                onMouseMove={moveNoButton}
                onTouchStart={moveNoButton}
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <div className="love">
            <h1>I love you sooo much 💗</h1>
            <p>You’re my forever Valentine 🫶</p>
            <div className="pulse-hearts">💖 💗 💞 💓</div>
          </div>
        )}
      </div>
    </>
  );
}
