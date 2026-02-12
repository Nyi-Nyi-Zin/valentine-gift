interface WelcomeScreenProps {
  onBegin: () => void;
}

const WelcomeScreen = ({ onBegin }: WelcomeScreenProps) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 bg-gradient-to-br from-[hsl(var(--valentine-cream))] via-[hsl(var(--valentine-blush))] to-[hsl(var(--valentine-rose)/0.3)]">
      <style>{`
        @keyframes romance-float {
          0%, 100% { 
            transform: translateY(0) scale(1) rotate(-1deg);
            filter: drop-shadow(0 0 0px rgba(255,182,193,0));
          }
          50% { 
            transform: translateY(-20px) scale(1.03) rotate(1deg);
            filter: drop-shadow(0 0 15px rgba(219,39,119,0.4));
          }
        }
        .animate-romance {
          animation: romance-float 4s ease-in-out infinite;
        }
      `}</style>

      <h1 className="font-cursive text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-primary mb-6 sm:mb-8 text-center leading-tight animate-romance">
        I made this for you 💕
      </h1>

      <button
        onClick={onBegin}
        className="mt-2 sm:mt-4 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-primary text-primary-foreground font-cursive text-xl sm:text-2xl md:text-3xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
        style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
      >
        Tap to Begin
      </button>
    </div>
  );
};

export default WelcomeScreen;
