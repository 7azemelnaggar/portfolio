import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold pb-6  bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-fade-in">
            Hazem ElNaggar
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in delay-300">
            Software Developer
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
            Passionate about software development and IT solutions,
            Currently studying Cybersecurity at Faculty of Computers & Data Science, Alexandria University with hands-on experience in Java, Python, and data analysis.
          </p>
          
          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-700">
            <a href="https://github.com/7azemelnaggar" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/25">
              <Github className="w-6 h-6 text-cyan-400" />
            </a>
            <a href="https://linkedin.com/in/hazem-elnaggar" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/25">
              <Linkedin className="w-6 h-6 text-blue-400" />
            </a>
            <a href="mailto:7azemelnaggar@gmail.com"
               className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-400/25">
              <Mail className="w-6 h-6 text-green-400" />
            </a>
            <a href="https://www.instagram.com/negrr00/" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-400/25">
              <Instagram className="w-6 h-6 text-purple-400" />
            </a>
          </div>
          
          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25 animate-fade-in delay-1000"
          >
            View My Work
            <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;