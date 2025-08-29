export const Navbar = () => {
    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="group relative">
                    <span className="font-mono text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-400 hover:to-cyan-300 transition-all duration-300">
                        &lt;OnlyD
                    </span>
                    <span className="font-mono text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:via-blue-400 hover:to-purple-300 transition-all duration-300">
                        codes
                    </span>
                    <span className="font-mono text-xl font-bold bg-gradient-to-r from-purple-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent hover:from-purple-300 hover:via-cyan-400 hover:to-blue-300 transition-all duration-300">
                        /&gt;
                    </span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
                </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
                    &#9776;
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <a href="Home"
                    className="tex-gray-300 hov:text-white transition-colors">
                        {""}Home{""}
                    </a>

                    <a href="About"
                    className="tex-gray-300 hov:text-white transition-colors">
                        {""}About{""}
                    </a>
                    <a href="Projects"
                    className="tex-gray-300 hov:text-white transition-colors">
                        {""}Projects{""}
                    </a>
                    <a href="Contacts"
                    className="tex-gray-300 hov:text-white transition-colors">
                        {""}Contacts{""}
                    </a>

                </div>
            </div>
        </div>
        </nav>
};

