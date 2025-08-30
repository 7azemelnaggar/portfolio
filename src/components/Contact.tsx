import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Instagram, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email service integration here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                I'm always interested in discussing cybersecurity opportunities, collaboration 
                on exciting projects, or simply connecting with fellow tech enthusiasts. 
                Feel free to reach out!
              </p>
              
              {/* Contact Details */}
              <div className="space-y-6 mb-8">
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
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
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
            
            {/* Contact Form */}
            <div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      placeholder="Project Collaboration"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Hi Hazem, I'd like to discuss..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-400 hover:to-green-400 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;