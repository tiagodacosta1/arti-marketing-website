import Image from "next/image"

export default function ThreeStepApproach() {
    return (
        <div className="bg-[#FFF1F1] min-h-screen p-8 flex items-center justify-center">
            <div className="container max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-8">
                    {/* Title */}
                    <h1 className="text-4xl font-bold relative inline-block">
                        3-step approach
                        <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#0095FF]" />
                    </h1>

                    {/* Steps */}
                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">1. Subject</h2>
                            <p className="text-gray-700">Start by choosing who the conversation is directed to.</p>
                            <p className="text-gray-700">Example: 👤 I or 👥 We</p>
                            <div className="w-full h-px bg-red-300 mt-4" />
                        </div>

                        {/* Step 2 */}
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">2. Action</h2>
                            <p className="text-gray-700">
                                Choose an action or category. Whether you&apos;re talking about food, feelings, or activities, this step
                                helps shape the sentence.
                            </p>
                            <div className="w-full h-px bg-red-300 mt-4" />
                        </div>

                        {/* Step 3 */}
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">3. Object</h2>
                            <p className="text-gray-700">
                                Add the object to complete your sentence. This could be an item, place, or a feeling.
                            </p>
                            <div className="w-full h-px bg-red-300 mt-4" />
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div className="w-full md:w-80">
                    <div className="flex flex-col items-center">
                        <div className="relative w-96 h-96 mb-4">
                            <Image
                                src="/Group472.png"
                                alt="Waving person emoji"
                                fill
                                priority
                                className="object-contain"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

