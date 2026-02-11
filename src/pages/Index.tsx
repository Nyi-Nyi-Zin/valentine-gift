import { useState, useRef, useCallback } from "react";
import WelcomeScreen from "@/components/WelcomeScreen";
import FallingHearts from "@/components/FallingHearts";
import RosePetals from "@/components/RosePetals";
import FloatingParticles from "@/components/FloatingParticles";
import LoveMessage from "@/components/LoveMessage";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import MusicToggle from "@/components/MusicToggle";

const LOVE_MESSAGE =
  "Happy Valentine's Day, a thel... Every moment with you feels like a beautiful dream I never want to wake up from. You are my everything. 💕";

const Index = () => {
  const [started, setStarted] = useState(false);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 1. handleBegin now ONLY starts the visual flow
  const handleBegin = useCallback(() => {
    setStarted(true);
  }, []);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;
    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setMusicPlaying(!musicPlaying);
  }, [musicPlaying]);

  // 2. Music starts here, triggered by the message ending
  const handleMessageComplete = useCallback(() => {
    setShowSlideshow(true);

    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setMusicPlaying(true);
        })
        .catch((err) => {
          console.log("Playback failed:", err);
        });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--valentine-cream))] via-[hsl(var(--valentine-blush))] to-[hsl(var(--valentine-rose)/0.3)] overflow-x-hidden">
      <audio ref={audioRef} loop preload="auto">
        {/* Note: Ensure this path is correct relative to your public folder */}
        <source src="/01. Fearless (Taylor’s Version).flac" type="audio/flac" />
      </audio>

      {!started && <WelcomeScreen onBegin={handleBegin} />}

      {started && (
        <>
          <FallingHearts />
          <RosePetals />
          <FloatingParticles />
          <MusicToggle isPlaying={musicPlaying} onToggle={toggleMusic} />

          <div className="relative z-20 py-12">
            {!showSlideshow && (
              <LoveMessage
                message={LOVE_MESSAGE}
                onComplete={handleMessageComplete}
              />
            )}
            {showSlideshow && (
              <div className="animate-fade-in">
                <h2 className="font-cursive text-4xl sm:text-5xl text-primary text-center mb-8">
                  Our Memories Together 💕
                </h2>
                <PhotoSlideshow />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default Index;
