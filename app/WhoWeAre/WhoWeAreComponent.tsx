import Image from "next/image"

export default function WhoWeAreComponent() {
    return (
        <section className="px-4 py-12 md:py-16 lg:py-20">
            <div className="mx-auto max-w-6xl">
                <div className="grid items-center gap-8 md:grid-cols-[1fr,1.5fr] md:gap-12 lg:gap-16">
                    <div className="relative mx-auto max-w-sm md:mx-0">
                        <Image
                            src="/AnisaIllustration.png"
                            alt="Illustration of a person with a parachute holding a gift box"
                            width={400}
                            height={500}
                            className="h-auto w-full"
                            priority
                        />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl  tracking-tight md:text-3xl lg:text-4xl">Who We Are</h2>
                        <div className="space-y-6 text-gray-700">
                            <p>
                                Arti Speech was born out of a personal mission to make communication easier for individuals with speech
                                challenges. The inspiration came from the founder's experience with his nonverbal sister, diagnosed with
                                autism at three. Her daily struggles with communication sparked the creation of Arti Speech — an app
                                designed to bridge the gap for families, caregivers, and educators alike.
                            </p>
                            <p>
                                Arti Speech is brought to life by a passionate team of designers, developers, and researchers, most of
                                whom are based in London, all working together to create a functional and beautifully designed app. With
                                expertise in neurodivergent user experience, the team ensures that every feature of Arti is crafted with
                                care and precision.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

