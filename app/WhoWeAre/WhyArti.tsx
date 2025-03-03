export default function WhyArti() {
    return (
        <section className="bg-pink-50 px-4 py-12 md:py-16 lg:py-20">
            <div className="mx-auto max-w-6xl">
                <div className="relative grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
                    {/* First section positioned towards top-left */}
                    <div className="space-y-4 md:pt-0 md:pb-16">
                        <h2 className="text-2xl  tracking-tight md:text-3xl">Why &apos;Arti Speech&apos;?</h2>
                        <p className="max-w-lg text-gray-700">
                            Arti is short for &apos;articulate&apos; – reflecting our mission to help individuals express themselves clearly.
                            Through the use of smart filler words, Arti empowers users to &apos;articulate their speech,&apos; making
                            communication more natural and fluid.
                        </p>
                    </div>

                    {/* Second section positioned towards bottom-right */}
                    <div className="space-y-4 md:pt-32">
                        <h2 className="text-2xl  tracking-tight md:text-3xl">Our Mission</h2>
                        <p className="max-w-lg text-gray-700">
                            Our mission is to ensure every individual has the ability to express themselves confidently. By combining
                            simplicity, accessibility, and innovation, we aim to provide an AAC tool that not only serves educational
                            settings but also empowers parents, carers, and nonverbal individuals in their day-to-day lives.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

