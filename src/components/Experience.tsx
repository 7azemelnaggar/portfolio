import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Script Developer',
      company: 'Travel Key',
      location: 'Remote',
      period: '09/2024 – Present',
      description: 'Developed comprehensive automation scripts for booking systems, improving operational efficiency and reducing manual processing time.',
      skills: ['Python', 'Automation', 'Typescript', 'System Optimization']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Faculty of Computers & Data Science, Alexandria University',
      period: '2024 – 2028(expected)',
      description: 'Major: Cybersecurity',
      achievements: ['Cybersecurity Specialization', 'Active in Tech Communities']
    }
  ];



  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Professional Experience */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Briefcase className="w-6 h-6 text-cyan-400 mr-3" />
                Professional Experience
              </h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                        <p className="text-cyan-400 font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-400 mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-gray-800/50 text-sm text-green-400 rounded-full border border-green-400/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 text-green-400 mr-3" />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-green-400/30 transition-all duration-300">
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                      <p className="text-green-400 font-semibold mb-1">{edu.institution}</p>
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <span key={achievementIndex} className="px-3 py-1 bg-gray-800/50 text-sm text-green-400 rounded-full border border-green-400/30">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;