import { useState, useEffect } from "react";
import { Award, Users, Heart, Leaf } from "lucide-react";
import craftsmanHands from "@/assets/creation.pnj.jpg";

const AboutSection = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    experience: 0,
    idols: 0,
    customers: 0,
    awards: 0,
  });

  const targetNumbers = {
    experience: 15,
    idols: 500,
    customers: 1200,
    awards: 8,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const animationTimer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedNumbers({
          experience: Math.floor(targetNumbers.experience * progress),
          idols: Math.floor(targetNumbers.idols * progress),
          customers: Math.floor(targetNumbers.customers * progress),
          awards: Math.floor(targetNumbers.awards * progress),
        });

        if (currentStep >= steps) {
          clearInterval(animationTimer);
          setAnimatedNumbers(targetNumbers);
        }
      }, stepDuration);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const processSteps = [
    {
      step: "01",
      title: "Clay Selection",
      description: "We carefully select the finest eco-friendly clay from sustainable sources.",
      icon: <Leaf className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Sculpting",
      description: "Master artisans shape each idol with precision and devotion.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Detailing",
      description: "Intricate features and ornaments are hand-carved with traditional tools.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Painting",
      description: "Natural, biodegradable colors bring the divine form to life.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-gold font-medium text-lg mb-4">Our Story</p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gradient mb-6">
            Meet the Artist
          </h2>
          <p className="text-cream/80 text-lg max-w-3xl mx-auto">
            A journey of devotion, tradition, and environmental consciousness 
            spanning over a decade of artistic excellence.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-playfair font-bold text-cream">
                Ashok Kumar - Master Craftsman
              </h3>
              <p className="text-cream/80 text-lg leading-relaxed">
                With over 15 years of dedicated craftsmanship, Ashok Kumar has been 
                creating divine Ganesh idols that blend traditional artistry with 
                modern environmental consciousness. Each piece is a testament to his 
                unwavering devotion and commitment to preserving our cultural heritage.
              </p>
              <p className="text-cream/80 leading-relaxed">
                Born into a family of traditional sculptors, Ashok learned the ancient 
                techniques from his grandfather. However, witnessing the environmental 
                impact of festivals, he pioneered the use of 100% eco-friendly materials 
                without compromising on the beauty and intricacy of his creations.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 premium-card">
                <Leaf className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-cream mb-2">Eco-Friendly</h4>
                <p className="text-cream/70 text-sm">100% biodegradable materials</p>
              </div>
              <div className="text-center p-6 premium-card">
                <Heart className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-cream mb-2">Devotional</h4>
                <p className="text-cream/70 text-sm">Crafted with pure devotion</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src={craftsmanHands}
                alt="Craftsman at work"
                className="w-full h-96 object-cover rounded-2xl shadow-premium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 to-transparent rounded-2xl" />
              
              {/* Floating Quote */}
              <div className="absolute bottom-6 left-6 right-6 glass-effect p-4 rounded-lg">
                <p className="text-cream/90 italic text-sm">
                  "Every idol I create carries the blessings of Lord Ganesha and my commitment to our Earth."
                </p>
                <p className="text-gold text-sm font-medium mt-2">- Ashok Kumar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { key: 'experience', label: 'Years Experience', suffix: '+' },
            { key: 'idols', label: 'Idols Crafted', suffix: '+' },
            { key: 'customers', label: 'Happy Customers', suffix: '+' },
            { key: 'awards', label: 'Awards Won', suffix: '' },
          ].map((stat, index) => (
            <div
              key={stat.key}
              className="text-center p-6 premium-card animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-gold mb-2">
                {animatedNumbers[stat.key as keyof typeof animatedNumbers]}{stat.suffix}
              </div>
              <div className="text-cream/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-gradient mb-4">
              Crafting Process
            </h3>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto">
              Follow the sacred journey from raw clay to divine form
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="text-center space-y-4 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Number */}
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-midnight">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gold to-copper" />
                  )}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-charcoal rounded-lg flex items-center justify-center mx-auto text-gold">
                  {step.icon}
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-xl font-playfair font-semibold text-cream mb-2">
                    {step.title}
                  </h4>
                  <p className="text-cream/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-hero">
            Watch Our Crafting Process
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;