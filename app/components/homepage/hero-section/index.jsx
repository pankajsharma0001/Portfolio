// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import TypewriterEffect from "./TypewriterEffect";
import AnimatedCounter from "../../helper/animated-counter";
import SectionReveal from "../../helper/section-reveal";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-12 lg:py-20 min-h-[90vh]">
      {/* Floating gradient orbs */}
      <div className="gradient-orb w-72 h-72 bg-violet-600/20 top-10 -left-20 animate-float" />
      <div className="gradient-orb w-96 h-96 bg-pink-500/10 bottom-10 -right-20 animate-float-delayed" />
      <div className="gradient-orb w-48 h-48 bg-cyan-400/10 top-1/2 left-1/3 animate-pulse-glow" />

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-8 w-full relative z-10">
        <div className="lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 text-sm text-gray-400">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for opportunities
          </div>

          <h1 className="text-3xl font-display font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
            <br />
            I&apos;m{' '}
            <span className="gradient-text">{personalData.name}</span>
            <br />
            <span className="text-gray-400 text-2xl lg:text-3xl font-medium">
              <TypewriterEffect />
            </span>
          </h1>

          <div className="my-10 flex items-center gap-4">
            {[
              { href: personalData.github, icon: <BsGithub size={20} />, label: "GitHub" },
              { href: personalData.linkedIn, icon: <BsLinkedin size={20} />, label: "LinkedIn" },
              { href: personalData.facebook, icon: <FaFacebook size={20} />, label: "Facebook" },
              ...(personalData.leetcode ? [{ href: personalData.leetcode, icon: <SiLeetcode size={20} />, label: "LeetCode" }] : []),
              { href: personalData.twitter, icon: <FaTwitterSquare size={20} />, label: "Twitter" },
            ].map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="group/social flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-violet-500/50 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
              >
                {social.icon}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="#contact" className="btn-outline-premium">
              <span>Contact me</span>
              <RiContactsFill size={16} />
            </Link>
            <Link
              className="btn-premium"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Code block */}
        <div className="lg:order-2 relative animate-fade-in">
          <div className="glass-card overflow-hidden hover:border-violet-500/30 transition-colors duration-500">
            <div className="flex items-center gap-2 px-4 lg:px-6 py-4 border-b border-white/5">
              <div className="h-3 w-3 rounded-full bg-red-400/80"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400/80"></div>
              <div className="h-3 w-3 rounded-full bg-green-400/80"></div>
              <span className="ml-3 text-xs text-gray-500 font-mono">developer.js</span>
            </div>
            <div className="px-4 lg:px-6 py-5 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed">
                <div className="blink">
                  <span className="text-violet-400">const</span>
                  <span className="mx-2 text-white">coder</span>
                  <span className="text-violet-400">=</span>
                  <span className="ml-2 text-gray-400">{'{'}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 text-cyan-300">name:</span>
                  <span className="ml-2 text-amber-300">&apos;{personalData.name}&apos;</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 text-cyan-300">skills:</span>
                  <span className="ml-2 text-gray-400">[</span>
                  <span className="text-amber-300">&apos;C++&apos;</span>
                  <span className="text-gray-500">, </span>
                  <span className="text-amber-300">&apos;Python&apos;</span>
                  <span className="text-gray-500">, </span>
                  <span className="text-amber-300">&apos;Next.js&apos;</span>
                  <span className="text-gray-500">, </span>
                  <span className="text-amber-300">&apos;MongoDB&apos;</span>
                  <span className="text-gray-400">]</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 text-cyan-300">hardWorker:</span>
                  <span className="ml-2 text-orange-400">true</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 text-cyan-300">quickLearner:</span>
                  <span className="ml-2 text-orange-400">true</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 text-cyan-300">problemSolver:</span>
                  <span className="ml-2 text-orange-400">true</span>
                  <span className="text-gray-500">,</span>
                </div>
                <div className="mt-2">
                  <span className="ml-4 lg:ml-8 text-green-400">hireable:</span>
                  <span className="ml-2 text-violet-400">function</span>
                  <span className="text-gray-400">{'() {'}</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 text-violet-400">return</span>
                  <span className="ml-2 text-gray-400">(</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-pink-400">this.</span>
                  <span className="text-white">hardWorker</span>
                  <span className="ml-2 text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-pink-400">this.</span>
                  <span className="text-white">problemSolver</span>
                  <span className="ml-2 text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-pink-400">this.</span>
                  <span className="text-white">skills.length</span>
                  <span className="mx-2 text-amber-300">&gt;=</span>
                  <span className="text-orange-400">5</span>
                </div>
                <div><span className="ml-8 lg:ml-16 text-gray-400">);</span></div>
                <div><span className="ml-4 lg:ml-8 text-gray-400">{'}'}</span></div>
                <div><span className="text-gray-400">{'};'}</span></div>
              </code>
            </div>
          </div>
          {/* Decorative glow behind code block */}
          <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/10 via-pink-500/10 to-cyan-400/10 rounded-3xl blur-2xl -z-10" />
        </div>
      </div>

      {/* Stats counters row */}
      <SectionReveal className="w-full relative z-10 mt-16" delay={300}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { end: 8, suffix: "+", label: "Projects" },
            { end: 14, suffix: "+", label: "Skills" },
            { end: 3, suffix: "+", label: "Years Coding" },
            { end: 100, suffix: "%", label: "Passion" },
          ].map((stat, idx) => (
            <div key={idx} className="glass-card p-6 hover:border-violet-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-violet-500/5">
              <AnimatedCounter end={stat.end} suffix={stat.suffix} label={stat.label} />
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

export default HeroSection;