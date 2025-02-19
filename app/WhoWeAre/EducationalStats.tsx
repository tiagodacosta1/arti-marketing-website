import Image from "next/image"

export default function EducationalStats() {
    return (
        <div className="relative w-full max-w-6xl mx-auto p-6">
            <div className="relative bg-white/95 rounded-lg shadow-sm overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/Maskgroup.png"
                        alt="Decorative background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 py-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Special educational needs in England</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {/* First Stat */}
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold">1.6 million</div>
                            <p className="text-sm md:text-base">
                                pupils in England have special educational needs <span className="text-red-600">(SEN)</span>
                            </p>
                        </div>

                        {/* Second Stat */}
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold">5M+</div>
                            <p className="text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </div>

                        {/* Third Stat */}
                        <div className="space-y-2">
                            <div className="bg-[#B4EDE1] text-black px-4 py-2 rounded-lg inline-block mb-2">
                                Speech, Language and Communication
                            </div>
                            <p className="text-sm md:text-base">is the most common type of support plan for pupils</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

