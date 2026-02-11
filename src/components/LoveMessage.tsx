import { useState, useEffect } from "react";

interface LoveMessageProps {
  message: string;
  onComplete: () => void;
}

const LoveMessage = ({ message, onComplete }: LoveMessageProps) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < message.length) {
        setDisplayed(message.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setDone(true);
        setTimeout(onComplete, 2000);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [message, onComplete]);

  return (
    <div className="flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] px-4 sm:px-6">
      <p className="font-cursive text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary text-center leading-relaxed max-w-3xl">
        {displayed}
        {!done && (
          <span
            className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
            style={{ animation: "typing-cursor 0.8s step-end infinite" }}
          />
        )}
      </p>
    </div>
  );
};

export default LoveMessage;
