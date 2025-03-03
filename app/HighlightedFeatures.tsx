"use client"

import { useState } from "react"
import Image from "next/image"

// Define valid tab IDs
type TabId = "3-step" | "ai" | "dashboard"

// Define the structure of tab content
type TabContent = {
    [K in TabId]: {
        image: string
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
            image: "/image1.svg",
            alt: "3-step communication approach visualization",
            title: "Intuitive 3-Step Communication",
            description:
                "Arti empowers nonverbal individuals to communicate using a simple 3-step approach. Users select a subject, choose an action, and pick an object, allowing them to form clear sentences. This enhances their expression and benefits everyone involved, including unfamiliar listeners. For more advanced users, this can be toggled off.",
        },
        ai: {
            image: "/image2.svg",
            alt: "AI-Powered Sentence Enhancement interface",
            title: "AI-Powered Sentence Enhancement",
            description:
                'Arti\'s AI-driven technology enhances sentence structure by adding filler words automatically. This helps users communicate more clearly and naturally. For example, Arti turns "I want toilet" into "I want to go to the toilet," making the user\'s message clearer.',
        },
        dashboard: {
            image: "/image3.svg",
            alt: "Parent & Teacher Dashboard overview",
            title: "Manage and Personalise Communication",
            description:
                "Parents, carers, and teachers can manage, create, and edit communication tiles in real-time. Personalise dashboards, track progress and adjust tiles to fit the user's evolving needs, ensuring a seamless communication experience at home and school.",
        },
    }

    return (
        <section className="max-w-7xl mx-auto px-4 sm:p-12 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl  mb-6">{tabContent[activeTab].title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{tabContent[activeTab].description}</p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-12">
                <div className="inline-flex bg-gray-100 p-3 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                relative text-sm md:text-base px-8 py-3 transition-all duration-200
                                ${activeTab === tab.id
                                    ? "bg-[#0095FF] text-white rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                                    : "bg-transparent text-gray-600 hover:text-gray-900"
                                }
                            `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Preview */}
            <div className="relative max-w-4xl mx-auto">
                <div className="bg-[#1C1C1E] rounded-[2rem] p-4 md:p-6 overflow-hidden shadow-2xl">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src={tabContent[activeTab].image || "/placeholder.svg"}
                            alt={tabContent[activeTab].alt}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}





// "use client"

// import { useState } from "react"

// export default function AppPreview() {
//     const [activeTab, setActiveTab] = useState("3-step")

//     const tabs = [
//         { id: "3-step", label: "3-step approach" },
//         { id: "ai", label: "AI-Powered Sentence Enhancement" },
//         { id: "dashboard", label: "Parent & Teacher Dashboards" },
//     ]

//     return (
//         <section className="max-w-7xl mx-auto px-4 sm:p-12 py-16 md:py-24">
//             <div className="max-w-3xl mx-auto text-center mb-12">
//                 <h1 className="text-4xl md:text-5xl  mb-6">Intuitive 3-Step Communication</h1>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                     Arti empowers nonverbal individuals to communicate using a simple 3-step approach. Users select a subject,
//                     choose an action, and pick an object, allowing them to form clear sentences. This enhances their expression
//                     and benefits everyone involved, including unfamiliar listeners. For more advanced users, this can be toggled
//                     off.
//                 </p>
//             </div>

//             {/* Tabs */}
//             <div className="flex flex-wrap justify-center gap-4 mb-12">
//                 {tabs.map((tab) => (
//                     <button
//                         key={tab.id}
//                         onClick={() => setActiveTab(tab.id)}
//                         className={`
//                             px-6 py-3 rounded-full text-sm md:text-base font-medium transition-colors
//                             ${activeTab === tab.id
//                                 ? "bg-[#4285F4] text-white hover:bg-[#3b78e7]"
//                                 : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-100"
//                             }
//                         `}
//                     >
//                         {tab.label}
//                     </button>
//                 ))}
//             </div>

//             {/* Live App Preview */}
//             <div className="relative max-w-4xl mx-auto">
//                 <div className="bg-[#1C1C1E] rounded-[2rem] p-4 md:p-6 overflow-hidden shadow-2xl">
//                     <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
//                         <iframe
//                             src="https://arti2.vercel.app/"
//                             className="absolute inset-0 w-full h-full border-0"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }


