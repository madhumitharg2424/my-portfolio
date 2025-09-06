// src/components/MouseFollower.jsx
import { useEffect, useRef, useState } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const trailRef = useRef([]);

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add trail points
      trailRef.current.push({ x: e.clientX, y: e.clientY, time: Date.now() });

      // Remove old trail points (keep ~15 for smooth fade)
      if (trailRef.current.length > 15) {
        trailRef.current.shift();
      }
    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    window.addEventListener("mousemove", moveHandler);
    document.querySelectorAll("a, button, .card").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      document.querySelectorAll("a, button, .card").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* Trail Particles */}
      {trailRef.current.map((p, i) => (
        <div
          key={i}
          className="fixed pointer-events-none z-40 rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: "8px",
            height: "8px",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#3b82f6",
            opacity: 1 - i / trailRef.current.length,
            filter: "blur(6px)",
          }}
        />
      ))}

      {/* Glowing Orb */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform ease-linear"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full shadow-lg transition-all duration-200`}
          style={{
            width: hovering ? "40px" : "24px",
            height: hovering ? "40px" : "24px",
            background:
              "radial-gradient(circle, rgba(34,197,94,1) 0%, rgba(34,197,94,0.7) 70%, rgba(34,197,94,0.2) 100%)",
            boxShadow: hovering
              ? "0 0 25px 10px rgba(34,197,94,0.7), 0 0 60px rgba(59,130,246,0.4)"
              : "0 0 15px 6px rgba(34,197,94,0.5), 0 0 40px rgba(59,130,246,0.3)",
            animation: "pulse 2s infinite",
          }}
        />
      </div>

      {/* Glow Animation */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.8; }
          }
        `}
      </style>
    </>
  );
};

export default MouseFollower;
