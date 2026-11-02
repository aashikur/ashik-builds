// Import custom components and icons
import SectionTitle from '@/components/ui/SectionTitle'; // Custom section title component
import { MoveRight } from 'lucide-react'; // Icons from lucide-react library
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
            <div className="flex flex-col md:flex-row my-10 group cursor-pointer">
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
                      <div className="w-2/12">
                        <button className="ml-4 w-4 group-hover:scale-125 group-hover:translate-x-5 transition-all duration-300">
                          <MoveRight className="w-5 h-5 text-pink-500" />
                        </button>
                      </div>
                    </div>

                    {/* Project image */}
                    <img
                      src={project.image} // Image URL from project data
                      alt={project.title}
                      className="rounded-2xl shadow-inner group-hover:scale-105 group-hover:rotate-1 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details Section */}
              <Card2 className="md:w-1/3 flex flex-col justify-center rounded-2xl bg-black backdrop-blur-2xl pb-6">
                <div className="">
                  <h1 className="text-2xl font-semibold pb-1">{project.title}</h1>
                </div>

                <div className="">
                  <p className="text-sm md:text-base mb-3 text-gray-400 leading-relaxed" >
                    {project.description}
                  </p>

                  {/* Features List - Desktop */}
                  <ul className="text-sm mb-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 mb-1">
                        <GiPolarStar className="w-5 h-5 text-pink-500" />
                        <span className=''>{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Badges */}
                  <div className="flex gap-1 flex-wrap opacity-70">
                    {project.badges.map((badge, index) => (
                      <MyBadge 
                        key={index}
                        sm:iconKey={badge.iconKey} 
                        text={badge.text} 
                      />
                    ))}
                  </div>
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
