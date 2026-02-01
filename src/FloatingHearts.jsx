import { useEffect, useState } from "react";
import FloatingHearts from "./FloatingHearts";
import "./App.css";

const HER_NAME = "Nirali";

export default function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPos, setNoPos] = useState({ top: "65%", left: "50%" });
  const [noScale, setNoScale] = useState(1);

  const moveNo = () => {
    setNoPos({
      top: Math.random() * 70 + "%",
      left: Math.random() * 70 + "%",
    });
    setNoScale((s) => Math.max(s - 0.08, 0.4));
  };

  useEffect(() => {
    if (yesClicked) {
      const audio = new Audio("/music.mp3");
      audio.play();
    }
  }, [yesClicked]);

  return (
    <>
      <FloatingHearts />

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
                onMouseMove={moveNo}
                onTouchStart={moveNo}
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <div className="love">
            <h1>I love you sooo much 💗</h1>
            <p>You are my forever Valentine 🫶</p>
            <div className="pulse-hearts">💖 💗 💞 💓</div>
          </div>
        )}
      </div>
    </>
  );
}
