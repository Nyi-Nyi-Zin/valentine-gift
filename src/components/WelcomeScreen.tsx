interface WelcomeScreenProps {
  onBegin: () => void;
}

const WelcomeScreen = ({ onBegin }: WelcomeScreenProps) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[hsl(var(--valentine-cream))] via-[hsl(var(--valentine-blush))] to-[hsl(var(--valentine-rose)/0.3)]">
      <h1 className="font-cursive text-5xl sm:text-7xl md:text-8xl text-primary mb-8 animate-fade-in">
        I made this for you 💕
      </h1>
      <button
        onClick={onBegin}
        className="mt-4 px-10 py-4 rounded-full bg-primary text-primary-foreground font-cursive text-2xl sm:text-3xl transition-all duration-300 hover:scale-105"
        style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
      >
        Tap to Begin
      </button>
    </div>
  );
};

export default WelcomeScreen;
