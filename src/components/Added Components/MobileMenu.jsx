import { useEffect } from 'react';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    console.log('MobileMenu rendered, menuOpen:', menuOpen);
    
    if (!menuOpen) return null;
    
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-sky-50 z-[9999] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                <a href="#Home" className="text-2xl font-medium text-gray-900 hover:text-black transition-colors" onClick={() => setMenuOpen(false)}>
                    Home
                </a>
                <a href="#About" className="text-2xl font-medium text-gray-900 hover:text-black transition-colors" onClick={() => setMenuOpen(false)}>
                    About
                </a>
                <a href="#Projects" className="text-2xl font-medium text-gray-900 hover:text-black transition-colors" onClick={() => setMenuOpen(false)}>
                    Projects
                </a>
                <a href="#Contacts" className="text-2xl font-medium text-gray-900 hover:text-black transition-colors" onClick={() => setMenuOpen(false)}>
                    Contacts
                </a>
            </div>
        </div>
    );
};

