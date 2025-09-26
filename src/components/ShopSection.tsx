import { useState } from "react";
import { ShoppingCart, Heart, Star, Eye, Filter } from "lucide-react";
import portfolioGallery from "@/assets/portfolio-gallery.jpg";

const ShopSection = () => {
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState("featured");

  const products = [
    {
      id: 1,
      name: "Traditional Ganpati - Large",
      price: 5999,
      originalPrice: 7999,
      category: "Traditional",
      size: "18 inches",
      material: "Eco-friendly clay",
      rating: 4.9,
      reviews: 47,
      image: portfolioGallery,
      features: ["Hand-painted", "Eco-friendly", "Traditional design"],
      isNew: true,
      isBestseller: false,
    },
    {
      id: 2,
      name: "Modern Eco Ganesh",
      price: 3999,
      originalPrice: 5499,
      category: "Modern",
      size: "12 inches",
      material: "Biodegradable clay",
      rating: 4.8,
      reviews: 32,
      image: portfolioGallery,
      features: ["Contemporary design", "Quick dissolve", "Vibrant colors"],
      isNew: false,
      isBestseller: true,
    },
    {
      id: 3,
      name: "Miniature Ganpati Set",
      price: 1299,
      originalPrice: 1799,
      category: "Small",
      size: "4-6 inches",
      material: "Natural clay",
      rating: 4.7,
      reviews: 89,
      image: portfolioGallery,
      features: ["Set of 3", "Perfect for home", "Easy immersion"],
      isNew: false,
      isBestseller: false,
    },
    {
      id: 4,
      name: "Artistic Expression Ganesh",
      price: 8999,
      originalPrice: 11999,
      category: "Artistic",
      size: "24 inches",
      material: "Premium eco-clay",
      rating: 5.0,
      reviews: 15,
      image: portfolioGallery,
      features: ["Unique design", "Museum quality", "Limited edition"],
      isNew: true,
      isBestseller: false,
    },
    {
      id: 5,
      name: "Festival Special Ganpati",
      price: 4499,
      originalPrice: 5999,
      category: "Traditional",
      size: "15 inches",
      material: "Sacred clay",
      rating: 4.8,
      reviews: 63,
      image: portfolioGallery,
      features: ["Festival ready", "Blessed clay", "Traditional colors"],
      isNew: false,
      isBestseller: true,
    },
    {
      id: 6,
      name: "Contemporary Minimalist",
      price: 3299,
      originalPrice: 4299,
      category: "Modern",
      size: "10 inches",
      material: "Sustainable clay",
      rating: 4.6,
      reviews: 28,
      image: portfolioGallery,
      features: ["Minimalist design", "Urban style", "Compact size"],
      isNew: false,
      isBestseller: false,
    },
  ];

  const toggleCart = (productId: number) => {
    setCartItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleWishlist = (productId: number) => {
    setWishlistItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section id="shop" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-gold font-medium text-lg mb-4">Sacred Collection</p>
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gradient mb-6">
            Shop Ganesh Idols
          </h2>
          <p className="text-cream/80 text-lg max-w-3xl mx-auto">
            Bring home divine blessings with our handcrafted Ganesh idols. 
            Each piece is made with love, devotion, and eco-friendly materials.
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 space-y-4 lg:space-y-0">
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-charcoal border border-gold/20 rounded-lg text-cream hover:bg-gold/10 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-charcoal border border-gold/20 rounded-lg text-cream focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
          
          <div className="text-cream/60">
            <span>{products.length} products found</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="premium-card group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {product.isNew && (
                    <span className="bg-gradient-accent text-midnight px-2 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-copper text-cream px-2 py-1 rounded-full text-xs font-bold">
                      BESTSELLER
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-2 backdrop-blur-sm rounded-full transition-all duration-300 ${
                      wishlistItems.includes(product.id)
                        ? 'bg-gold text-midnight'
                        : 'bg-charcoal/80 text-cream hover:bg-gold/20'
                    }`}
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-charcoal/80 backdrop-blur-sm rounded-full text-cream hover:bg-gold/20 transition-all duration-300">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleCart(product.id)}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                      cartItems.includes(product.id)
                        ? 'bg-gold text-midnight'
                        : 'bg-charcoal/90 text-cream hover:bg-gold/20 backdrop-blur-sm'
                    }`}
                  >
                    {cartItems.includes(product.id) ? 'Added to Cart' : 'Quick Add'}
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-gold fill-current'
                              : 'text-gold/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-cream/60 text-sm">({product.reviews})</span>
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-cream mb-2">
                    {product.name}
                  </h3>
                  <p className="text-cream/70 text-sm">
                    {product.size} • {product.material}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-charcoal px-2 py-1 rounded text-cream/80"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gold">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-cream/50 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {product.originalPrice > product.price && (
                      <span className="text-xs text-green-400 font-medium">
                        Save ₹{(product.originalPrice - product.price).toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => toggleCart(product.id)}
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      cartItems.includes(product.id)
                        ? 'bg-gold text-midnight'
                        : 'bg-charcoal text-cream hover:bg-gold/20'
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-ghost">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;