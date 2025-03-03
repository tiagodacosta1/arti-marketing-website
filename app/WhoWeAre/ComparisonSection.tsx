
export default function ComparisonSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-4xl  mb-16">How We&apos;re Different</h2>

            <div className="grid grid-cols-12 gap-8">
                {/* Others Column */}
                <div className="col-span-5 space-y-12 py-8">
                    <h3 className="text-3xl text-muted-foreground mb-8">Others</h3>

                    <div className="space-y-12">
                        <div className="grid gap-2">
                            <h4 className="text-red-500 font-medium">High Costs</h4>
                            <p className="text-gray-900">
                                Many AAC apps are priced out of reach for families and small institutions.
                            </p>
                        </div>

                        <div className="grid gap-2">
                            <h4 className="text-red-500 font-medium">Device Lock-In</h4>
                            <p className="text-gray-900">Most apps are restricted to a single device, limiting flexibility.</p>
                        </div>

                        <div className="grid gap-2">
                            <h4 className="text-red-500 font-medium">Clunky Interfaces</h4>
                            <p className="text-gray-900">Complex designs can make communication harder, not easier.</p>
                        </div>
                    </div>
                </div>

                {/* Arti Column */}
                <div className="col-span-7 bg-[#EDF3FF] rounded-3xl p-8">
                    <div className="space-y-12">
                        {/* <Image
                            src="/Logo.png"
                            alt="Arti Logo"
                            width={100}
                            height={40}
                            className="mb-8"
                        /> */}
                        <h2 className="text-3xl  text-black">
                            Arti
                        </h2>

                        <div className="grid gap-2">
                            <h4 className="text-blue-500 font-medium">Customisable Tiles</h4>
                            <p className="text-gray-900">
                                Personalise communication with tiles that reflect the user&apos;s unique world.
                            </p>
                        </div>

                        <div className="grid gap-2">
                            <h4 className="text-blue-500 font-medium">AI-Powered Assistance</h4>
                            <p className="text-gray-900">
                                Turn simple words into complete sentences with smart filler words that enhance natural communication.
                            </p>
                        </div>

                        <div className="grid gap-2">
                            <h4 className="text-blue-500 font-medium">Empathy-Driven Design</h4>
                            <p className="text-gray-900">
                                Built by a team with personal experience in neurodivergence, Arti Speech priorities inclusivity at every
                                step.
                            </p>
                        </div>

                        <div className="grid gap-2">
                            <h4 className="text-blue-500 font-medium">Affordable for All</h4>
                            <p className="text-gray-900">
                                High-quality AAC shouldn&apos;t break the bank. Arti Speech offers accessible pricing for families and
                                schools alike.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

