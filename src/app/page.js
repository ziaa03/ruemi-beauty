
// src/app/page.tsx
import React from 'react';
import Header from './components/Main';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Gallery from './components/Gallery';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50">
      <Header />
      {/* <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </main>
  );
}