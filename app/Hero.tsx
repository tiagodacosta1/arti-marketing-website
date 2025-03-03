"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, X } from "lucide-react"
import Image from "next/image"
import clouds from "../public/clouds.svg"
import parachutePerson from "../public/parachute-person.svg"

const Hero: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        // For example using fetch or axios

        // Show success messages
        alert("Thank you for signing up for early access! We'll be in touch soon.")
        closeModal()
    }

    return (
        <main className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4">
            <div className="absolute left-0 top-10 hidden sm:block">
                <Image src={clouds} alt="Cloud decoration" />
            </div>

            <div className="absolute right-20 top-1/3 hidden sm:block">
                <Image src={parachutePerson} alt="Person with parachute" />
            </div>


            <h1 className="leading-[1.2] md:leading-[1.2] text-4xl md:text-5xl  ">
                Empowering{" "}
                <span className="relative z-10 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-green-500 after:-skew-y-1">
                    Communication
                </span>
                ,<br />
                One Tile at a Time.
            </h1>

            <p className="text-lg text-gray-600 mt-4 max-w-2xl">
                Arti Speech is an AAC app that simplifies communication for individuals with speech challenges, empowering them
                to express themselves confidently and connect with others.
            </p>

            <button
                onClick={openModal}
                className="flex items-center bg-blue-500 text-white font-medium px-1 py-1 rounded-full mt-4 group transition-colors duration-300 hover:bg-blue-600"
            >
                <span className="w-6 h-12 bg-blue-500 rounded-l-full transition-colors duration-300 group-hover:bg-blue-600"></span>
                <div className="pr-3">Sign up for early access</div>
                <span className="w-12 h-12 flex items-center justify-center bg-white rounded-full transition-transform duration-300 group-hover:rotate-[15deg]">
                    <ArrowUpRight className="text-blue-500" size={20} />
                </span>
            </button>

            {/* Sign Up Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
                        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                            <X size={24} />
                        </button>

                        <h2 className="text-2xl  mb-6">Sign up for early access</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-left text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-left text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="reason" className="block text-sm font-medium text-left text-gray-700">
                                    How will you use Arti Speech?
                                </label>
                                <select
                                    id="reason"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select an option</option>
                                    <option value="personal">Personal use</option>
                                    <option value="family">For a family member</option>
                                    <option value="professional">Professional setting</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                                >
                                    Submit
                                </button>
                            </div>

                            <p className="text-xs text-gray-500 text-center mt-4">
                                By signing up, you agree to our{" "}
                                <a href="#" className="text-blue-500 hover:underline">
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-blue-500 hover:underline">
                                    Privacy Policy
                                </a>
                                .
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Hero

