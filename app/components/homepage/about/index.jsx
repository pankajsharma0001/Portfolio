// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="relative py-20 lg:py-28">
      {/* Background orb */}
      <div className="gradient-orb w-64 h-64 bg-violet-600/10 -top-10 right-0" />

      <div className="flex justify-center mb-12">
        <h2 className="section-title">
          <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 space-y-6">
          <div className="glass-card p-8">
            <p className="text-lg font-medium mb-3 gradient-text inline-block">
              Who I am?
            </p>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
              {personalData.description}
            </p>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-500 rounded-2xl opacity-30 group-hover:opacity-60 blur-lg transition-all duration-500" />
            <Image
              src={personalData.profile}
              width={300}
              height={300}
              alt={`${personalData.name}'s profile picture`}
              className="relative rounded-2xl transition-all duration-700 grayscale hover:grayscale-0 hover:scale-[1.03] cursor-pointer object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;