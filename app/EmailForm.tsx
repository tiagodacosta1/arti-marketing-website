"use client"

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";


const EmailForm: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            role,
        };

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Thank you for signing up!");
            } else {
                alert("Something went wrong, please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error, please try again.");
        }
    };

    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 md:py-16 bg-[#FAFDD5]">
            <div className="flex justify-center transform translate-y-6 md:translate-y-12">
                <Image
                    src="/Group727.png"
                    alt="Image 1"
                    width={467.06}
                    height={224.08}
                    className="w-full max-w-[300px] md:max-w-[467px] h-auto"
                />
            </div>
            <div className="flex flex-col items-center text-center justify-center space-y-6 md:space-y-12 bg-white py-8 md:py-12 px-4 md:px-8 rounded-3xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl">Stay Connected with Arti</h2>
                <p>Sign up to receive updates, exclusive offers, and more!</p>
                <form onSubmit={handleSubmit} className="w-full max-w-4xl">
                    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="px-4 py-3 md:py-4 bg-[#F5F5F5] rounded-3xl w-full lg:w-1/4"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-3 md:py-4 bg-[#F5F5F5] rounded-3xl w-full lg:w-1/4"
                        />
                        <div className="relative w-full lg:w-1/4">
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full px-4 py-3 md:py-4 bg-[#F5F5F5] rounded-3xl appearance-none text-lg font-medium pr-10"
                            >
                                <option value="" disabled>
                                    Who are you?
                                </option>
                                <option value="student">Student</option>
                                <option value="professional">Professional</option>
                                <option value="educator">Educator</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                                <ChevronDown className="h-5 w-5" />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="px-8 md:px-12 py-3 md:py-4 bg-blue-500 text-white font-medium rounded-3xl w-full lg:w-1/4"
                        >
                            Sign me up
                        </button>
                    </div>
                </form>
                <p className="max-w-2xl text-sm md:text-base">
                    By signing up, you agree to receive updates, offers, and news from Arti
                    Speech. We respect your privacy and will never share your information
                    with third parties. You can unsubscribe at any time.
                </p>
            </div>
        </div>
    );
};

export default EmailForm;
