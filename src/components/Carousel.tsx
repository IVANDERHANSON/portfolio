import { useEffect, useRef, useState } from "react";

import { Image } from "../interfaces/Interfaces";

import MicrosoftAIOverview from '../assets/sections/AboutMe/Microsoft AI Overview.png'
import MicrosoftComputerVision from '../assets/sections/AboutMe/Microsoft Computer Vision.png'
import MicrosoftDocumentIntelligenceandKnowledgeMining from '../assets/sections/AboutMe/Microsoft Document Intelligence and Knowledge Mining.png'
import MicrosoftGenerativeAI from '../assets/sections/AboutMe/Microsoft Generative AI.png'
import MicrosoftNaturalLanguageProcessing from '../assets/sections/AboutMe/Microsoft Natural Language Processing.png'
import AdvancedSQL from '../assets/sections/AboutMe/SQL (Advanced).png'
import IntroductiontoHTML from '../assets/sections/AboutMe/Introduction to HTML.jpg'
import IntroductiontoCSS from '../assets/sections/AboutMe/Introduction to CSS.jpg'
import JavaScriptIntermediate from '../assets/sections/AboutMe/JavaScript Intermediate.jpg'
import PHP from '../assets/sections/AboutMe/PHP.jpg'
import IntroductiontoCSharp from '../assets/sections/AboutMe/Introduction to C Sharp.jpg'
import IntroductiontoPython from '../assets/sections/AboutMe/Introduction to Python.jpg'
import CIntermediate from '../assets/sections/AboutMe/C Intermediate.jpg'

const slides: Image[] = [
    {
        Source: MicrosoftAIOverview,
        Alternative: 'Microsoft Azure AI Fundamentals - AI Overview'
    },
    {
        Source: MicrosoftComputerVision,
        Alternative: 'Microsoft Azure AI Fundamentals - Computer Vision'
    },
    {
        Source: MicrosoftDocumentIntelligenceandKnowledgeMining,
        Alternative: 'Microsoft Azure AI Fundamentals - Document Intelligence and Knowledge Mining'
    },
    {
        Source: MicrosoftGenerativeAI,
        Alternative: 'Microsoft Azure AI Fundamentals - Generative AI'
    },
    {
        Source: MicrosoftNaturalLanguageProcessing,
        Alternative: 'Microsoft Azure AI Fundamentals - Natural Language Processing'
    },
    {
        Source: AdvancedSQL,
        Alternative: 'SQL (Advanced)'
    },
    {
        Source: IntroductiontoHTML,
        Alternative: 'Introduction to HTML'
    },
    {
        Source: IntroductiontoCSS,
        Alternative: 'Introduction to CSS'
    },
    {
        Source: JavaScriptIntermediate,
        Alternative: 'JavaScript Intermediate'
    },
    {
        Source: PHP,
        Alternative: 'PHP'
    },
    {
        Source: IntroductiontoCSharp,
        Alternative: 'Introduction to C#'
    },
    {
        Source: IntroductiontoPython,
        Alternative: 'Introduction to Python'
    },
    {
        Source: CIntermediate,
        Alternative: 'C Intermediate'
    },
];

export default function Carousel() {
    const [current, setCurrent] = useState(0);
    const thumbContainerRef = useRef<HTMLDivElement>(null);
    const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const touchStartX = useRef<number | null>(null);
    const isDragging = useRef(false);
    const dragStartX = useRef(0);
    const scrollStartX = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const container = thumbContainerRef.current;
        const currentThumb = thumbRefs.current[current];

        if (container && currentThumb) {
            const scrollOffset =
                currentThumb.offsetLeft -
                container.offsetWidth / 2 +
                currentThumb.offsetWidth / 2;

            container.scrollTo({
                left: scrollOffset,
                behavior: "smooth",
            });
        }
    }, [current]);

    const goToSlide = (index: number) => {
        if (index >= 0 && index < slides.length) {
            setCurrent(index);
        }
    };

    const nextSlide = () => goToSlide((current + 1) % slides.length);
    const prevSlide = () => goToSlide((current - 1 + slides.length) % slides.length);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const delta = touchEndX - touchStartX.current;

        if (delta > 50) {
            thumbContainerRef.current?.scrollBy({ left: -100, behavior: "smooth" });
        } else if (delta < -50) {
            thumbContainerRef.current?.scrollBy({ left: 100, behavior: "smooth" });
        }

        touchStartX.current = null;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        dragStartX.current = e.clientX;
        scrollStartX.current = thumbContainerRef.current?.scrollLeft || 0;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !thumbContainerRef.current) return;
        const dx = e.clientX - dragStartX.current;
        thumbContainerRef.current.scrollLeft = scrollStartX.current - dx;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    return (
        <div className="w-full max-w-5xl mx-auto p-4 space-y-4">
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3 text-left bg-gray-100 p-4 rounded-xl shadow">
                    <h2 className="text-2xl font-bold">{slides[current].Alternative}</h2>
                    <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, libero!</p>
                </div>

                <div className="relative w-full md:w-2/3">
                    <img
                        src={slides[current].Source}
                        alt={slides[current].Alternative}
                        className="rounded-2xl w-full h-64 object-cover shadow-md"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between gap-4">
                <button
                    onClick={prevSlide}
                    className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                    title="Previous"
                >
                    &lt;
                </button>

                <div
                    ref={thumbContainerRef}
                    className="flex overflow-x-auto gap-4 flex-1 px-1 scrollbar-none cursor-grab"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            ref={
                                ((el) => {
                                    thumbRefs.current[index] = el;
                                }) as React.RefCallback<HTMLButtonElement>
                            }
                            onClick={() => goToSlide(index)}
                            className={`flex-shrink-0 border-2 rounded-lg transition-transform hover:scale-105 hover:border-transparent ${current === index ? "border-blue-500" : "border-transparent"
                                }`}
                        >
                            <img
                                src={slide.Source}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-28 h-16 object-cover rounded-md select-none"
                                title="View Project"
                                draggable={false}
                            />
                        </button>
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                    title="Next"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}
