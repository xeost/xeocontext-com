import Link from 'next/link'
import { ArrowRight, PlayCircle } from 'lucide-react'

export function Hero() {
    return (
        <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-[-1]">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[100px]" />
                <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 text-center z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    Now available for Public Preview
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 mb-6 pb-2">
                    Your Architecture. <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Unified.</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    The specific home for your System Design, OpenAPI, and AsyncAPI.
                    Visualize your entire stack context in one beautiful, static interface.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Link href="/docs" className="flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a href="#" className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                        View Demo <PlayCircle className="w-4 h-4" />
                    </a>
                </div>

                {/* Mockup Placeholder */}
                <div className="relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-black/50 shadow-2xl backdrop-blur-sm overflow-hidden aspect-[16/9] group">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-10"></div>

                    {/* Mock UI Header */}
                    <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-gray-900/50">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="mx-auto text-xs text-gray-500 font-mono">xeocontext://local</div>
                    </div>

                    {/* Mock Content Area */}
                    <div className="p-8 flex items-center justify-center h-full">
                        <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                                <span className="text-4xl">XA</span>
                            </div>
                            <p className="text-gray-500 text-sm">Dashboard Placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
