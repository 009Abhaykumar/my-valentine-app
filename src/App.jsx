import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import "./App.css";

const HER_NAME = "Nirali";

export default function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPos, setNoPos] = useState({ top: "60%", left: "55%" });
  const [noScale, setNoScale] = useState(1);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const moveNoButton = () => {
    setNoPos({
      top: Math.random() * 70 + "%",
      left: Math.random() * 70 + "%",
    });
    setNoScale((p) => Math.max(p - 0.08, 0.4));
  };

  useEffect(() => {
    window.onresize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });

    if (yesClicked) {
      const audio = new Audio("/music.mp3");
      audio.play();
    }
  }, [yesClicked]);

  return (
    <div className="page">
      {yesClicked && <Confetti width={size.width} height={size.height} />}

      <AnimatePresence>
        {!yesClicked ? (
          <motion.div
            className="card glass"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="emoji-row"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            >
              🐶💗
            </motion.div>

            <h1 className="title">
              {HER_NAME}, will you be my Valentine?
            </h1>

            <div className="buttons">
              <motion.button
                className="yes"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setYesClicked(true)}
              >
                Yes 💖
              </motion.button>

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
          </motion.div>
        ) : (
          <motion.div
            className="love"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1>I love you sooo much 💕</h1>
            <p>You’re my forever Valentine 🫶</p>

            <motion.div
              className="hearts"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              💖 💗 💞 💓
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
