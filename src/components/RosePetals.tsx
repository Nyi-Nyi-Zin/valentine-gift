import { useMemo } from "react";

const RosePetals = () => {
  const petals = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 8,
        size: 14 + Math.random() * 14,
        opacity: 0.2 + Math.random() * 0.25,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animation: `float-petal ${p.duration}s ${p.delay}s ease-in-out infinite`,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  );
};

export default RosePetals;
