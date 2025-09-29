import { ChevronDown } from "lucide-react";
import craftsmanHands from "@/assets/creation3.pnj.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 px-4">
        {/* Artist Image */}
        <div className="relative">
          <img
            src={craftsmanHands}
            alt="Artist Portrait"
            className="w-48 h-48 rounded-full object-cover border-4 border-gold/40 shadow-2xl animate-float"
          />
        </div>

        {/* Intro Text */}
        <div className="space-y-4 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold leading-tight">
            <span className="text-gradient">
              Hi, I'm Ashok – Visual Artist & Creator
            </span>
          </h1>
          <p className="text-cream/80 text-lg max-w-xl mx-auto">
            I blend tradition and modern expression through art.  
            My work reflects emotions, stories, and culture — brought to life with every stroke.
          </p>
        </div>
      </div>
  
    </section>
  );
};

export default HeroSection;