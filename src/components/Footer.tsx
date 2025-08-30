import React from 'react';
import { Shield, Github, Linkedin, Mail, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/7azemelnaggar',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/hazem-elnaggar',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:7azemelnaggar@gmail.com',
      label: 'Email',
      color: 'hover:text-cyan-400'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/negrr00/',
      label: 'Instagram',
      color: 'hover:text-pink-400'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const interests = [
    'Building PCs',
    'Graphic Design',
    'Video Editing',
    'Kernel Dev',
    'Cybersecurity Research'
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white">Hazem ElNaggar</h3>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Cybersecurity student | Software Developer
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-900 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg text-gray-400 ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Interests */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Interests</h4>
            <ul className="space-y-2">
              {interests.map((interest, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm">{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                <span className="text-cyan-400">Email:</span> 7azemelnaggar@gmail.com
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-green-400">Phone:</span> +201281518910
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
              “I have no special talents. I am only passionately curious.”
              </p>
              <p className="text-gray-400 text-sm">
              ~ Albert Einstein
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">
              © 2025 Hazem ElNaggar. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-400 mx-1" /> and lots of caffeine
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;