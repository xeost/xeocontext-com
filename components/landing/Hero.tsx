import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {

    return (
        <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-[120%] overflow-hidden pointer-events-none z-[-1]">
                {/* Starry Background */}
                <div className="absolute inset-0 z-0 opacity-50">
                    {[...Array(60)].map((_, i) => (
                        <div
                            key={i}
                            className="star"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 2 + 1}px`,
                                height: `${Math.random() * 2 + 1}px`,
                                animationDuration: `${Math.random() * 10 + 20}s`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    ))}
                </div>
                <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-purple-500/30 rounded-full blur-[120px]" />
                <div className="absolute top-20 right-1/4 w-[50%] h-[50%] bg-blue-500/30 rounded-full blur-[120px]" />
            </div>


            <div className="container mx-auto px-4 text-center z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-gray-200 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none text-sm text-gray-700 dark:text-gray-300 mb-8 backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    Now available for Public Preview
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-500 mb-6 pb-2">
                    Your System Design. <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Unified.</span>
                </h1>

                {/* ... existing description ... */}
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    A Single Source of Truth for AI-assisted software development. So that different layers generate code working as a team and understanding your project.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                    <Link href="/docs" className="flex items-center gap-2 px-8 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Get Started <ArrowRight className="w-4 h-4" />
                    </Link>

                    <div className="flex items-center rounded-full border border-gray-300 dark:border-white/20 bg-white/60 dark:bg-transparent shadow-sm backdrop-blur-sm p-1">
                        <Link
                            href="https://demo.xeocontext.com"
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-white/10 transition-all font-medium text-sm"
                        >
                            View Demo <Play className="w-4 h-4" />
                        </Link>
                        <div className="w-px h-6 bg-gray-300 dark:bg-white/20 mx-1"></div>
                        <Link
                            href="https://github.com/xeost/xeocontext/tree/main/examples/markdown-openapi-asyncapi"
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-white/10 transition-all font-medium text-sm"
                        >
                            Source
                            <svg role="img" viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Mockup Placeholder */}
                <div className="relative mx-auto max-w-5xl rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 shadow-2xl backdrop-blur-sm overflow-hidden aspect-[16/9] group">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent dark:from-gray-900/50 to-transparent z-10 pointer-events-none"></div>

                    {/* Mock UI Header */}
                    <div className="h-10 border-b border-black/5 dark:border-white/10 flex items-center px-4 gap-2 bg-gray-100/50 dark:bg-gray-900/50">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400/80 dark:bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400/80 dark:bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400/80 dark:bg-green-500/50"></div>
                        </div>
                        <div className="mx-auto text-xs text-gray-400 font-medium opacity-0">XeoContext</div>
                    </div>

                    {/* Content Area with Image */}
                    <div className="relative w-full h-full bg-gray-100 dark:bg-black">
                        <Image
                            src="/images/home/home-featured-image.webp"
                            alt="XeoContext Dashboard Preview"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </div>

                <div className="mt-8 flex justify-center gap-6">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <div className="p-1 rounded-full bg-green-500/10 border border-green-500/20">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-sm font-medium">Open Source</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <div className="p-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-sm font-medium">Free Forever</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
