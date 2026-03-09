// @flow strict
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { personalData } from '@/utils/data/personal-data';

function Footer() {
  return (
    <div className="relative border-t bg-[#0a0e1a] border-white/5 text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 lg:py-12">
        {/* Top gradient line */}
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Portfolio of{' '}
            <Link target="_blank" href={personalData.linkedIn} className="gradient-text font-medium hover:opacity-80 transition-opacity">
              {personalData.name}
            </Link>
          </p>

          <div className="flex items-center gap-6">
            <Link
              target="_blank"
              href={personalData.linkedIn}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 no-underline"
            >
              <BsLinkedin size={16} />
              <span>{`Let's Connect`}</span>
            </Link>
            <Link
              target="_blank"
              href={personalData.github}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 no-underline"
            >
              <BsGithub size={16} />
              <span>Github</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;