'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const serviceCategories = {
  lashes: {
    title: "Eyelash Extensions",
    description: "Professional lash extension services tailored to your eye shape and style",
    services: [
      {
        title: "Japanese Classics",
        price: "RM80"
      },
      {
        title: "Japanese Airlash",
        price: "RM80"
      },
      {
        title: "YY Volume",
        price: "RM80"
      },
      {
        title: "Hybrid Volume (Single Strand + YY)",
        price: "RM80"
      },
      {
        title: "Soft Volume (0.07 WW)",
        price: "RM90"
      },
      {
        title: "Heavy Volume (0.12 WW)",
        price: "RM90"
      },
      {
        title: "Manhwa 漫画款",
        price: "RM110"
      },
      {
        title: "Thai Manhwa 泰式款",
        price: "RM110"
      },
      {
        title: "Sunflower 太阳花",
        price: "RM110"
      },
      {
        title: "Custom Design 定制设计",
        price: "RM110"
      },
      {
        title: "Classic Lower Lash",
        price: "RM15-RM25"
      },
      {
        title: "Manhwa Lower Lash",
        price: "RM15-RM25"
      }
    ]
  },
  brows: {
    title: "Brow & Lash Services",
    description: "Professional brow shaping and lash lifting services",
    services: [
      {
        title: "Brow Lamination",
        price: "RM50"
      },
      {
        title: "Brow Tint",
        price: "RM50"
      },
      {
        title: "Brow Wax + Shape",
        price: "RM35"
      },
      {
        title: "Brow Lamination + Tint + Wax + Shape",
        price: "RM125"
      },
      {
        title: "Korean Lash Lift - Top Lash",
        price: "RM85"
      },
      {
        title: "Korean Lash Lift - Bottom Lash",
        price: "RM15"
      },
      {
        title: "Korean Lash Lift - Tint (Top & Bottom)",
        price: "RM20"
      }
    ]
  },
  ipl: {
    title: "IPL Skin Lasering",
    description: "Professional laser hair removal treatments",
    services: [
      {
        title: "Underarm - Trial",
        price: "RM90"
      },
      {
        title: "Underarm - Package x6",
        price: "RM480"
      },
      {
        title: "Upper Lip Area - Trial",
        price: "RM40"
      },
      {
        title: "Upper Lip Area - Package x6",
        price: "RM198"
      }
    ]
  },
  facials: {
    title: "Facial Treatments",
    description: "Rejuvenating facial treatments for healthy, glowing skin",
    services: [
      {
        title: "Glow Basic Facial",
        price: "RM75"
      },
      {
        title: "Deep Clean Standard Facial",
        price: "RM85"
      },
      {
        title: "Deep Clean Premium Facial",
        price: "RM120"
      },
      {
        title: "Purify Acne Treatment",
        price: "RM297"
      },
      {
        title: "Add-on: Ampoule (Hydrating/Brightening/DNA Fresh Cell)",
        price: "+RM25"
      },
      {
        title: "Add-on: Soothing Treatment",
        price: "+RM20"
      },
      {
        title: "Add-on: Scalp Massage",
        price: "+RM10"
      }
    ]
  }
};

const RuemiBeautyWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeServiceTab, setActiveServiceTab] = useState('lashes');

  const heroImages = [
    '/images/hero-1.jpg',
    '/images/hero-2.jpg', 
    '/images/hero-3.jpg'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'testimonials'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    // Auto-rotate hero images
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(imageInterval);
    };
  }, [heroImages.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const testimonials = [
    {
      quote: "Thanks!! I really like the lift, it's very nice and natural 💕",
      rating: 5
    },
    {
      quote: "Hello miss, just wanna say that i really lovee the lashes😍 you did a nice jobb. will 100% come back to you again & recommend to my friends",
      rating: 5
    },
    {
      quote: "It feels super lightweight, really love it. Its like I'm not even wearing extensions!",
      rating: 5
    }
  ];

  return (
    <div className="bg-neutral-50 text-neutral-900 font-montserrat">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white shadow-md border-b border-neutral-200' 
          : 'bg-white shadow-sm border-b border-neutral-100'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-light tracking-wide text-neutral-900 hover:text-neutral-600 transition-colors duration-300"
            >
              RUEMI BEAUTY
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Reviews', id: 'testimonials' }
              ].map(({ name, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 relative ${
                    activeSection === id 
                      ? 'text-neutral-900' 
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {name}
                  {activeSection === id && (
                    <div className="absolute -bottom-1 left-0 w-full h-px bg-neutral-900"></div>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:block px-6 py-2 border border-neutral-900 text-sm font-medium tracking-wide uppercase hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              Book Consultation
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1"
            >
              <div className={`w-6 h-px bg-neutral-900 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-6 h-px bg-neutral-900 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-px bg-neutral-900 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}>
            <div className="py-6 space-y-4 border-t border-neutral-200">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Reviews', id: 'testimonials' }
              ].map(({ name, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left text-sm font-medium tracking-wide uppercase text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-neutral-100">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-50/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-medium tracking-widest uppercase text-neutral-500">
                  Professional Lash Artistry
                </p>
                <h1 className="text-5xl lg:text-7xl font-light leading-tight">
                  Enhance Your
                  <span className="block font-medium">Natural Beauty</span>
                </h1>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-lg">
                  Expertly crafted lash extensions and beauty services designed to enhance your unique features with precision and artistry.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide uppercase hover:bg-neutral-800 transition-all duration-300"
                >
                  Schedule Consultation
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-4 border border-neutral-300 text-sm font-medium tracking-wide uppercase hover:border-neutral-900 transition-all duration-300"
                >
                  View Services
                </button>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="aspect-[3/4] lg:aspect-[4/5] bg-neutral-200 relative overflow-hidden rounded-lg">
                <Image
                  src={heroImages[currentImageIndex]}
                  alt="Ruemi Beauty lash extensions showcase"
                  fill
                  className="object-cover transition-all duration-1000"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent"></div>
                
                {/* Image Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div>
                <p className="text-sm font-medium tracking-widest uppercase text-neutral-500 mb-4">
                  About Ruemi Beauty
                </p>
                <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
                  Crafting Beauty
                  <span className="block font-medium">With Precision</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Ruemi Beauty is your go-to destination for personalized beauty experiences. We specialize in enhancing your natural beauty with expertly applied eyelash extensions and keratin lash lifts. Our goal is to provide a comfortable and inviting atmosphere where you can relax and enjoy a bespoke lash transformation.
                </p>
                <p>
                  At Ruemi Beauty, we believe that true beauty is about feeling as good as you look. Join us and discover the difference luxurious lashes can make in elevating your appearance!
                </p>
                <p>
                  Every client receives a personalized consultation to determine the perfect look that enhances their natural features while maintaining the health of their natural lashes.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
                <div className="text-center">
                  <p className="text-3xl font-light text-neutral-900">✓</p>
                  <p className="text-sm text-neutral-500 mt-1">Certified Lash Artist</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-neutral-900">✓</p>
                  <p className="text-sm text-neutral-500 mt-1">Premium Products</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-neutral-900">✓</p>
                  <p className="text-sm text-neutral-500 mt-1">Personalized Care</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] bg-neutral-200 relative overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  alt="Professional portrait of Ruemi Beauty lash artist"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-neutral-500 mb-4">
              Professional Services
            </p>
            <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-8">
              Comprehensive
              <span className="block font-medium">Lash & Beauty Services</span>
            </h2>
          </div>

          {/* Service Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveServiceTab(key)}
                className={`px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  activeServiceTab === key
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Service Category */}
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-medium mb-4">{serviceCategories[activeServiceTab].title}</h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {serviceCategories[activeServiceTab].description}
            </p>
          </div>

          {/* Services Grid - Clean Price List */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
              {serviceCategories[activeServiceTab].services.map((service, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-between p-5 hover:bg-neutral-50 transition-colors duration-200 ${
                    index !== serviceCategories[activeServiceTab].services.length - 1 
                      ? 'border-b border-neutral-100' 
                      : ''
                  }`}
                >
                  <h4 className="text-base font-medium text-neutral-900 flex-1">
                    {service.title}
                  </h4>
                  <span className="text-lg font-medium text-neutral-900 ml-4 whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-neutral-900 text-white text-sm font-medium tracking-wide uppercase hover:bg-neutral-800 transition-all duration-300"
              >
                Book Your Appointment
              </button>
            </div>
          </div>

          {/* Service Packages CTA */}
          <div className="mt-16 text-center p-8 bg-white border border-neutral-200">
            <h3 className="text-2xl font-medium mb-4">Custom Service Packages Available</h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Combine multiple services for the ultimate beauty transformation. Ask about our package deals and loyalty program during your consultation.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-neutral-900 text-white text-sm font-medium tracking-wide uppercase hover:bg-neutral-800 transition-all duration-300"
            >
              Discuss Custom Package
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-neutral-500 mb-4">
              Client Reviews
            </p>
            <h2 className="text-4xl lg:text-5xl font-light leading-tight">
              What Clients
              <span className="block font-medium">Are Saying</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 space-y-6">
                <div className="flex text-neutral-900">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                
                <blockquote className="text-lg leading-relaxed text-neutral-600">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <p className="font-medium text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-medium tracking-widest uppercase text-neutral-400 mb-4">
                  Get In Touch
                </p>
                <h2 className="text-4xl lg:text-5xl font-light leading-tight">
                  Book Your
                  <span className="block font-medium">Consultation</span>
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-neutral-400 mb-2">Studio Location</p>
                  <p className="text-lg">MJC Batu Kawah<br/>Kuching, Sarawak 93250</p>
                </div>
                
                <div>
                  <p className="text-neutral-400 mb-2">Contact Information</p>
                  <p className="text-lg">Phone: 019 8282989</p>
                </div>
                
                <div>
                  <p className="text-neutral-400 mb-2">Studio Hours</p>
                  <p className="text-lg">By Appointment Only</p>
                  <p className="text-neutral-400">Monday - Sunday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Right Side - Booking Options */}
            <div className="bg-neutral-800 p-8 space-y-6">
              <h3 className="text-2xl font-light mb-4">Schedule Your Appointment</h3>
              
              <p className="text-neutral-300 leading-relaxed">
                Choose your preferred booking method below. We'll confirm your appointment and answer any questions.
              </p>

              {/* Google Calendar Button - PASTE YOUR LINK HERE */}
              <a
                href="https://calendar.app.google/fGv1XCtfZnyGDToE9"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-8 py-4 bg-white text-neutral-900 text-center text-sm font-medium tracking-wide uppercase hover:bg-neutral-100 transition-all duration-300"
              >
                Book via Google Calendar
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/60198282989?text=Hi%20Ruemi%20Beauty!%20I'd%20like%20to%20book%20an%20appointment%20for%20lash%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-8 py-4 bg-green-600 text-white text-center text-sm font-medium tracking-wide uppercase hover:bg-green-700 transition-all duration-300"
              >
                Book via WhatsApp
              </a>
              <div className="pt-4 border-t border-neutral-700">
                <p className="text-sm text-neutral-400 text-center">
                  Questions? Contact us via WhatsApp for immediate assistance!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-500 text-sm">
              © 2025 Ruemi Beauty. All rights reserved.
            </p>
            <p className="text-neutral-500 text-sm">
              Professional Lash & Beauty Services
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RuemiBeautyWebsite;