// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function SkillCard({ skill }) {
  return (
    <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-xl group relative hover:scale-110 cursor-pointer">
      <div className="h-full w-full rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm group-hover:border-violet-500/50 group-hover:bg-white/[0.05] transition-all duration-500">
        <div className="flex -translate-y-[1px] justify-center">
          <div className="w-3/4">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-6">
          <div className="h-8 sm:h-10">
            <Image
              src={skillsImage(skill)?.src}
              alt={skill}
              width={40}
              height={40}
              className="h-full w-auto rounded-lg"
            />
          </div>
          <p className="text-gray-300 group-hover:text-white text-sm sm:text-lg transition-colors" style={{ textWrap: "nowrap" }}>
            {skill}
          </p>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  const midpoint = Math.floor((skillsData.length - 1) / 2);

  return (
    <div id="skills" className="relative z-10 py-20 lg:py-28">
      {/* Background */}
      <div className="gradient-orb w-48 h-48 bg-violet-100/10 top-6 left-[42%]" />

      {/* Section divider */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-8 lg:py-8">
        <h2 className="section-title">
          <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
      </div>

      <div className="w-full my-8 space-y-4">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.slice(midpoint).map((skill, id) => (
            <SkillCard key={id} skill={skill} />
          ))}
        </Marquee>

        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
          {skillsData.slice(0, midpoint).map((skill, id) => (
            <SkillCard key={id} skill={skill} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;