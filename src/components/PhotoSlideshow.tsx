import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PLACEHOLDER_PHOTOS = Array.from(
  { length: 25 },
  (_, i) => `/couple photos/${i + 1}.jpg`,
);

const PhotoSlideshow = ({ photos }: { photos?: string[] }) => {
  const images = photos && photos.length > 0 ? photos : PLACEHOLDER_PHOTOS;
  const [index, setIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="flex items-center justify-center px-3 py-4 sm:py-8">
      {/* Optimization 1: backface-visibility နဲ့ transform-style ကိုသုံးပြီး 
         GPU acceleration ကို force လုပ်ထားတယ် 
      */}
      <div
        className="relative rounded-2xl overflow-hidden max-w-2xl w-full aspect-[3/4] sm:aspect-[4/3] bg-black"
        style={{ perspective: "1000px", WebkitFontSmoothing: "antialiased" }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={images[index]} // Index ထက် Image URL ကိုသုံးတာ ပို stable ဖြစ်တယ်
            src={images[index]}
            // Optimization 2: hardware acceleration props များ
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{
              duration: 1.5, // ဖြည်းဖြည်းချင်းသွားတာက ပို smooth ဖြစ်စေတယ်
              ease: [0.33, 1, 0.68, 1], // Custom ease-out function
            }}
            style={{
              willChange: "opacity, transform",
              position: "absolute",
            }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Slideshow"
          />
        </AnimatePresence>

        {/* Progress Dots - Interactive ဖြစ်အောင် motion.div ပြောင်းသုံးထားတယ် */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: i === index ? 1.25 : 1,
                backgroundColor:
                  i === index
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(255, 255, 255, 0.3)",
              }}
              className="w-1.5 h-1.5 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSlideshow;
