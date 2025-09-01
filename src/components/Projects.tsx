import React from 'react';
import { ExternalLink, Github, Calendar, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Craftex Egypt – Company Website",
      date: "07/2025",
      description: "Developed a professional company website with advanced SEO optimization and exceptional loading performance. Implemented modern web technologies for optimal user experience.",
      techStack: ["HTML5", "CSS3", "JavaScript", "SEO", "Performance Optimization"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "https://craftexeg.com/",
      githubUrl: "https://github.com/7azemelnaggar",
      featured: true
    },
    {
      title: "Flight Booking Management System",
      date: "04-05/2025",
      description: "Object-oriented Java application for comprehensive flight booking management. Features customer management, itinerary planning, and booking system with robust data handling.",
      techStack: ["Java", "OOP", "Data Structures", "File I/O"],
      image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/7azemelnaggar",
      featured: true
    },
    {
      title: "University Management System",
      date: "04-05/2025",
      description: "Advanced course registration system built with Java, utilizing linked lists and dynamic storage for efficient data management. Features student enrollment and course scheduling.",
      techStack: ["Java", "Linked Lists", "Dynamic Storage", "Data Management"],
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/7azemelnaggar",
      featured: false
    },
    {
      title: "Data Analysis with R",
      date: "12/2024-01/2025",
      description: "Comprehensive data analysis tool with GUI interface. Features data cleaning, deduplication algorithms, and advanced visualization capabilities for complex datasets.",
      techStack: ["R", "Data Analysis", "GUI", "Visualization", "Statistics"],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/7azemelnaggar",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-400/10 ${project.featured ? 'lg:col-span-2' : ''}`}
              >
                <div className={`${project.featured ? 'md:flex' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${project.featured ? 'md:w-1/2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-cyan-400/20 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4 text-cyan-400" />
                        </a>
                      )}
                      <a 
                        href={project.githubUrl}
                        className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-green-400/20 transition-all duration-300"
                      >
                        <Github className="w-4 h-4 text-green-400" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className={`p-6 ${project.featured ? 'md:w-1/2' : ''}`}>
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-cyan-400 font-medium">{project.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/50 text-sm text-cyan-400 rounded-full border border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex space-x-4">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                      <a 
                        href={project.githubUrl}
                        className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors duration-300"
                      >
                        <Code className="w-4 h-4" />
                        <span className="text-sm font-medium">View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;