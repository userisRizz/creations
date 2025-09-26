import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import heroGanesh from "@/assets/hero-ganesh.jpg";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Eco-Friendly Ganesh Idols – Handcrafted with Devotion";

  useEffect(() => {
    let currentIndex = 0;
    const typewriterTimer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterTimer);
      }
    }, 100);

    return () => clearInterval(typewriterTimer);
  }, []);

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-center lg:text-left space-y-8 animate-slide-up">
          <div className="space-y-4">
            <p className="text-gold font-medium text-lg tracking-wide">
              Welcome to Ashok Creations
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-gradient">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-cream/80 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0">
              Traditional craftsmanship meets modern sustainability. Each idol is 
              lovingly handcrafted using eco-friendly materials, preserving our 
              cultural heritage while protecting our environment.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn-hero inline-flex items-center justify-center">
              <span>Explore Collection</span>
            </button>
            <button className="btn-ghost inline-flex items-center justify-center">
              <span>Watch Crafting Process</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gold/20">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-gold">15+</div>
              <div className="text-cream/60 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-gold">500+</div>
              <div className="text-cream/60 text-sm">Idols Crafted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-gold">100%</div>
              <div className="text-cream/60 text-sm">Eco-Friendly</div>
            </div>
          </div>
        </div>

        {/* Right content - Hero Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-glow blur-3xl opacity-60 animate-glow" />
            
            {/* Main hero image */}
            <div className="relative">
              <img
                src={heroGanesh}
                alt="Handcrafted Ganesh Idol"
                className="w-full max-w-lg h-auto object-contain animate-float drop-shadow-2xl"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold/30 rounded-full blur-sm animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-copper/20 rounded-full blur-md animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream/60">
        <div className="flex flex-col items-center space-y-2 scroll-indicator">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;