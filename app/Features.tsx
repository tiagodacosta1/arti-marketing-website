"use client";

import { motion } from "framer-motion";

export default function Features() {
    const features = [
        "Multi Symbol Library",
        "Full Customisation",
        "AI Sentence Builder",
        "Web & Mobile App",
        "Arti Home Tiles",
        "Friends & Family Accounts",
        "Multi Symbol Library",
        "Full Customisation",
        "AI Sentence Builder",
        "Web & Mobile App",
        "Arti Home Tiles",
        "Friends & Family Accounts",

    ];

    const duplicateFeatures = [...features, ...features,]; // Duplicate for seamless scrolling

    return (
        <div className="overflow-hidden w-full py-10">
            <h2 className="text-xl  text-left mb-8 ml-6 relative">
                <span className="relative z-10 inline-block">
                    Our Features!
                    <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 origin-left transform -skew-y-2"></span>
                </span>
            </h2>



            <div className="relative w-full flex items-center justify-start">
                <motion.div
                    className="flex whitespace-nowrap"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                >
                    {duplicateFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="border border-blue-500 text-blue-500 px-6 py-3 mx-2 rounded-full text-lg font-semibold min-w-max"
                        >
                            {feature}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
