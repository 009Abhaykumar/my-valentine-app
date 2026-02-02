import { useEffect, useState } from "react";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => {
        const newHeart = {
          id: Math.random(),
          left: Math.random() * 100,
        };

        // LIMIT hearts to avoid memory crash
        const updated = [...prev, newHeart];
        return updated.slice(-25);
      });
    }, 600);

    // 🔥 CLEANUP (VERY IMPORTANT)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          style={{ left: `${heart.left}%` }}
          className="heart"
        >
          💖
        </span>
      ))}
    </div>
  );
}
