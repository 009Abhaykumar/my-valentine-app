import { useState, useEffect } from "react";
import "./App.css";

const HER_NAME = "Ananya❤️";

export default function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPos, setNoPos] = useState({ top: "60%", left: "55%" });
  const [noScale, setNoScale] = useState(1);

  const moveNoButton = () => {
    setNoPos({
      top: Math.random() * 70 + "%",
      left: Math.random() * 70 + "%",
    });
    setNoScale(prev => Math.max(prev - 0.1, 0.4));
  };

  useEffect(() => {
    if (yesClicked) {
      const audio = new Audio("/music.mp3");
      audio.play();
    }
  }, [yesClicked]);

  return (
    <div className="container">
      {!yesClicked ? (
        <div className="card">
          <div className="emoji">🐶❤️</div>
          <h1>{HER_NAME}, will you be my Valentine?</h1>

          <div className="buttons">
            <button className="yes" onClick={() => setYesClicked(true)}>
              Yes 💖
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
          <h1>I love you soooo much ❤️</h1>
          <p>You just made me the happiest 💕</p>
          <div className="hearts">💗 💓 💞 💕 💖</div>
          <div className="confetti">🎉 🎊 🎉 🎊</div>
        </div>
      )}
    </div>
  );
}
