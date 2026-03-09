/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { FaCode, FaPlay } from "react-icons/fa";
import { skillsImage } from "@/utils/skill-image";
import ProjectsImages from "./projects-images";

const SingleProject = ({ project }) => {
	const { name, description, tools, code, demo, images } = project;

	return (
		<div className="w-full h-fit flex flex-col relative cursor-text overflow-hidden glass-card group">
			{/* Top gradient line */}
			<div className="flex flex-row w-full">
				<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500/60 to-pink-500/60"></div>
				<div className="h-[1px] w-full bg-gradient-to-r from-pink-500/60 to-transparent"></div>
			</div>

			{/* Project title */}
			<h2 className="text-center py-4 text-accent font-semibold text-xl tracking-wide">
				{name}
			</h2>

			{/* Image carousel */}
			<div className="w-full flex justify-center z-10 aspect-video overflow-hidden px-4">
				<ProjectsImages images={images} alt={`${name} image`} />
			</div>

			{/* Description overlay on hover */}
			<p className="absolute w-[calc(100%-40px)] sm:w-[80%] md:min-h-[150px] translate-x-[-110%] transition-transform duration-700 p-6 leading-relaxed rounded-r-2xl left-0 top-1/2 bg-[#0f0b24]/95 backdrop-blur-sm text-gray-300 translate-y-[-50%] group-hover:translate-x-[-2%] text-xs vsm:text-sm sm:text-base border border-l-0 border-white/10">
				{description}
			</p>

			{/* Tech stack overlay */}
			<div className="group-hover:translate-x-0 absolute sm:w-[21%] text-[0.8rem] flex justify-center gap-2 flex-col translate-x-full transition-transform duration-500 group-hover:delay-[0.5s] p-[0.3rem] sm:p-3 rounded-l-xl right-0 bottom-[4rem] border border-r-0 border-white/10 bg-[#0f0b24]/90 backdrop-blur-sm text-gray-300">
				{tools.map((tool, id) => (
					<div
						className="font-medium break-words text-xs flex gap-2 justify-center sm:justify-start items-center"
						key={id}
					>
						<img
							src={skillsImage(tool)?.src}
							alt={tool}
							title={tool}
							className="max-h-[20px] w-[18px] sm:w-[22px] vsm:w-[35px] object-contain"
						/>
						<span className="hidden sm:block text-gray-400" style={{ textWrap: "nowrap" }}>
							{tool}
						</span>
					</div>
				))}
			</div>

			{/* Action buttons */}
			<div className="flex items-center justify-evenly w-full mt-3 py-4 px-3 md:px-8 bg-white/[0.02] border-t border-white/5">
				<div className="flex flex-row items-center gap-3 text-sm font-medium text-gray-400">
					Demo
					<Link
						href={demo}
						target="_blank"
						className="flex justify-center items-center w-10 h-10 rounded-full border border-white/10 text-gray-300 transition-all duration-300 hover:bg-violet-500/20 hover:text-violet-400 hover:border-violet-500/50 hover:scale-110 no-underline"
					>
						<FaPlay size={12} />
					</Link>
				</div>
				<div className="flex flex-row items-center gap-3 text-sm font-medium text-gray-400">
					Code
					<Link
						href={code}
						target="_blank"
						className="flex justify-center items-center w-10 h-10 rounded-full border border-white/10 text-gray-300 transition-all duration-300 hover:bg-pink-500/20 hover:text-pink-400 hover:border-pink-500/50 hover:scale-110 no-underline"
					>
						<FaCode />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SingleProject;
