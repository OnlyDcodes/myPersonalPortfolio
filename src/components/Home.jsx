import React from 'react';

export const Home = () => {
  return (
    <section id="Home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full text-center">
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {/* Hero Text */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Donyl Amorganda</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-300">
              Software Developer
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed">
            As a recent Computer Engineering graduate from the University of San Carlos, I bring fresh perspectives and up-to-date skills in web development. Bringing imaginations to reality!

            </p>
        
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center">
            <a
              href="#Projects"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('Projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else window.location.hash = 'Projects';
              }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              aria-label="View my work - jump to Projects"
            >
              View My Work
            </a>
          </div>

          {/* Tech Stack */}
          <div className="pt-8 sm:pt-12 lg:pt-16">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-6 sm:mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 px-4">
              {['React.js', 'Node.js', 'Javascript', 'Tailwind CSS', 'MySQL', 'Firebase','Python','PHP','Java','c','c++'].map((tech) => (
                <div key={tech} className="px-3 sm:px-4 py-2 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-colors duration-300 text-xs sm:text-sm">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
