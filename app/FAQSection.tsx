"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
    question: string
    answer: string
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqItems: FAQItem[] = [
        {
            question: "What is Arti Speech?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "Who can use Arti Speech?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "How does the three-step process work?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "Can parents and carers use Arti Speech?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "Is Arti Speech available for schools?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "What devices is Arti Speech compatible with?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "Does Arti Speech use AI?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "How is Arti Speech different from other AAC tools?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "Can I customise the tiles in Arti Speech?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "How much does Arti Speech cost?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "How can I provide feedback or suggestions?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "When will Arti Speech be launched?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ]

    return (
        <section className="py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold relative inline-block">
                            Frequently
                            <br />
                            Asked
                            <br />
                            Questions
                            <div className="absolute bottom-1 left-0 w-full h-2 bg-blue-500 -z-10"></div>
                        </h2>
                        <p className="text-gray-600 max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
                            Contact Us
                        </button>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <div key={index} className="border-b border-gray-200">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full py-4 flex justify-between items-center text-left"
                                >
                                    <span className="font-medium">{item.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {openIndex === index && <div className="pb-4 text-gray-600">{item.answer}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

