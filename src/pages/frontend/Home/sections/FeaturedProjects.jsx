// Import custom components and icons
import React from 'react';
import { Link } from 'react-router';
import SectionTitle from '@/components/ui/SectionTitle';
import { MoveRight, ExternalLink, Github, Layers, Video, BookOpen } from 'lucide-react';
import { GiPolarStar } from "react-icons/gi";

import MyBadge from '@/components/ui/MyBadge';
import projectsData from '@/data/ProjectsData.json';
import Section from '@/components/ui/Section';
import Card2 from '@/components/ui/Card2';

// FeaturedProjects component: displays a list of projects in a styled layout
const FeaturedProjects = () => {
  return (
    <Section 
      subtitle='Selected Case Studies'
      title="Featured Engineering Work"
      description="Production web applications, headless commerce systems, and offline-first progressive web apps"
      id="projectsSection" 
      className='scroll-mt-20'
    >
      {/* Map over projects data and display each project */}
      {
        projectsData?.map((project, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row my-10 group">
              {/* Project Image Section */}
              <div className="w-full md:w-2/3 md:pr-10">
                <div className="rounded-2xl border border-white/10 bg-gray-100/10 backdrop-blur-2xl p-1.5">
                  <div
                    className="rounded-2xl md:p-10"
                    style={{
                      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
                    }}
                  >
                    {/* Project Header - Desktop */}
                    <div className="hidden md:flex items-center justify-between mb-8">
                      <h1 className="text-xl font-semibold bg-gradient-to-r from-gray-300 via-purple-300 to-pink-300 bg-clip-text text-transparent opacity-80">
                        {project.tagline || project.description.slice(0, 110)}
                      </h1>

                      {/* MoveRight button on hover -> links to case study */}
                      <div className="w-2/12 flex justify-end">
                        <Link 
                          to={`/projects/${project.slug || project.id}`}
                          className="ml-4 w-6 h-6 flex items-center justify-center group-hover:scale-125 group-hover:translate-x-3 transition-all duration-300"
                          title="View Case Study"
                        >
                          <MoveRight className="w-5 h-5 text-pink-500" />
                        </Link>
                      </div>
                    </div>

                    {/* Project image -> links to case study */}
                    <Link 
                      to={`/projects/${project.slug || project.id}`}
                      className="block overflow-hidden rounded-2xl"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-2xl shadow-inner group-hover:scale-105 group-hover:rotate-0.5 transition-all duration-300 w-full object-cover"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project Details Section */}
              <Card2 className="md:w-1/3 flex flex-col justify-between rounded-2xl bg-black backdrop-blur-2xl pb-6">
                <div>
                  <div className="flex items-center justify-between pb-1">
                    <Link to={`/projects/${project.slug || project.id}`}>
                      <h1 className="text-2xl font-bold hover:text-blue-400 transition">
                        {project.title}
                      </h1>
                    </Link>
                    {project.category && (
                      <span className="text-[11px] uppercase px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                        {project.category.split('·')[0]}
                      </span>
                    )}
                  </div>

                  <div>
                    <p className="text-sm md:text-base mb-3 text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features List */}
                    <ul className="text-sm mb-4 space-y-1.5">
                      {project.features?.slice(0, 3).map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2.5">
                          <GiPolarStar className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                          <span className='text-gray-300 text-xs sm:text-sm leading-snug'>{feature.text}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technology Badges */}
                    <div className="flex gap-1.5 flex-wrap opacity-90 mb-5">
                      {project.badges?.slice(0, 6).map((badge, bIndex) => (
                        <MyBadge 
                          key={bIndex}
                          iconKey={badge.iconKey} 
                          text={badge.text} 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Links (Live, Case Study, GitHub, Figma, Video) */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-gray-800/80">
                  {/* Case Study Detail Link */}
                  <Link
                    to={`/projects/${project.slug || project.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition border border-white/20"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    Case Study
                  </Link>

                  {/* Live Demo Link */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition shadow-md shadow-blue-500/20"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}

                  {/* GitHub Repos */}
                  {project.github?.frontend && (
                    <a
                      href={project.github.frontend}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-gray-300 hover:text-white text-xs font-medium transition border border-zinc-700"
                      title="Frontend Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Client
                    </a>
                  )}

                  {project.github?.backend && (
                    <a
                      href={project.github.backend}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-gray-300 hover:text-white text-xs font-medium transition border border-zinc-700"
                      title="Backend Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Server
                    </a>
                  )}
                </div>
              </Card2>
            </div>
          </div>
        ))
      }
    </Section>
  );
};

export default FeaturedProjects;
