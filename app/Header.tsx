import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="absolute top-0 left-0 w-full flex items-center justify-between py-6 px-24 z-10 bg-transparent">
            {/* Logo on the left */}
            <div className="text-2xl font-bold">arti<span className="text-black">.</span></div>

            {/* Links and button on the right */}
            <div className="flex items-center space-x-6 ml-auto">
                <nav className="hidden md:flex space-x-6 text-gray-700">
                    <Link href="#" className="hover:underline">What we offer</Link>
                    <Link href="#" className="hover:underline">For who</Link>
                    <Link href="/WhoWeAre" className="hover:underline">Who we are</Link>
                    <Link href="/FAQPage" className="hover:underline">FAQ</Link>
                </nav>
                <button className="border border-blue-500 text-blue-500 rounded-full px-6 py-2 hover:bg-blue-500 hover:text-white transition-colors">
                    Sign up
                </button>
            </div>
        </header>
    );
};

export default Header;