import Image from "next/image"
import Group728 from "../public/Group728.png"

export default function LandingMoreInfo() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-12 py-16 space-y-24">


            {/* Educational Users Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="max-w-md">
                    <h2 className="text-3xl md:text-4xl  mb-4">Transforming Communication in the Classroom</h2>
                    <p className="text-gray-700 mb-6 text-lg">
                        {`Explore how Arti’s intuitive interface transforms the communication experience for nonverbal individuals. Each step in our process is designed to empower users, ensuring they can effectively express their needs and feelings. With a focus on user-friendly design, Arti encourages confident interaction in every setting.`}
                    </p>


                </div>
                <div>
                    <div className="flex justify-center">
                        <div className="relative w-[40vw] mx-auto">
                            <Image
                                src={Group728}
                                alt="Illustration of a person interacting with a large pencil"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

