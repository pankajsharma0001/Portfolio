// @flow strict
import { educations } from "@/utils/data/educations";
import GlowCard from "../../helper/glow-card";
import lottieFile from '/public/lottie/study.json';
import dynamic from "next/dynamic";
import { BiSolidGraduation } from "react-icons/bi";

const AnimationLottie = dynamic(() => import('../../helper/animation-lottie'), { loading: () => null, ssr: false });

function Education() {
  return (
    <div id="education" className="relative z-10 py-20 lg:py-28">
      {/* Section divider */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-8 lg:py-8">
        <h2 className="section-title">
          <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {educations.map(education => (
                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                  <div className="p-5 relative text-white">
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-accent font-medium tracking-wide">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-6 px-3 py-5">
                      <div className="text-violet-400 transition-all duration-300 hover:scale-110 flex-shrink-0">
                        <BiSolidGraduation size={32} />
                      </div>
                      <div>
                        <p className="text-base sm:text-lg mb-1 font-semibold">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base text-gray-400">{education.institution}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{education.location}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;