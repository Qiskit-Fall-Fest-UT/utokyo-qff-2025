"use client";

import { Fragment } from "react";
import { useTranslations } from "next-intl";

export default function InformationSection() {
  const t = useTranslations();
  const placeLines = t("Information.place").split("\n");

  return (
    <section id="infomation" className="mx-auto max-w-6xl px-4 pt-10 pb-8 text-center">
      <p className="m-4 text-[#c49cee] text-xl">{t("Information.date-str")}</p>
      <div className="md:relative md:inline-block">
        <h2 className="text-2xl md:text-4xl font-semibold">{t("Information.date")}</h2>
        <p className="md:absolute bottom-0 md:-right-12 md:translate-x-full text-gray-400 md:whitespace-nowrap">
          {t("Information.note")}
        </p>
      </div>
      <p className="mt-10 mb-4 text-[#c49cee] text-xl">{t("Information.place-str")}</p>
      <p className="text-white text-xl md:text-3xl font-semibold leading-relaxed">
        {placeLines.map((line, index) => (
          <Fragment key={line + index}>
            {index > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </p>
    </section>
  );
}
