export function HowItWorks() {
    const steps = [
        {
            step: "01",
            title: "Define",
            description: "Write your documentation in standard Markdown, OpenAPI YAML, and AsyncAPI specs."
        },
        {
            step: "02",
            title: "Configure",
            description: "Create a simple xeocontext.config.json that maps your files to the navigation structure."
        },
        {
            step: "03",
            title: "Deploy",
            description: "Run the Docker container or host the static build anywhere. You are live."
        }
    ]

    return (
        <section className="py-24 border-t border-white/5">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    From Chaos to Clarity in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">3 Steps</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-blue-500/20 via-purple-500/50 to-blue-500/20 z-0"></div>

                    {steps.map((item, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-14 h-14 rounded-full bg-black border border-white/20 flex items-center justify-center text-xl font-bold mb-6 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 max-w-xs text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
