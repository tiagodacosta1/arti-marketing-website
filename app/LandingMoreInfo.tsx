import Image from "next/image"


export default function LandingMoreInfo() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 space-y-24">


            {/* Educational Users Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming Communication in the Classroom</h2>
                    <p className="text-gray-700 mb-6 text-lg">
                        Arti allows teachers to create and manage personalised communication dashboards for their students. With
                        real-time updates, educators can adjust tiles to meet individual needs, ensuring effective communication in
                        the classroom and promoting a supportive learning environment.
                    </p>

                </div>
                <div>
                    <div className="relative aspect-[4/3] bg-[#EEF4FF] rounded-3xl overflow-hidden">
                        <Image
                            src="/Group728.png"
                            alt="Illustration of a person interacting with a large pencil"
                            fill
                            className="object-contain p-8"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

