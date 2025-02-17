"use client"

import { useState } from "react"

export default function AppPreview() {
    const [activeTab, setActiveTab] = useState("3-step")

    const tabs = [
        { id: "3-step", label: "3-step approach" },
        { id: "ai", label: "AI-Powered Sentence Enhancement" },
        { id: "dashboard", label: "Parent & Teacher Dashboards" },
    ]

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Intuitive 3-Step Communication</h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Arti empowers nonverbal individuals to communicate using a simple 3-step approach. Users select a subject,
                    choose an action, and pick an object, allowing them to form clear sentences. This enhances their expression
                    and benefits everyone involved, including unfamiliar listeners. For more advanced users, this can be toggled
                    off.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
              px-6 py-3 rounded-full text-sm md:text-base transition-colors
              ${activeTab === tab.id ? "bg-[#0095FF] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}
            `}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Live App Preview */}
            <div className="relative max-w-4xl mx-auto">
                <div className="bg-[#1C1C1E] rounded-[2rem] p-4 md:p-6 overflow-hidden shadow-2xl">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <iframe
                            src="https://arti2.vercel.app/"
                            className="absolute inset-0 w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

