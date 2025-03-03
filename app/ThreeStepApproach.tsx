"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

// Statically import images
import ImageStep1 from "@/public/Group682.png"
import ImageStep2 from "@/public/Group634.png"

export default function ThreeStepApproach() {
    const [progress, setProgress] = useState([0, 0, 0])

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = [...prev]
                for (let i = 0; i < newProgress.length; i++) {
                    if (newProgress[i] < 100) {
                        newProgress[i] = Math.min(newProgress[i] + 1, 100)
                        break
                    }
                }
                return newProgress
            })
        }, 50)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-[#FFF1F1] min-h-screen p-4 sm:p-12 flex items-center justify-center">
            <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8">
                    <h2 className="text-3xl sm:text-4xl  relative inline-block">
                        <span className="relative inline-block mr-2">
                            3-step
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#0095FF] origin-left transform -skew-y-2"></span>
                        </span>
                        approach
                    </h2>

                    <div className="space-y-8 lg:space-y-12">
                        <div className="space-y-2">
                            <h2 className="text-lg sm:text-xl font-semibold">1. Subject</h2>
                            <p className="text-sm sm:text-base text-gray-700">
                                Start by choosing who the conversation is directed to.
                            </p>
                            <p className="text-sm sm:text-base text-gray-700">Example: 👤 I or 👥 We</p>
                            <div className="w-full h-0.5 bg-red-200 mt-4 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-red-500 transition-all duration-300 ease-out"
                                    style={{ width: `${progress[0]}%` }}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-lg sm:text-xl font-semibold">2. Action</h2>
                            <p className="text-sm sm:text-base text-gray-700">
                                Choose an action or category. Whether you&apos;re talking about food, feelings, or activities, this step
                                helps shape the sentence.
                            </p>
                            <div className="w-full h-0.5 bg-red-200 mt-4 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-red-500 transition-all duration-300 ease-out"
                                    style={{ width: `${progress[1]}%` }}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-lg sm:text-xl font-semibold">3. Object</h2>
                            <p className="text-sm sm:text-base text-gray-700">
                                Add the object to complete your sentence. This could be an item, place, or a feeling.
                            </p>
                            <div className="w-full h-0.5 bg-red-200 mt-4 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-red-500 transition-all duration-300 ease-out"
                                    style={{ width: `${progress[2]}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Images */}
                <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                        <div
                            className="absolute transition-opacity duration-500"
                            style={{ opacity: progress[0] === 100 ? 1 : 0, zIndex: 1 }}
                        >
                            <Image
                                src={ImageStep1 || "/placeholder.svg"}
                                alt="First step image"
                                width={320}
                                height={320}
                                className="object-contain"
                            />
                        </div>
                        <div
                            className="absolute transition-opacity duration-500"
                            style={{ opacity: progress[1] === 100 ? 1 : 0, zIndex: 2 }}
                        >
                            <Image
                                src={ImageStep2 || "/placeholder.svg"}
                                alt="Second step image"
                                width={320}
                                height={320}
                                className="object-contain"
                            />
                        </div>
                        <div
                            className="absolute transition-opacity duration-500"
                            style={{ opacity: progress[2] === 100 ? 1 : 0, zIndex: 3 }}
                        >
                            <Image
                                src={ImageStep1 || "/placeholder.svg"}
                                alt="Third step image"
                                width={320}
                                height={320}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

