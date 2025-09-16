"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ibmImage from "@/public/images/IBM_Quantum_Logo.png";
import utokyoImage from "@/public/images/todai_logo.png";

export default function PartnersSection() {
  const t = useTranslations();

  return (
    <section id="partners" className="mx-auto max-w-6xl px-4 my-16 pt-14 pb-16 border-y botder-b">
      <h2 className="text-3xl font-semibold">{t("Partners.title")}</h2>
      <div className="mt-6 ml-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center gap-8 p-6 bg-[#d9d9d9] rounded-2xl border shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
          <Image src={ibmImage} alt="IBM Quantum" className="h-16 w-auto object-contain" />
          <h3 className="text-lg font-semibold text-gray-800 text-center">
            {t("Partners.ibm")}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 p-6 bg-[#d9d9d9] rounded-2xl border shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
          <Image src={utokyoImage} alt="the University of Tokyo" className="h-16 w-auto object-contain" />
          <h3 className="text-lg font-semibold text-gray-800 text-center">
            {t("Partners.utokyo")}
          </h3>
        </div>
      </div>
    </section>
  );
}
