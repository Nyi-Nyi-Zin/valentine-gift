import { useState, useEffect } from "react";

// Placeholder photos — replace with your actual couple photos
const PLACEHOLDER_PHOTOS = [
  "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&h=600&fit=crop",
];

interface PhotoSlideshowProps {
  photos?: string[];
}

const PhotoSlideshow = ({ photos }: PhotoSlideshowProps) => {
  const images = photos && photos.length > 0 ? photos : PLACEHOLDER_PHOTOS;
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 600);
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex items-center justify-center px-3 sm:px-4 py-4 sm:py-8">
      <div
        className="relative rounded-2xl overflow-hidden max-w-2xl w-full aspect-[3/4] sm:aspect-[4/3]"
        style={{ animation: "photo-glow 3s ease-in-out infinite" }}
      >
        <img
          src={images[current]}
          alt="Our memory together"
          className="w-full h-full object-cover transition-opacity duration-600"
          style={{ opacity: fade ? 1 : 0, transition: "opacity 0.6s ease-in-out" }}
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary-foreground scale-125" : "bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSlideshow;
