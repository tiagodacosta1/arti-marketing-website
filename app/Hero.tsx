import React from 'react';
import { ArrowUpRight } from 'react-feather';

const Hero: React.FC = () => {
    return (
        <main className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="leading-[1.2] md:leading-[1.2] text-4xl md:text-5xl font-bold ">
                Empowering{" "}
                <span className=" relative z-10 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-green-500 after:-skew-y-1">
                    Communication
                </span>,<br />
                One Tile at a Time.
            </h1>





            <p className="text-lg text-gray-600 mt-4 max-w-2xl">
                Arti Speech is an AAC app that simplifies communication for individuals with speech challenges,
                empowering them to express themselves confidently and connect with others.
            </p>
            <button className="flex items-center bg-blue-500 text-white font-medium px-1 py-1 rounded-full mt-4">
                <span className="w-6 h-12 bg-blue-500 rounded-l-full "></span> {/* Half circle on the left */}
                <div className="pr-3">Sign up for early access</div>
                <span className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                    <ArrowUpRight className="text-blue-500" size={20} />
                </span>
            </button>
        </main>
    );
};

export default Hero;
