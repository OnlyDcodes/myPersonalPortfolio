import { useEffect } from 'react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    const handleMenuToggle = () => {
        console.log('Hamburger clicked, current menuOpen:', menuOpen);
        setMenuOpen(!menuOpen);
    };
 
    return <nav className="fixed top-0 w-full z-40 bg-white/70 backdrop-blur-md shadow-glass border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#Home" className="group relative">
                    <span className="font-mono text-xl font-bold bg-gradient-to-r from-tealbrand-500 via-cyan-500 to-tealbrand-600 bg-clip-text text-transparent transition-all duration-300">
                        &lt;OnlyD
                    </span>
                    <span className="font-mono text-xl font-bold bg-gradient-to-r from-cyan-600 via-tealbrand-500 to-cyan-700 bg-clip-text text-transparent transition-all duration-300">
                        codes
                    </span>
                    <span className="font-mono text-xl font-bold bg-gradient-to-r from-tealbrand-600 via-cyan-600 to-tealbrand-500 bg-clip-text text-transparent transition-all duration-300">
                        /&gt;
                    </span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-tealbrand-500 via-cyan-500 to-tealbrand-600 group-hover:w-full transition-all duration-300"></div>
                </a>

                <div className="md:hidden">
                    <button 
                        className="flex flex-col justify-center items-center w-9 h-9 cursor-pointer rounded-md bg-black/5 hover:bg-black/10 border border-black/10 transition-colors"
                        onClick={handleMenuToggle}
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-black transition-all duration-300 mt-1 ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-black transition-all duration-300 mt-1 ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                    </button>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <a href="#Home"
                    className="text-gray-700 hover:text-black transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r from-tealbrand-500 via-cyan-500 to-tealbrand-600 after:transition-all after:duration-300 hover:after:w-full">
                        Home
                    </a>

                    <a href="#About"
                    className="text-gray-700 hover:text-black transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r from-tealbrand-500 via-cyan-500 to-tealbrand-600 after:transition-all after:duration-300 hover:after:w-full">
                        About
                    </a>
                    <a href="#Projects"
                    className="text-gray-700 hover:text-black transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r from-tealbrand-500 via-cyan-500 to-tealbrand-600 after:transition-all after:duration-300 hover:after:w-full">
                        Projects
                    </a>
                    <a href="#Contacts"
                    className="text-gray-700 hover:text-black transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r from-tealbrand-500 via-cyan-500 to-tealbrand-600 after:transition-all after:duration-300 hover:after:w-full">
                        Contacts
                    </a>
                </div>
            </div>
        </div>
        </nav>
};

