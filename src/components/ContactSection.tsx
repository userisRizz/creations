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
      url: "#",
      followers: "12.5K",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "#",
      followers: "8.2K",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-6 h-6" />,
      url: "#",
      followers: "5.8K",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6" />,
      url: "#",
      followers: "Chat",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-gold font-medium text-lg mb-4">Get In Touch</p>
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
            <div className="space-y-6">
              <h3 className="text-2xl font-playfair font-bold text-cream">
                Let's Connect
              </h3>
              <p className="text-cream/80 leading-relaxed">
                Whether you're looking for a custom Ganesh idol, have questions about our 
                eco-friendly process, or want to visit our workshop, we're here to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="premium-card p-6 flex items-start space-x-4 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center text-midnight">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-cream mb-2">{info.title}</h4>
                    <p className="text-cream/70 text-sm whitespace-pre-line mb-3">
                      {info.details}
                    </p>
                    <button className="text-gold text-sm font-medium hover:text-copper transition-colors">
                      {info.action} →
                    </button>
                  </div>
                </div>
              ))}
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
          <div className="premium-card p-8 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-xl font-playfair font-semibold text-cream mb-6">
                  Send us a Message
                </h3>
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-cream font-medium mb-2">
                  Inquiry Type
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-charcoal border border-gold/20 rounded-lg text-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                >
                  <option value="general">General Inquiry</option>
                  <option value="custom">Custom Order</option>
                  <option value="bulk">Bulk Order</option>
                  <option value="workshop">Workshop Visit</option>
                  <option value="collaboration">Collaboration</option>
                </select>
              </div>

              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-cream font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-charcoal border rounded-lg text-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent ${
                      formErrors.name ? 'border-red-500' : 'border-gold/20'
                    }`}
                    placeholder="Your full name"
                  />
                  {formErrors.name && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-cream font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-charcoal border rounded-lg text-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent ${
                      formErrors.email ? 'border-red-500' : 'border-gold/20'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {formErrors.email && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone and Subject */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-cream font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-charcoal border rounded-lg text-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent ${
                      formErrors.phone ? 'border-red-500' : 'border-gold/20'
                    }`}
                    placeholder="+91 98765 43210"
                  />
                  {formErrors.phone && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-cream font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-charcoal border border-gold/20 rounded-lg text-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-cream font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-charcoal border rounded-lg text-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none ${
                    formErrors.message ? 'border-red-500' : 'border-gold/20'
                  }`}
                  placeholder="Tell us about your requirements..."
                />
                {formErrors.message && (
                  <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-charcoal text-cream/50 cursor-not-allowed'
                    : 'btn-hero hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;