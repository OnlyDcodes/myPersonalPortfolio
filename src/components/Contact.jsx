import React from 'react';

export const Contact = () => {
  return (
    <section id="Contacts" className="min-h-screen bg-gradient-to-br from-sky-50 via-sky-100 to-white pt-28 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Information</h2>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-6 gap-6">
          {/* Email */}
          <div className="flex items-start md:items-center gap-3 md:gap-4 min-w-[220px]">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-black/5 border border-black/10">
              <svg className="w-7 h-7 text-tealbrand-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
              <div className="text-gray-900 font-medium">Email</div>
              <div className="text-gray-700 text-sm">dcamorganda@gmail.com</div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start md:items-center gap-3 md:gap-4 min-w-[220px]">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-black/5 border border-black/10">
              <svg className="w-7 h-7 text-tealbrand-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
              <div className="text-gray-900 font-medium">Phone</div>
              <div className="text-gray-700 text-sm">09949279910</div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start md:items-center gap-3 md:gap-4 min-w-[220px]">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-black/5 border border-black/10">
              <svg className="w-7 h-7 text-tealbrand-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
              <div className="text-gray-900 font-medium">Location</div>
              <div className="text-gray-700 text-sm">Minglanilla, Cebu</div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6 text-center">Follow Me</h3>
        <div className="flex gap-6 justify-center">
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/donylamorganda/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-black/5 border border-black/10 rounded-lg flex items-center justify-center hover:bg-tealbrand-600 transition-all duration-300 transform hover:scale-110 group"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/OnlyDcodes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-black/5 border border-black/10 rounded-lg flex items-center justify-center hover:bg-tealbrand-600 transition-all duration-300 transform hover:scale-110 group"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};