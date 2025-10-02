"use client";

import { useTranslations } from "next-intl";
import Image from "next/image"; 

import xLogo from "@/public/images/X_logo.png"; 
import inLogo from "@/public/images/In_logo.png"; 

export default function SocialsSection() {
  const t = useTranslations();

  return (
    <section
      id="socials"
      className="mx-auto max-w-6xl px-8 md:px-4 py-6 md:py-8"
    >
      <h2 className="text-2xl md:text-3xl font-semibold">
        {t("Socials.title")}
      </h2>
      
      <div className="mt-8 flex gap-12 pl-8 md:pl-24">

        {/* X (Twitter) Icon Button */}
        <a 
          href="https://x.com/utokyo_qff_2025"
          target="_blank" 
          rel="noopener noreferrer"
          title="X"
          className="w-14 h-14 md:w-16 md:h-16 bg-gray-400 rounded-full flex items-center justify-center text-white transition-colors duration-300 hover:bg-[#c49cee]"
        >
          <Image
            src={xLogo}
            alt="X (Twitter) Logo"
            width={32}
            height={32} 
            className="w-7 h-7 md:w-8 md:h-8 object-contain"
          />
        </a>

        {/* LinkedIn Icon Button */}
        <a 
          href="https://www.linkedin.com/company/109043948/"
          target="_blank" 
          rel="noopener noreferrer"
          title="LinkedIn"
          className="w-14 h-14 md:w-16 md:h-16 bg-gray-400 rounded-full flex items-center justify-center text-white transition-colors duration-300 hover:bg-[#c49cee]"
        >
          <Image
            src={inLogo}
            alt="LinkedIn Logo"
            width={32} 
            height={32} 
            className="w-7 h-7 md:w-8 md:h-8 object-contain" 
          />
        </a>

      </div>
    </section>
  );
}