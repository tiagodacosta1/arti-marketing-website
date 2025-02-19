"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowUp } from "lucide-react"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="bg-[#111111] text-white py-16">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row">
                    {/* Left Section - 50vw */}
                    <div className="w-full lg:w-[50vw] space-y-4 mb-8 lg:mb-0">
                        <Image
                            src="/Logo.png"
                            alt="Arti Logo"
                            width={120}
                            height={50}
                            className="brightness-0 invert"
                        />
                        <h2 className="text-xl font-light">
                            Empowering Communication,
                            <br />
                            One Tile at a Time.
                        </h2>
                    </div>

                    {/* Right Section - 50vw with 3 columns */}
                    <div className="w-full lg:w-[50vw] grid grid-cols-3 gap-4">
                        {/* First Column */}
                        <div className="space-y-4">
                            <Link href="/about" className="block hover:text-gray-300 transition-colors">
                                About
                            </Link>
                            <Link href="/blog" className="block hover:text-gray-300 transition-colors">
                                Blog
                            </Link>
                            <Link href="#" className="block hover:text-gray-300 transition-colors">
                                Facebook
                            </Link>
                            <Link href="#" className="block hover:text-gray-300 transition-colors">
                                X
                            </Link>
                        </div>

                        {/* Second Column */}
                        <div className="space-y-4">
                            <Link href="#" className="block hover:text-gray-300 transition-colors">
                                LinkedIn
                            </Link>
                            <Link href="#" className="block hover:text-gray-300 transition-colors">
                                Instagram
                            </Link>
                            <Link href="#" className="block hover:text-gray-300 transition-colors">
                                TikTok
                            </Link>
                        </div>

                        {/* Third Column - Arrow only */}
                        <div className="flex items-start">
                            <button
                                onClick={scrollToTop}
                                className="p-3 bg-[#0088FF] rounded-full hover:bg-[#0066CC] transition-colors transform -translate-y-[25%] focus:outline-none"
                                aria-label="Scroll to top"
                            >
                                <ArrowUp className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
                    <Link
                        href="mailto:info@arti-speech.com"
                        className="text-white hover:text-gray-300 transition-colors underline underline-offset-4"
                    >
                        info@arti-speech.com
                    </Link>
                    <div className="mt-4 md:mt-0">© 2025 Arti Labs</div>
                </div>
            </div>
        </footer>
    )
}

