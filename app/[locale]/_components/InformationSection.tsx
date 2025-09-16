"use client";

import { Fragment } from "react";
import { useTranslations } from "next-intl";

export default function InformationSection() {
  const t = useTranslations();
  const placeLines = t("Information.place").split("\n");

  return (
    <section id="infomation" className="mx-auto max-w-6xl px-4 pt-10 pb-8 text-center">
      <p className="m-4 text-[#c49cee] text-xl">{t("Information.date-str")}</p>
      <div className="relative inline-block">
        <h2 className="text-4xl font-semibold">{t("Information.date")}</h2>
        <p className="absolute bottom-0 -right-12 translate-x-full text-gray-400 whitespace-nowrap">
          {t("Information.note")}
        </p>
      </div>
      <p className="mt-10 mb-4 text-[#c49cee] text-xl">{t("Information.place-str")}</p>
      <p className="text-white text-3xl font-semibold leading-relaxed">
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
