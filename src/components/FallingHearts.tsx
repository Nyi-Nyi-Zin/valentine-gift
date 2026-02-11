import { useMemo } from "react";

const FallingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 6,
        size: 12 + Math.random() * 20,
        opacity: 0.15 + Math.random() * 0.3,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute text-primary"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            animation: `float-heart ${h.duration}s ${h.delay}s ease-in-out infinite`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

export default FallingHearts;
