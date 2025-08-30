import React from 'react';
import { 
  Code2, Database, Globe, Terminal, 
  BarChart3, FileSpreadsheet, Search, Wrench 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90, icon: Code2, color: "text-orange-400" },
        { name: "JavaScript", level: 85, icon: Code2, color: "text-yellow-400" },
        { name: "Python", level: 88, icon: Code2, color: "text-blue-400" },
        { name: "R", level: 80, icon: BarChart3, color: "text-blue-500" },
        { name: "C", level: 75, icon: Code2, color: "text-gray-400" },
        { name: "TypeScript", level: 82, icon: Code2, color: "text-blue-300" }
      ]
    },
    {
      title: "Other Skills",
      skills: [
        { name: "SQL", level: 85, icon: Database, color: "text-cyan-400" },
        { name: "Web Hosting", level: 80, icon: Globe, color: "text-green-400" },
        { name: "Excel", level: 88, icon: FileSpreadsheet, color: "text-green-500" },
        { name: "Kali Linux", level: 85, icon: Terminal, color: "text-purple-400" },
        { name: "Problem-solving", level: 92, icon: Wrench, color: "text-yellow-400" },
        { name: "Data Analysis", level: 78, icon: Search, color: "text-cyan-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skillIndex} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Icon className={`w-5 h-5 ${skill.color}`} />
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r from-cyan-400 to-green-400 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-cyan-400/25`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications & Training */}
                      <div className="mt-16 bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Courses & Trainings
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  "CS50", "CCNA", "Python for Data Science", "Linux+",
                  "Sprints x Microsoft Cybersecurity", "DEPI-Data Analysis"
                ].map((cert, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25 border border-gray-700 hover:border-cyan-400/30">
                    <span className="text-cyan-400 font-semibold text-lg">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;