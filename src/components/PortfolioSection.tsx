import { useState } from "react";
import { Eye, Heart, Calendar } from "lucide-react";
import portfolioGallery from "@/assets/portfolio-gallery.jpg";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filters = [
    { id: "all", name: "All Works" },
    { id: "traditional", name: "Traditional" },
    { id: "modern", name: "Modern" },
    { id: "large", name: "Large Size" },
    { id: "small", name: "Small Size" },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Traditional Ganpati",
      category: "traditional",
      size: "large",
      date: "2024-08-15",
      image: portfolioGallery,
      description: "Handcrafted traditional Ganesh idol with intricate details",
    },
    {
      id: 2,
      title: "Eco-Friendly Modak Ganesh",
      category: "modern",
      size: "medium",
      date: "2024-08-20",
      image: portfolioGallery,
      description: "Modern interpretation with eco-friendly materials",
    },
    {
      id: 3,
      title: "Miniature Ganpati",
      category: "traditional",
      size: "small",
      date: "2024-08-25",
      image: portfolioGallery,
      description: "Perfect for home celebrations",
    },
    {
      id: 4,
      title: "Contemporary Design",
      category: "modern",
      size: "large",
      date: "2024-09-01",
      image: portfolioGallery,
      description: "Fusion of traditional and contemporary aesthetics",
    },
    {
      id: 5,
      title: "Festival Special",
      category: "traditional",
      size: "large",
      date: "2024-09-05",
      image: portfolioGallery,
      description: "Grand celebration centerpiece",
    },
    {
      id: 6,
      title: "Artistic Expression",
      category: "modern",
      size: "medium",
      date: "2024-09-10",
      image: portfolioGallery,
      description: "Unique artistic interpretation",
    },
  ];

  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter || item.size === activeFilter
  );

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-gold font-medium text-lg mb-4">Our Masterpieces</p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gradient mb-6">
            Portfolio Gallery
          </h2>
          <p className="text-cream/80 text-lg max-w-3xl mx-auto">
            Each creation tells a story of devotion, craftsmanship, and cultural heritage. 
            Explore our collection of handcrafted Ganesh idols.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-accent text-midnight shadow-glow"
                  : "bg-charcoal text-cream hover:bg-gold/10 border border-gold/20"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="premium-card group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button className="p-2 bg-gold/20 backdrop-blur-sm rounded-full hover:bg-gold/30 transition-colors">
                          <Eye className="w-5 h-5 text-cream" />
                        </button>
                        <button className="p-2 bg-gold/20 backdrop-blur-sm rounded-full hover:bg-gold/30 transition-colors">
                          <Heart className="w-5 h-5 text-cream" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-accent text-midnight px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-cream mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cream/70 text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-cream/60">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <span className="capitalize bg-charcoal px-2 py-1 rounded text-xs">
                    {item.size}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-ghost">
            View Complete Gallery
          </button>
        </div>
      </div>

      {/* Modal/Lightbox would go here */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-screen p-4">
            <img
              src={portfolioGallery}
              alt="Portfolio item"
              className="max-w-full max-h-full object-contain rounded-lg shadow-premium"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;