"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ibmImage from "@/public/images/IBM_Quantum_Logo.png";
import utokyoImage from "@/public/images/todai_logo.png";

export default function PartnersSection() {
  const t = useTranslations();

  return (
    <section
      id="partners"
      className="mx-auto max-w-6xl px-4 my-4 md:my-16 pt-14 pb-16 border-y botder-b px-8 md:px-0"
    >
      <h2 className="text-2xl md:text-3xl md:pb-4 font-semibold">
        {t("Partners.title")}
      </h2>
      <div className="mt-6 md:ml-6 grid md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center gap-2 md:gap-8 p-4 pt-6 md:p-6 bg-[#f2f2f2] rounded-2xl border shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
          <Image
            src={ibmImage}
            alt="IBM Quantum"
            className="h-6 md:h-16 w-auto object-contain"
          />
          <h3 className="text-lg font-semibold text-gray-800 text-center">
            {t("Partners.ibm")}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 md:gap-8 p-4 md:p-6 bg-[#f2f2f2] rounded-2xl border shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
          <Image
            src={utokyoImage}
            alt="the University of Tokyo"
            className="h-8 md:h-16 w-auto object-contain"
          />
          <h3 className="text-lg font-semibold text-gray-800 text-center">
            {t("Partners.utokyo")}
          </h3>
        </div>
      </div>
    </section>
  );
}
