import portfolioGallery from "@/assets/portfolio-gallery.jpg";

const MyWorkSection = () => {
  const works = [
    {
      id: 1,
      title: "Traditional Ganpati",
      description: "Handcrafted with intricate details",
      image: portfolioGallery,
    },
    {
      id: 2,
      title: "Eco-Friendly Modak Ganesh",
      description: "Made with sustainable materials",
      image: portfolioGallery,
    },
    {
      id: 3,
      title: "Miniature Ganpati",
      description: "Perfect for home celebrations",
      image: portfolioGallery,
    },
    {
      id: 4,
      title: "Contemporary Design",
      description: "Fusion of tradition and modern style",
      image: portfolioGallery,
    },
  ];

  return (
    <section id="my-work" className="relative py-20 overflow-hidden">
      {/* Background gradient */}
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gradient">
            My Work
          </h2>
        </div>

        {/* Slides */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
          {works.map((work) => (
            <div
              key={work.id}
              className="min-w-[80%] sm:min-w-[45%] md:min-w-[30%] snap-center bg-charcoal/90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-gold/10"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-cream">
                  {work.title}
                </h3>
                <p className="text-cream/70 text-sm">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWorkSection;
