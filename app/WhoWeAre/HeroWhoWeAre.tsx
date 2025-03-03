import Image from "next/image"

export default function HeroWhoWeAre() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left column - Text content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl  leading-tight">
                            Empowering Communication, <span className="block">One Tile at a Time.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                            Discover how we&apos;re changing communication for those with speech challenges
                        </p>
                    </div>

                    {/* Right column - Illustration */}
                    <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                        <Image
                            src="/Group679.png"
                            alt="Illustration of a person interacting with a large pencil"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

