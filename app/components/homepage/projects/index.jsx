import { projectsData } from '@/utils/data/projects-data';
import SingleProject from './single-project';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { personalData } from '@/utils/data/personal-data';

const Projects = () => {
  return (
    <div id='projects' className="relative z-10 py-20 lg:py-28">
      {/* Background orb */}
      <div className="gradient-orb w-80 h-80 bg-pink-500/10 -top-20 -left-20" />

      <div className="sticky top-10">
        <div className="flex items-center justify-start relative">
          <h2 className="section-title !gap-6">
            <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <span className="flex-1 h-[1px] ml-6 bg-gradient-to-r from-violet-500/30 to-transparent"></span>
        </div>
      </div>

      <div className="pt-16">
        <div className="grid grid-cols-12 gap-6 lg:gap-y-16">
          {[...projectsData].slice(0, 8).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky col-span-12 lg:col-span-6"
            >
              <div className="box-border flex items-center justify-center rounded-xl transition-all duration-500">
                <SingleProject project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12 lg:mt-16">
        <Link
          className="btn-premium"
          role="button"
          href={personalData.github}
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Projects;