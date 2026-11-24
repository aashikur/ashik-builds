"use client";

import Button from "@/components/ui/Button";
import { Download } from "lucide-react";
import React from "react";

// const Button = ({ children, variant = "primary", className = "" }) => {
//   const baseClasses =
//     "px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105";
//   const variants = {
//     primary:
//       "bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 focus:ring-gray-900 dark:focus:ring-gray-300",
//     secondary:
//       "bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 focus:ring-gray-300 dark:focus:ring-gray-600 shadow-sm border border-gray-200 dark:border-gray-700",
//   };
//   return (
//     <button className={`${baseClasses} ${variants[variant]} ${className}`}>
//       {children}
//     </button>
//   );
// };
const DotIcon = () => <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="4" cy="4" r="4" fill="currentColor" />
</svg>;


const HeroContent = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10  py-16 sm:py-24 px-4">
        <div className="max-w-4xl text-center sm:text-left">
          <span className="inline-block px-4 mt-5 py-1.5 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-100 dark:bg-blue-900/30 rounded-full">
            Welcome to my universe
          </span>
          <h1 className="mt-3  sm:mt-6 font-bold text-5xl sm:text-5xl lg:text-7xl  tracking-tight  text-gray-900 dark:text-white leading-14 sm:leading-tight max-w-xl">
           Full-Stack <br/><span className="font-bold"> Developer</span> & <br/><span className="text-blue-500 font-bold">Creative {' '}</span> 
            Coder
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300 opacity-80 leading-relaxed">
            I engineer high-performance web applications with Next.js, React, and Node.js — focusing on resilient backend architecture, database optimization, and scalable headless platforms.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-start gap-4">
         <a href="#contactSection">
             <Button variant="primary" className="w-full sm:w-auto">
              Let's Connect
            </Button>
         </a>
           <a 
           href="/AshikurRahamanResume.pdf"
           target="_blank"
           download="Ashikur_Resume.pdf"
           >
             <Button variant="outline" className="w-full sm:w-auto">
              Get Resume <Download className="w-4 h-4 ml-2" />
            </Button>
           </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
