import {
    FileText,
    Zap,
    Box,
    Cpu,
    Layout,
    Terminal,
    RefreshCw
} from 'lucide-react'

const features = [
    {
        title: "Multi-Format Support",
        description: "Native rendering for Markdown, Swagger UI (OpenAPI), and AsyncAPI in a single unified view.",
        icon: FileText
    },
    {
        title: "Live-reload",
        description: "See your documentation changes in real-time without manual refreshing.",
        icon: RefreshCw
    },
    {
        title: "Docker Ready",
        description: "Drop a volume with your content into the container and you're live. Instant deployment.",
        icon: Box
    },
    {
        title: "AI-Native",
        description: "Structured context source for AI Coding Agents to understand your architecture.",
        icon: Cpu
    },
    {
        title: "Theme Awareness",
        description: "Beautiful dark mode by default with seamless transitions and system preference support.",
        icon: Layout
    },
    {
        title: "Configurable",
        description: "Single configuration file links your spread-out specs into one coherent navigation tree.",
        icon: Terminal
    }
]

export function Features() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-black/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Why XeoContext?</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        One unified source of truth for your architecture documentation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group shadow-sm dark:shadow-none">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
