import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import GlowCard from "../helper/glow-card";
import SectionTitle from "../helper/section-title";
import ProjectCard from "./project-card";

const Projects = ({ projects, profile }) => {
  return (
    <div
      id="projects"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <SectionTitle title="Git Projects" />

      <div className="grid py-12 grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {projects.map((project) => (
          <GlowCard key={project.id} identifier={`project-${project.id}`}>
            <ProjectCard project={project} />
          </GlowCard>
        ))}
      </div>

      <div className="w-full justify-center flex items-center">
        <Link
          href={profile.html_url + "?tab=repositories"}
          target="_blank"
          className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
        >
          <button className="flex items-center text-center gap-1 px-3 rounded-full border-none font-medium no-underline tracking-wider text-xs hover:px-6 py-2 md:px-4 md:py-2.5 bg-[#0d1224] text-[#ffff] md:font-semibold hover:gap-3 transition-all duration-300 uppercase">
            <span>View All Projects</span>
            <FaLongArrowAltRight size={16} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
