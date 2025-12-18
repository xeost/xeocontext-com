import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'

const SCREENSHOTS = [
    { src: '/images/screenshots/1-light-system-design-1.webp', alt: 'Light Mode - System Design View 1' },
    { src: '/images/screenshots/2-light-system-design-2.webp', alt: 'Light Mode - System Design View 2' },
    { src: '/images/screenshots/3-light-system-design-3.webp', alt: 'Light Mode - System Design View 3' },
    { src: '/images/screenshots/4-light-openapi.webp', alt: 'Light Mode - OpenAPI Specification' },
    { src: '/images/screenshots/5-light-asyncapi.webp', alt: 'Light Mode - AsyncAPI Specification' },
    { src: '/images/screenshots/6-dark-system-design-1.webp', alt: 'Dark Mode - System Design View 1' },
    { src: '/images/screenshots/7-dark-system-design-2.webp', alt: 'Dark Mode - System Design View 2' },
    { src: '/images/screenshots/8-dark-system-design-3.webp', alt: 'Dark Mode - System Design View 3' },
    { src: '/images/screenshots/9-dark-openapi.webp', alt: 'Dark Mode - OpenAPI Specification' },
    { src: '/images/screenshots/10-dark-asyncapi.webp', alt: 'Dark Mode - AsyncAPI Specification' },
]

interface ScreenshotsModalProps {
    isOpen: boolean
    onClose: () => void
}

export function ScreenshotsModal({ isOpen, onClose }: ScreenshotsModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    // Reset index when opening
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0)
            document.body.style.overflow = 'hidden' // Prevent scrolling background
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const nextSlide = useCallback(() => {
        setIsLoading(true)
        setCurrentIndex((prev) => (prev + 1) % SCREENSHOTS.length)
    }, [])

    const prevSlide = useCallback(() => {
        setIsLoading(true)
        setCurrentIndex((prev) => (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length)
    }, [])

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isOpen) return
        if (e.key === 'Escape') onClose()
        if (e.key === 'ArrowRight') nextSlide()
        if (e.key === 'ArrowLeft') prevSlide()
    }, [isOpen, onClose, nextSlide, prevSlide])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            {/* Main Container */}
            <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex flex-col items-center justify-center z-10">

                {/* Header / Controls */}
                <div className="absolute top-0 right-0 z-20 flex gap-4 p-4">
                    <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                        {currentIndex + 1} / {SCREENSHOTS.length}
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Carousel Content */}
                <div className="relative w-full h-full flex items-center justify-center group select-none">
                    {/* Left Arrow */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                        className="absolute left-2 md:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-white/20 border border-white/10 text-white transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-300"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Image Container */}
                    <div className="relative w-full h-full flex items-center justify-center p-2 md:p-10">
                        <div className="relative w-full h-full max-w-7xl mx-auto shadow-2xl rounded-lg overflow-hidden border border-white/10 bg-black/40">
                            <Image
                                src={SCREENSHOTS[currentIndex].src}
                                alt={SCREENSHOTS[currentIndex].alt}
                                fill
                                className={`object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                                onLoadingComplete={() => setIsLoading(false)}
                                priority
                            />

                            {/* Image Label */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-center">
                                <p className="text-white/90 font-medium text-lg">
                                    {SCREENSHOTS[currentIndex].alt}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                        className="absolute right-2 md:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-white/20 border border-white/10 text-white transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-300"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Thumbnails Indicator (Optional, but nice) */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 p-4 overflow-x-auto">
                    {SCREENSHOTS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => { setIsLoading(true); setCurrentIndex(idx); }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'
                                }`}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}
