"use client"

import { useState } from "react"
import Image from "next/image"

// Import images statically
import Image1 from "@/public/image1.svg"
import Image2 from "@/public/image2.svg"
import Image3 from "@/public/image3.svg"

// Define valid tab IDs
type TabId = "3-step" | "ai" | "dashboard"

// Define the structure of tab content
type TabContent = {
    [K in TabId]: {
        image: any
        alt: string
        title: string
        description: string
    }
}

export default function AppPreview() {
    const [activeTab, setActiveTab] = useState<TabId>("3-step")

    const tabs = [
        { id: "3-step" as const, label: "3-step approach" },
        { id: "ai" as const, label: "AI-Powered Sentence Enhancement" },
        { id: "dashboard" as const, label: "Parent & Teacher Dashboards" },
    ]

    const tabContent: TabContent = {
        "3-step": {
            image: Image1,
            alt: "3-step communication approach visualization",
            title: "Intuitive 3-Step Communication",
            description:
                "Arti empowers nonverbal individuals to communicate using a simple 3-step approach. Users select a subject, choose an action, and pick an object, allowing them to form clear sentences. This enhances their expression and benefits everyone involved, including unfamiliar listeners. For more advanced users, this can be toggled off.",
        },
        ai: {
            image: Image2,
            alt: "AI-Powered Sentence Enhancement interface",
            title: "AI-Powered Sentence Enhancement",
            description:
                'Arti\'s AI-driven technology enhances sentence structure by adding filler words automatically. This helps users communicate more clearly and naturally. For example, Arti turns "I want toilet" into "I want to go to the toilet," making the user\'s message clearer.',
        },
        dashboard: {
            image: Image3,
            alt: "Parent & Teacher Dashboard overview",
            title: "Manage and Personalise Communication",
            description:
                "Parents, carers, and teachers can manage, create, and edit communication tiles in real-time. Personalise dashboards, track progress and adjust tiles to fit the user's evolving needs, ensuring a seamless communication experience at home and school.",
        },
    }

    return (
        <section className="max-w-7xl mx-auto px-4 sm:p-12 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {tabContent[activeTab].title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    {tabContent[activeTab].description}
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-12">
                <div className="inline-flex bg-gray-100 p-3 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                relative text-sm md:text-base px-8 py-3 transition-all duration-200 font-medium
                                ${activeTab === tab.id
                                    ? "bg-[#0095FF] text-white rounded-full shadow-md"
                                    : "text-gray-700 hover:text-gray-900"}
                            `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Image Preview */}
            <div className="max-w-4xl mx-auto text-center">
                <Image
                    src={tabContent[activeTab].image}
                    alt={tabContent[activeTab].alt}
                    width={600}
                    height={400}
                    className="mx-auto mb-8"
                />
            </div>
        </section>
    )
}
