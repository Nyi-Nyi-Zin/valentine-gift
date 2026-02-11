interface WelcomeScreenProps {
  onBegin: () => void;
}

const WelcomeScreen = ({ onBegin }: WelcomeScreenProps) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 bg-gradient-to-br from-[hsl(var(--valentine-cream))] via-[hsl(var(--valentine-blush))] to-[hsl(var(--valentine-rose)/0.3)]">
      <h1 className="font-cursive text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-primary mb-6 sm:mb-8 animate-fade-in text-center leading-tight">
        I made this for you 💕
      </h1>
      <button
        onClick={onBegin}
        className="mt-2 sm:mt-4 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-primary text-primary-foreground font-cursive text-xl sm:text-2xl md:text-3xl transition-all duration-300 hover:scale-105 active:scale-95"
        style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
      >
        Tap to Begin
      </button>
    </div>
  );
};

export default WelcomeScreen;
