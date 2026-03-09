// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import SectionReveal from "../../helper/section-reveal";
import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";

const HIGHLIGHTS = [
  { icon: <FaCode size={20} />, title: "Clean Code", desc: "Writing maintainable & scalable code" },
  { icon: <FaLaptopCode size={20} />, title: "Full Stack", desc: "Frontend to backend development" },
  { icon: <HiLightningBolt size={20} />, title: "Fast Learner", desc: "Quick to pick up new technologies" },
  { icon: <FaGraduationCap size={20} />, title: "CS Student", desc: "Bachelor's in Computer Engineering" },
];

function AboutSection() {
  return (
    <div id="about" className="relative py-20 lg:py-28">
      {/* Background orb */}
      <div className="gradient-orb w-64 h-64 bg-violet-600/10 -top-10 right-0" />

      <SectionReveal>
        <div className="flex justify-center mb-12">
          <h2 className="section-title">
            <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent font-display">
              About Me
            </span>
          </h2>
        </div>
      </SectionReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <SectionReveal className="order-2 lg:order-1 space-y-6" delay={100}>
          <div className="glass-card p-8 hover:border-violet-500/20 transition-colors duration-500">
            <p className="text-lg font-display font-medium mb-3 gradient-text inline-block">
              Who I am?
            </p>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
              {personalData.description}
            </p>
          </div>

          {/* Highlight grid */}
          <div className="grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="glass-card p-4 group hover:border-violet-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-violet-500/5">
                <div className="text-violet-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <p className="text-white text-sm font-semibold mb-1">{item.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="flex justify-center order-1 lg:order-2" delay={200}>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-50 blur-xl transition-all duration-700" />
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-500 rounded-2xl opacity-30 group-hover:opacity-60 blur-lg transition-all duration-500" />
            <Image
              src={personalData.profile}
              width={320}
              height={320}
              alt={`${personalData.name}'s profile picture`}
              className="relative rounded-2xl transition-all duration-700 grayscale hover:grayscale-0 hover:scale-[1.03] cursor-pointer object-cover border border-white/10"
            />
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}

export default AboutSection;