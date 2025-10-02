"use client";

// import { Fragment } from "react";
import { useTranslations } from "next-intl";

export default function InformationSection() {
  const t = useTranslations();
  const placeLines = t("Information.place").split("\n");

  return (
    <section id="infomation" className="mx-auto max-w-6xl px-4 pt-10 md:pt16 pb-12 text-center">
      <p className="m-4 text-[#c49cee] text-xl">{t("Information.date-str")}</p>
      <div className="md:relative md:inline-block">
        <h2 className="text-2xl md:text-4xl font-semibold">{t("Information.date")}</h2>
        <p className="md:absolute bottom-0 md:-right-12 md:translate-x-full text-gray-400 md:whitespace-nowrap">
          {t("Information.note")}
        </p>
      </div>

      <p className="mt-10 md:mt-16 mb-4 text-[#c49cee] text-xl">{t("Information.place-str")}</p>
      <div className="text-white text-xl md:text-3xl font-semibold md:mb-12 flex flex-col gap-3 pt-2 md:pt-4">
        {placeLines.map((line, index) => (
          <span key={index}>
            {line}
          </span>
        ))}
      </div>

      <p className="mt-10 md:mt-16 mb-4 text-[#c49cee] text-xl">{t("Information.app-str")}</p>
      <div className="md:flex md:justify-center md:mb-8">
          
          <div className="md:w-1/3 pt-4">
              <p className="text-base md:text-lg whitespace-pre-wrap text-left pl-12 md:pl-0">
                  {t("Information.app-desc")}
              </p>
          </div>
          
          <div className="md:w-1/3 flex flex-col mt-0 md:pl-4">
              <div className="mt-8">
                  <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfRjBFBd7d5qw4YAcDZAWui4QDAN8C8qHNVSp0Aj_irC9OjQA/viewform?usp=header"
                      target="_blank"
                      className="inline-block rounded-lg px-6 py-3 border border-[#c8628f] bg-[#ff7eb6] backdrop-blur font-bold hover:bg-[#c8628f] transition"
                  >
                      {t("Hero.cta")}
                  </a>
              </div>
              <p className="mt-2 md:mt-4 text-balance text-white max-w-3xl text-center">
                  {t("Information.app-note")}
              </p>
              <p className="mt-4 md:mt-2 text-sm text-white max-w-3xl text-center">
                  {t("Information.app-note2")}
              </p>
          </div>
      </div>
    </section>
  );
}
