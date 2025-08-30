import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }
      
      .animate-fade-in {
        animation: fade-in 0.8s ease-out forwards;
        opacity: 0;
      }
      
      .delay-300 {
        animation-delay: 0.3s;
      }
      
      .delay-500 {
        animation-delay: 0.5s;
      }
      
      .delay-700 {
        animation-delay: 0.7s;
      }
      
      .delay-1000 {
        animation-delay: 1s;
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #1f2937;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #06b6d4, #10b981);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #0891b2, #059669);
      }
      
      /* Selection styling */
      ::selection {
        background: rgba(6, 182, 212, 0.3);
        color: #ffffff;
      }
      
      /* Focus states */
      .focus-visible {
        outline: 2px solid #06b6d4;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;