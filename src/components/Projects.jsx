import React, { useState, useRef } from 'react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Septic Tank Monitoring System",
      description: "A monitoring system designed to wirelessly track septic tank capacity, consisting of two main components: a Sensor Module that collects data and a Monitoring Module that displays real-time information for easier management.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Firebase", "Arduino UNO R3", "ESP32", "LoRa SX1278"],
      image: "/images/septic-tank.png",
      link: "#",
      github: "#"
    },
    {
      title: "TravelKeep",
      description: "Developed a full-stack web application that allows users to organize and preserve their travel memories through an intuitive, cloud-based platform.",
      technologies: ["React.js", "Tailwind CSS", "Firestore", "Express.js", "Node.js"],
      image: "/images/travelkeep.png",
      link: "#",
      github: "#"
    },
    {
      title: "InformationApp",
      description: "Knowledge Base WebApp (CodeIgniter 4) A simple PHP web application built with CodeIgniter 4 for managing and browsing a knowledge base. It uses MySQL for data storage and supports article categorization, search, and user access control.",
      technologies: ["PHP", "CodeIgniter 4", "MySQL"],
      image: "/images/information-app.png",
      link: "#",
      github: "#"
    },
    {
      title: "Geolocation UserCred",
      description: "A modern web application for tracking IP addresses and their geographical locations. Built with Laravel backend and React frontend.",
      technologies: ["React.js", "MySQL", "PHP-Laravel", "Laravel-Sanctum", "Node.js"],
      image: "/images/geolocation-usercred.png",
      link: "#",
      github: "#"
    },
    {
      title: "Moodful",
      description: "A Kotlin-based mood tracking app that helps users monitor emotional well-being via a simple color wheel interface. Regular mood logging enables users to identify patterns, reflect on triggers, and gain insights for better mental health and self-awareness.",
      technologies: ["Kotlin"],
      image: "/images/moodful.png",
      link: "#",
      github: "#"
    }
  ];

  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6; // scroll by ~60% of container width
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  // Function to handle opening the Google Form
  const handleGetInTouch = () => {
    window.open('https://docs.google.com/forms/d/1urTnabSNsHTBSHM_PrVGh3CEVFBHeiCH-0jx10jP3oM/edit', '_blank');
  };

  return (
    <section id="Projects" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            My <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and showcases different aspects of my development skills.
          </p>
        </div>

        {/* Projects Horizontal Scroll */}
        <div className="relative">
          {/* Left arrow */}
          <button
            aria-label="Scroll left"
            onClick={() => scroll('left')}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-800 border border-gray-700 text-white shadow-lg hover:bg-gray-700 hover:shadow-xl transition-all duration-300"
          >
            ←
          </button>

          {/* Right arrow */}
          <button
            aria-label="Scroll right"
            onClick={() => scroll('right')}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-800 border border-gray-700 text-white shadow-lg hover:bg-gray-700 hover:shadow-xl transition-all duration-300"
          >
            →
          </button>

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`min-w-[350px] sm:min-w-[400px] lg:min-w-[450px] bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-500 transform hover:scale-105 border border-gray-700 hover:border-blue-500 cursor-pointer ${
                  selectedProject === index ? 'scale-110 z-10' : ''
                }`}
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              >
                {/* Project Image */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* simplified: no external links */}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <button 
            onClick={handleGetInTouch}
            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};