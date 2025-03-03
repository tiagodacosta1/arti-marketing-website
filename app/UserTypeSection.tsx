import Image from "next/image"


export default function UserTypeSection() {
    return (
        <section className="max-w-7xl mx-auto p-4 sm:px-12 py-16 space-y-24">
            {/* Individual Users Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                    <div className="inline-block px-3 py-1 mb-4 text-sm bg-[#FAFDD5] rounded-full">Individual users</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Empower Nonverbal Communication</h2>
                    <p className="text-gray-700 mb-6 text-lg">
                        Arti helps nonverbal individuals express themselves more effectively. Parents and carers can easily
                        personalise communication tiles to match their loved one's interests, promoting clearer interactions and
                        greater independence in daily life.
                    </p>
                    <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
                        Contact Us
                    </button>
                </div>
                <div className="md:order-1">
                    <div className="relative aspect-[4/3] bg-[#EEF4FF] rounded-3xl overflow-hidden">
                        <Image
                            src="/Group679.png" alt="Illustration of a person interacting with a large pencil"
                            fill
                            className="object-contain p-8"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Educational Users Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <div className="inline-block px-3 py-1 mb-4 text-sm bg-[#FAFDD5] rounded-full">Educational users</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming Communication in the Classroom</h2>
                    <p className="text-gray-700 mb-6 text-lg">
                        Arti allows teachers to create and manage personalised communication dashboards for their students. With
                        real-time updates, educators can adjust tiles to meet individual needs, ensuring effective communication in
                        the classroom and promoting a supportive learning environment.
                    </p>
                    <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
                        Contact Us
                    </button>
                </div>
                <div>
                    <div className="relative aspect-[4/3] bg-[#EEF4FF] rounded-3xl overflow-hidden">
                        <Image
                            src="/Group679.png"
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

