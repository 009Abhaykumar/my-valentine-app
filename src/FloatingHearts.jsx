import { useEffect, useState } from "react";

const HEARTS = ["💖", "💗", "💞", "💕", "💘"];

export default function FloatingHearts({ explode }) {
  const [hearts, setHearts] = useState([]);

  // 🌸 Normal floating hearts
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => {
        const heart = {
          id: Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 14 + 18,
          duration: Math.random() * 3 + 5,
          emoji: HEARTS[Math.floor(Math.random() * HEARTS.length)],
          type: "float",
        };

        return [...prev, heart].slice(-25);
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // 💥 Explosion on YES
  useEffect(() => {
    if (!explode) return;

    const burst = Array.from({ length: 30 }).map(() => ({
      id: Math.random(),
      left: 50 + (Math.random() * 20 - 10),
      size: Math.random() * 18 + 22,
      duration: Math.random() * 1.5 + 1.2,
      emoji: HEARTS[Math.floor(Math.random() * HEARTS.length)],
      type: "explode",
    }));

    setHearts((prev) => [...prev, ...burst]);
  }, [explode]);

  return (
    <div className="floating-hearts">
      {hearts.map((h) => (
        <span
          key={h.id}
          className={`heart ${h.type}`}
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
}
