// Import custom components and icons
import SectionTitle from '@/components/ui/SectionTitle'; // Custom section title component
import { MoveRight, ExternalLink, Github, Layers, Video } from 'lucide-react'; // Icons from lucide-react library
import { GiPolarStar } from "react-icons/gi"; // Polar star icon from react-icons

import MyBadge from '@/components/ui/MyBadge'; // Custom badge component
import projectsData from '@/data/ProjectsData.json'; // Data containing all projects info
import Section from '@/components/ui/Section';
import Card2 from '@/components/ui/Card2';
import Card from '@/components/ui/Card';

// FeaturedProjects component: displays a list of projects in a styled layout
const FeaturedProjects = () => {
  // State to track scroll position
  return (
    // Main container
    <Section 
      subtitle='My recent works'
      title="Featured Projects"
      description="A section of my most impactful work across various industries and technology"
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
                      // Radial gradient overlay on black background
                      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
                    }}
                  >
                    {/* Project Header - Desktop */}
                    <div className="hidden md:flex items-center justify-between mb-8">
                      <h1 className="text-xl font-semibold bg-gradient-to-r from-gray-300 via-purple-300 to-pink-300 bg-clip-text text-transparent opacity-60">
                        {project.description.slice(0, 120)} {/* Show first 120 chars */}
                      </h1>

                      {/* MoveRight button on hover */}
                      <div className="w-2/12 flex justify-end">
                        <a 
                          href={project.live || project.links?.live || "#"} 
                          target="_blank" 
                          rel="noreferrer"
                          className="ml-4 w-6 h-6 flex items-center justify-center group-hover:scale-125 group-hover:translate-x-3 transition-all duration-300"
                          title="Open Live App"
                        >
                          <MoveRight className="w-5 h-5 text-pink-500" />
                        </a>
                      </div>
                    </div>

                    {/* Project image */}
                    <a 
                      href={project.live || project.links?.live || "#"} 
                      target="_blank" 
                      rel="noreferrer"
                      className="block overflow-hidden rounded-2xl"
                    >
                      <img
                        src={project.image} // Image URL from project data
                        alt={project.title}
                        className="rounded-2xl shadow-inner group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 w-full object-cover"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Details Section */}
              <Card2 className="md:w-1/3 flex flex-col justify-between rounded-2xl bg-black backdrop-blur-2xl pb-6">
                <div>
                  <div className="flex items-center justify-between pb-1">
                    <h1 className="text-2xl font-semibold">{project.title}</h1>
                    {project.category && (
                      <span className="text-xs uppercase px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                        {project.category}
                      </span>
                    )}
                  </div>

                  <div>
                    <p className="text-sm md:text-base mb-3 text-gray-400 leading-relaxed" >
                      {project.description}
                    </p>

                    {/* Features List - Desktop */}
                    <ul className="text-sm mb-3 space-y-1">
                      {project.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3">
                          <GiPolarStar className="w-4 h-4 text-pink-500 shrink-0" />
                          <span className='text-gray-300'>{feature.text}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technology Badges */}
                    <div className="flex gap-1 flex-wrap opacity-80 mb-5">
                      {project.badges.map((badge, bIndex) => (
                        <MyBadge 
                          key={bIndex}
                          sm:iconKey={badge.iconKey} 
                          text={badge.text} 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Links (Live, GitHub, Figma, Video) */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-gray-800/80">
                  {(project.live || project.links?.live) && (
                    <a
                      href={project.live || project.links?.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition shadow-md shadow-blue-500/20"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}

                  {(project.github?.frontend || project.links?.githubFrontend) && (
                    <a
                      href={project.github?.frontend || project.links?.githubFrontend}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-gray-300 hover:text-white text-xs font-medium transition border border-zinc-700"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Frontend
                    </a>
                  )}

                  {(project.github?.backend || project.links?.githubBackend) && (
                    <a
                      href={project.github?.backend || project.links?.githubBackend}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-gray-300 hover:text-white text-xs font-medium transition border border-zinc-700"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Backend
                    </a>
                  )}

                  {(project.figma || project.links?.figma) && (
                    <a
                      href={project.figma || project.links?.figma}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 text-xs font-medium transition border border-purple-500/30"
                    >
                      <Layers className="w-3.5 h-3.5 text-purple-400" />
                      Figma
                    </a>
                  )}

                  {(project.video || project.links?.video) && (
                    <a
                      href={project.video || project.links?.video}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-medium transition border border-emerald-500/30"
                    >
                      <Video className="w-3.5 h-3.5 text-emerald-400" />
                      Review
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

// Export the component
export default FeaturedProjects;
