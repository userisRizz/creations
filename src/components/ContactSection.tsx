import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general",
    });
    
    setIsSubmitting(false);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Workshop",
      details: "123 Artisan Street, Craft District\nMumbai, Maharashtra 400001",
      action: "Get Directions",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+91 98765 43210\n+91 87654 32109",
      action: "Call Now",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "info@ashokcreations.com\norders@ashokcreations.com",
      action: "Send Email",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Workshop Hours",
      details: "Mon - Sat: 9:00 AM - 7:00 PM\nSunday: 10:00 AM - 5:00 PM",
      action: "Plan Visit",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/ashie_creation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      followers: "12.5K",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "https://www.instagram.com/ashie_creation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      followers: "8.2K",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-6 h-6" />,
      url: "https://www.instagram.com/ashie_creation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      followers: "5.8K",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6" />,
      url: "https://www.instagram.com/ashie_creation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      followers: "Chat",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gradient mb-6">
            Contact Us
          </h2>
          <p className="text-cream/80 text-lg max-w-3xl mx-auto">
            Ready to bring home a piece of divine artistry? Let's discuss your requirements 
            and create something special together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* <div className="space-y-6">
              <h3 className="text-2xl font-playfair font-bold text-cream">
                Let's Connect
              </h3>
              <p className="text-cream/80 leading-relaxed">
                Whether you're looking for a custom Ganesh idol, have questions about our 
                eco-friendly process, or want to visit our workshop, we're here to help.
              </p>
            </div> */}

            {/* Contact Cards */}
         <div className="premium-card p-4 bg-midnight/90 rounded-lg space-y-3">
  <h4 className="font-semibold text-cream mb-2">Contact Us</h4>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-cream/80 text-sm">
    <div className="flex items-start space-x-2">
      <Phone className="w-5 h-5 mt-1" />
      <div>
        <p className="font-medium text-cream">Call Us</p>
        <p className="whitespace-pre-line">+91 000000000</p>
      </div>
    </div>
    <div className="flex items-start space-x-2">
      <Mail className="w-5 h-5 mt-1" />
      <div>
        <p className="font-medium text-cream">Email Us</p>
        <p className="whitespace-pre-line">info@ashokcreations.com</p>
      </div>
    </div>
  </div>
  <button className="mt-3 w-full text-center text-gold font-medium hover:text-copper transition-colors">
    Get in Touch →
  </button>
</div>


            {/* Social Media */}
            <div className="space-y-6">
              <h4 className="text-xl font-playfair font-semibold text-cream">
                Follow Our Journey
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="premium-card p-4 flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-gold">{social.icon}</div>
                    <div>
                      <div className="text-cream font-medium text-sm">{social.name}</div>
                      <div className="text-cream/60 text-xs">{social.followers}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="premium-card p-6 bg-midnight rounded-lg max-w-md mx-auto animate-fade-in">
  <h3 className="text-lg font-semibold text-cream mb-4">Send us a Message</h3>
  <form onSubmit={handleSubmit} className="space-y-4">
    
    {/* Name */}
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      placeholder="Full Name *"
      className={`w-full px-3 py-2 bg-charcoal border rounded text-cream focus:outline-none focus:ring-2 focus:ring-gold ${
        formErrors.name ? 'border-red-500' : 'border-gold/20'
      }`}
    />
    
    {/* Email */}
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      placeholder="Email Address *"
      className={`w-full px-3 py-2 bg-charcoal border rounded text-cream focus:outline-none focus:ring-2 focus:ring-gold ${
        formErrors.email ? 'border-red-500' : 'border-gold/20'
      }`}
    />

    {/* Message */}
    <textarea
      name="message"
      value={formData.message}
      onChange={handleInputChange}
      rows={4}
      placeholder="Your Message *"
      className={`w-full px-3 py-2 bg-charcoal border rounded text-cream focus:outline-none focus:ring-2 focus:ring-gold resize-none ${
        formErrors.message ? 'border-red-500' : 'border-gold/20'
      }`}
    />

    {/* Submit */}
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full py-2 rounded bg-gold text-midnight font-semibold hover:bg-copper transition-colors ${
        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {isSubmitting ? "Sending..." : "Send Message"}
    </button>
  </form>
</div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;