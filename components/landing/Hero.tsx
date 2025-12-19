import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Image as ImageIcon } from 'lucide-react'
import { ScreenshotsModal } from './ScreenshotsModal'

export function Hero() {
    const [isScreenshotsOpen, setIsScreenshotsOpen] = useState(false)

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

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Link href="/docs" className="flex items-center gap-2 px-8 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                        onClick={() => setIsScreenshotsOpen(true)}
                        className="flex items-center gap-2 px-8 py-3 rounded-full border border-gray-300 bg-white/60 text-gray-700 hover:bg-white/80 shadow-sm backdrop-blur-sm dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:shadow-none transition-all"
                    >
                        View Screenshots <ImageIcon className="w-4 h-4" />
                    </button>
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

            <ScreenshotsModal
                isOpen={isScreenshotsOpen}
                onClose={() => setIsScreenshotsOpen(false)}
            />
        </section>
    )
}
