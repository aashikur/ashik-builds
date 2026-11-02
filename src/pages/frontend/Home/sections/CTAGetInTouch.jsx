// src/components/CTAGetInTouch.jsx
import Section from '@/components/ui/Section';
import { ArrowRight } from 'lucide-react';
import React, { useRef, useState } from 'react';

/**
 * MagneticButton Component
 * A button where the inner content follows the cursor's position,
 * creating a "magnetic" effect.
 */
const MagneticButton = ({ children }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            setPosition({ x, y });
        }
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative inline-flex items-center justify-center rounded-full bg-slate-800 px-10 py-4 text-lg font-bold text-white transition-colors duration-300 hover:bg-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white"
        >
            <span
                style={{ transform: `translate(${x * 0.1}px, ${y * 0.1}px)` }}
                className="absolute inset-0 z-0 scale-0 rounded-full bg-white opacity-0 transition-transform duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 dark:bg-slate-900"
            ></span>
            <span
                style={{ transform: `translate(${x * 0.15}px, ${y * 0.15}px)` }}
                className="relative z-10 flex items-center gap-3 transition-transform duration-300 ease-out"
            >
                {children[0]} {/* Text */}
                <span
                    style={{ transform: `translate(${x * 0.2}px, ${y * 0.2}px)` }}
                    className="flex items-center justify-center rounded-full bg-white p-3 transition-transform duration-300 ease-out dark:bg-slate-900"
                >
                    {children[1]} {/* Icon */}
                </span>
            </span>
        </button>
    );
};

/**
 * CTAGetInTouch Component
 * A modern, engaging Call-to-Action section.
 */
const CTAGetInTouch = () => {
    return (
        <Section id='contactSection' className="scroll-mt-20 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-y-8">
                    <img
                        className="h-16 w-16 rounded-full object-cover shadow-lg border border-white/20"
                        src="/assets/images/me.jpg"
                        alt="Ashikur Rahaman"
                    />

                    <div className="flex flex-col gap-y-4">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                            Turn Your Idea into a Startup.
                        </h1>
                        <h2 className="text-2xl font-semibold tracking-tight text-indigo-600 dark:text-indigo-400">
                            Let's Build It, Together.
                        </h2>
                    </div>

                    <p className="max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
                        I'm available for full-time roles and freelance projects. I thrive on crafting dynamic web applications and delivering seamless user experiences.
                    </p>

                    <div className="mt-6">
                       <a target='_blank' rel='noreferrer' className='cursor-pointer' href="https://wa.me/+08801580563883">
                         <MagneticButton className="group">
                            <span className='z-10 group-hover:text-white'>GET IN TOUCH</span>
                            <ArrowRight className="text-gray-900 transition-transform duration-300 group-hover:rotate-[-30deg] dark:text-white" size={24} />
                        </MagneticButton>
                       </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default CTAGetInTouch;
