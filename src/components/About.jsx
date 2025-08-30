import React from 'react';

export const About = () => {
  return (
    <section id="About" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto lg:mx-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full p-1">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    D
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center lg:text-left">
              About <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Me</span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center lg:text-left">
            I'm a Software Developer who turns ideas into clean, efficient, and user-friendly web solutions, and
            loves building apps that are both powerful and intuitive.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center lg:text-left">
            "Programming isn’t about what you know; it’s about what you can figure out." – Chris Pine
            </p>

            {/* Education & Organisations */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white text-center lg:text-left">Education</h3>
                <div className="mt-3 border-b border-gray-700 pb-4">
                  <p className="text-base sm:text-lg font-semibold text-white">BS Computer Engineering</p>
                  <p className="italic text-gray-300">University of San Carlos - Talamban Campus</p>
                  <p className="text-gray-400 text-sm">2021 – 2025</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white text-center lg:text-left">Organizations</h3>
                <div className="mt-3">
                  <p className="text-base sm:text-lg font-semibold text-white">University of San Carlos - Collegiate Engineering Council</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="pt-4 sm:pt-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4 text-center lg:text-left">Experience</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="border-l-4 border-blue-500 pl-3 sm:pl-4">
                  <h4 className="text-base sm:text-lg font-semibold text-white">Software Developer Intern — Innodata Knowledge Services.Inc</h4>
                  <p className="text-blue-400 text-sm sm:text-base">Feb 2025 - June 2025</p>
                  <p className="text-gray-300 text-xs sm:text-sm">Assisted in development tasks, worked on feature implementation and bug fixes, and collaborated with the engineering team on internal tools.</p>
                </div>
                {/* Frontend Developer entry removed as requested */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
