import { useState, useEffect } from "react";

// Placeholder photos — replace with your actual couple photos
export const PLACEHOLDER_PHOTOS = [
  "/couple photos/1.jpg",
  "/couple photos/2.jpg",
  "/couple photos/3.jpg",
  "/couple photos/4.jpg",
  "/couple photos/5.jpg",
  "/couple photos/6.jpg",
  "/couple photos/7.jpg",
  "/couple photos/8.jpg",
  "/couple photos/9.jpg",
  "/couple photos/10.jpg",
  "/couple photos/11.jpg",
  "/couple photos/12.jpg",
  "/couple photos/13.jpg",
  "/couple photos/14.jpg",
  "/couple photos/15.jpg",
  "/couple photos/16.jpg",
  "/couple photos/17.jpg",
  "/couple photos/18.jpg",
  "/couple photos/19.jpg",
  "/couple photos/20.jpg",
  "/couple photos/21.jpg",
  "/couple photos/22.jpg",
  "/couple photos/23.jpg",
  "/couple photos/24.jpg",
  "/couple photos/25.jpg",
];

interface PhotoSlideshowProps {
  photos?: string[];
}

const PhotoSlideshow = ({ photos }: PhotoSlideshowProps) => {
  const images = photos && photos.length > 0 ? photos : PLACEHOLDER_PHOTOS;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // ၄.၅ စက္ကန့်ပြည့်တိုင်း နောက်ပုံကို index ပြောင်းပေးရုံပါပဲ
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex items-center justify-center px-3 sm:px-4 py-4 sm:py-8">
      <div
        className="relative rounded-2xl overflow-hidden max-w-2xl w-full aspect-[3/4] sm:aspect-[4/3] shadow-2xl"
        style={{ animation: "photo-glow 3s ease-in-out infinite" }}
      >
        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt="Memory"
            loading="eager"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSlideshow;
