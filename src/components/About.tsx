import React from 'react';
import { Shield, Code, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl shadow-cyan-400/20">
                  <img 
                    src="https://i.postimg.cc/WbLgDVwj/cropped-circle-image.png" 
                    alt="Hazem ElNaggar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <div className="absolute top-1/2 left-0 w-10 h-10 bg-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Database className="w-5 h-5 text-purple-400" />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Dedicated Cybersecurity student at Faculty of Computers & Data Sciences, Alexandria University
                with a passion for technology.
                My expertise spans multiple programming languages including <span className="text-cyan-400 font-semibold">Python</span>, 
                <span className="text-blue-400 font-semibold"> Java</span>, and 
                <span className="text-green-400 font-semibold"> JavaScript</span>.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond Cybersecurity, I'm involved in <span className="text-purple-400 font-semibold">Data Analysis</span>.
                I have hands-on experience in <span className="text-cyan-400 font-semibold">Ethical Hacking</span> and 
                <span className="text-blue-400 font-semibold"> Hardware</span>.
                I enjoy building PCs and exploring the intersection of hardware and software security.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                As a quick learner with a strong problem-solving mindset, I'm always eager to tackle 
                new challenges and stay updated with the latest technologies.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">5+</div>
                  <div className="text-gray-400">Programming Languages</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-400 mb-2">10+</div>
                  <div className="text-gray-400">Completed Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;