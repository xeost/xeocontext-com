import { Pen, Eye, Code2, Repeat, CheckCircle2 } from 'lucide-react'

const workflowSteps = [
    {
        title: "Design",
        description: (
            <>
                Create your System Design in your editor, assisted by AI and organizing your files in a <strong className="text-blue-600 dark:text-blue-400">Domain-Driven Structure</strong> so that LLMs understand it better.
            </>
        ),
        icon: Pen
    },
    {
        title: "Visualize",
        description: (
            <>
                Visualize your design in <strong className="text-blue-600 dark:text-blue-400">XeoContext</strong>. If you see opportunities for improvements you can contribute to the design collaboratively as it is a Git repository.
            </>
        ),
        icon: Eye
    },
    {
        title: "Develop",
        description: (
            <>
                Connect your favorite editor to the design repository via <strong className="text-blue-600 dark:text-blue-400">GitHub MCP Server</strong> and generate your code for Frontend, Backend, GitOps and Infrastructure.
            </>
        ),
        icon: Code2
    },
    {
        title: "Iterate",
        description: (
            <>
                Repeat the cycle from the start, always editing <strong className="text-blue-600 dark:text-blue-400">Design First</strong> and then asking your AI-assisted editor to consult the MCP server.
            </>
        ),
        icon: Repeat
    }
]

const advantages = [
    "All development repositories generate code in harmony, consulting a single source of truth",
    "The design repository is also a documentation always up to date",
    "New developers on the team will understand the project without complications",
    "The design repository is kept clean, only Markdown, OpenAPI and AsyncAPI content that LLMs understand"
]

export function AIWorkflow() {
    return (
        <section className="py-24 bg-white dark:bg-black border-b border-gray-200 dark:border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        100% AI Workflow
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Empower your AI agents with a structured, single source of truth.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Workflow Steps */}
                    <div className="space-y-8">
                        {workflowSteps.map((step, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center border border-blue-200 dark:border-blue-500/20">
                                        <step.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    {index !== workflowSteps.length - 1 && (
                                        <div className="w-px h-full bg-gradient-to-b from-blue-200 dark:from-blue-500/20 to-transparent mx-auto mt-2 h-16" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Advantages */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-3xl blur-3xl" />
                        <div className="relative bg-gray-50 dark:bg-white/5 rounded-3xl p-8 border border-gray-200 dark:border-white/10 shadow-xl">
                            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Key Advantages</h3>
                            <div className="space-y-6">
                                {advantages.map((advantage, index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-700 dark:text-gray-300">
                                            {advantage}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
