import React from 'react';
import { Mail, Phone, Github, Linkedin, Instagram, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: '7azemelnaggar@gmail.com',
      href: 'mailto:7azemelnaggar@gmail.com',
      color: 'text-cyan-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+201281518910',
      href: 'tel:+201281518910',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Alexandria, Egypt',
      href: '#',
      color: 'text-blue-400'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/7azemelnaggar',
      color: 'text-gray-300 hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/hazem-elnaggar',
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/negrr00/',
      color: 'text-pink-400 hover:text-pink-300'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
              I'm always interested in discussing cybersecurity opportunities, collaboration 
              on exciting projects, or simply connecting with fellow tech enthusiasts. 
              Feel free to reach out!
            </p>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-12 max-w-2xl mx-auto">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a 
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex-shrink-0">
                      <Icon className={`w-6 h-6 ${contact.color}`} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      <p className="text-white font-medium">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Follow Me</h4>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;