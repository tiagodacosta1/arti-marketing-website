"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 w-full bg-white z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Mobile Menu Button - visible on mobile only */}
                    <button onClick={() => setIsOpen(true)} className="md:hidden">
                        <Menu className="h-6 w-6 text-black" />
                    </button>

                    {/* Logo - centered on mobile */}
                    <div className="flex-1 flex justify-center md:justify-start">
                        <Link href="/" className="text-xl  text-black">
                            Arti
                        </Link>
                    </div>

                    {/* Desktop Navigation - hidden on mobile */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/WhoWeAre" className="text-black hover:text-gray-600">
                            About
                        </Link>
                        {/* <Link href="/" className="text-black hover:text-gray-600">
                            Pricing
                        </Link> */}
                        <Link href="/FAQPage" className="text-black hover:text-gray-600">
                            FAQ
                        </Link>
                        <button className="border border-blue-500 text-blue-500 rounded-full px-6 py-2 hover:bg-blue-500 hover:text-white transition-colors">
                            Sign up
                        </button>
                    </div>

                    {/* Mobile Menu Overlay */}
                    {isOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden" onClick={() => setIsOpen(false)}>
                            <div
                                className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-6">
                                    <div className="flex justify-end">
                                        <button onClick={() => setIsOpen(false)}>
                                            <X className="h-6 w-6 text-black" />
                                        </button>
                                    </div>
                                    <div className="mt-8 flex flex-col space-y-8">
                                        <Link href="#WhoWeAre" className="text-black hover:text-gray-600" onClick={() => setIsOpen(false)}>
                                            Who We Are
                                        </Link>
                                        <Link href="#pricing" className="text-black hover:text-gray-600" onClick={() => setIsOpen(false)}>
                                            Pricing
                                        </Link>
                                        <Link href="/faq" className="text-black hover:text-gray-600" onClick={() => setIsOpen(false)}>
                                            FAQ
                                        </Link>
                                        <button
                                            className="border border-blue-500 text-blue-500 rounded-full px-6 py-2 hover:bg-blue-500 hover:text-white transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Sign up
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

