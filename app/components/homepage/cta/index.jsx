import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { FaArrowRight } from "react-icons/fa";

function CTASection() {
    return (
        <div className="relative py-20 lg:py-28">
            <div className="relative overflow-hidden rounded-3xl">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-pink-500/10 to-cyan-400/10" />

                <div className="absolute inset-[1px] rounded-3xl bg-[#0d1224]/80" />

                {/* Gradient border */}
                <div className="absolute inset-0 rounded-3xl p-[1px]">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/30 via-pink-500/20 to-transparent" style={{
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'xor',
                        WebkitMaskComposite: 'xor',
                        padding: '1px',
                    }} />
                </div>

                <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        Let&apos;s Build Something
                        <span className="gradient-text block mt-1">Amazing Together</span>
                    </h2>
                    <p className="text-gray-400 max-w-lg mb-8 text-sm md:text-base">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="#contact" className="btn-premium">
                            <span>Get In Touch</span>
                            <FaArrowRight size={14} />
                        </Link>
                        <Link
                            href={personalData.github}
                            target="_blank"
                            className="btn-outline-premium"
                        >
                            <span>View My Work</span>
                            <FaArrowRight size={14} />
                        </Link>
                    </div>
                </div>

                {/* Orbs */}
                <div className="gradient-orb w-40 h-40 bg-violet-500/20 -top-10 -left-10" />
                <div className="gradient-orb w-32 h-32 bg-pink-500/15 -bottom-10 -right-10" />
            </div>
        </div>
    );
}

export default CTASection;
