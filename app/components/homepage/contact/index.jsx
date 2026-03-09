// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import lottieFile from "/public/lottie/contact.json";
import dynamic from "next/dynamic";
import { contactsData } from "@/utils/data/contactsData";

const AnimationLottie = dynamic(() => import('../../helper/animation-lottie'), { loading: () => null, ssr: false });

function ContactSection() {
	return (
		<div id="contact" className="relative py-20 lg:py-28 text-white">
			{/* Background orb */}
			<div className="gradient-orb w-64 h-64 bg-cyan-400/8 bottom-0 right-0" />

			<div className="flex justify-center mb-12">
				<h2 className="section-title">
					<span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
						Contact
					</span>
				</h2>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
				<div className="hidden vsm:block">
					<AnimationLottie animationPath={lottieFile} />
				</div>

				<div className="lg:w-3/4">
					<div className="glass-card p-8 space-y-6">
						<p className="text-sm md:text-lg flex items-center gap-4">
							<MdAlternateEmail
								className="bg-white/10 p-2 rounded-full hover:bg-accent/20 hover:text-accent hover:scale-110 transition-all duration-300 text-gray-300 cursor-pointer flex-shrink-0"
								size={36}
							/>
							<a href={`mailto:${contactsData.email}`} className="hover:text-accent transition-colors">
								{contactsData.email}
							</a>
						</p>
						{contactsData.phone && (
							<p className="text-sm md:text-lg flex items-center gap-4">
								<IoMdCall
									className="bg-white/10 p-2 rounded-full hover:bg-accent/20 hover:text-accent hover:scale-110 transition-all duration-300 text-gray-300 cursor-pointer flex-shrink-0"
									size={36}
								/>
								<span>{contactsData.phone}</span>
							</p>
						)}
						<p className="text-sm md:text-lg flex items-center gap-4">
							<CiLocationOn
								className="bg-white/10 p-2 rounded-full hover:bg-accent/20 hover:text-accent hover:scale-110 transition-all duration-300 text-gray-300 cursor-pointer flex-shrink-0"
								size={36}
							/>
							<span>{personalData.address}</span>
						</p>
					</div>

					<div className="mt-10 flex items-center gap-4">
						{[
							{ href: personalData.github, icon: <IoLogoGithub size={22} /> },
							{ href: personalData.linkedIn, icon: <BiLogoLinkedin size={22} /> },
							{ href: personalData.twitter, icon: <FaXTwitter size={20} /> },
							{ href: personalData.facebook, icon: <FaFacebook size={20} /> },
						].map((social, idx) => (
							<Link key={idx} target="_blank" href={social.href}>
								<div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-violet-500/50 hover:scale-110 transition-all duration-300 cursor-pointer">
									{social.icon}
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactSection;
