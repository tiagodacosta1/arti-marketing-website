"use client"

import { motion } from "framer-motion"

export default function Features() {
    const featureSets = [
        [
            "Multi Symbol Library",
            "Full Customisation",
            "AI Sentence Builder",
            "Web & Mobile App",
            "Arti Home Tiles",
            "Friends & Family Accounts",
        ],
        ["Fast Performance", "Secure Data", "Offline Mode", "Cloud Sync", "User-Friendly UI", "24/7 Support"],
        [
            "Dark Mode",
            "Multi-Language Support",
            "Custom Themes",
            "Keyboard Shortcuts",
            "Gesture Controls",
            "Accessibility Options",
        ],
    ]



    return (
        <div className="overflow-hidden w-full py-10 space-y-10">
            <h2 className="text-xl font-bold text-left mb-8 ml-6 relative">
                <span className="relative z-10 inline-block">
                    More from Arti!
                    <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 origin-left transform -skew-y-2"></span>
                </span>
            </h2>

            {featureSets.map((features, i) => (
                <div key={i} className="relative w-full flex items-center justify-start overflow-hidden">
                    <motion.div
                        className="flex whitespace-nowrap"
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            duration: 30,
                        }}
                    >
                        {[...features, ...features].map((feature, index) => (
                            <div
                                key={index}
                                className="border border-blue-500 text-blue-500 px-6 py-3 mx-2 rounded-full text-lg font-semibold min-w-max"
                            >
                                {feature}
                            </div>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    )
}

