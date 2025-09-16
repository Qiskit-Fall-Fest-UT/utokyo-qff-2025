"use client";

import Image from "next/image";
import { Fragment } from "react";
import { useTranslations } from "next-intl";
import catImage from "@/public/images/Cat_01_r.png";

export default function FlowSection() {
  const t = useTranslations();
  const step1Lines = t("Flow.step1Desc").split("\n");
  const step2Lines = t("Flow.step2Desc").split("\n");
  const step3Lines = t("Flow.step3Desc").split("\n");

  const renderLines = (lines: string[]) =>
    lines.map((line, index) => (
      <Fragment key={line + index}>
        {index > 0 && <br />}
        {line}
      </Fragment>
    ));

  return (
    <section id="flow" className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-16 text-[#c49cee]">
        {t("Flow.title")}
      </h2>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-2/3 w-1.5 bg-gray-300" />

          <div className="relative pl-12 pb-12 md:pl-0 md:flex md:items-center">
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <h3 className="text-2xl font-semibold mb-4">{t("Flow.step1Title")}</h3>
              <p className="text-lg text-white/90 leading-relaxed">{renderLines(step1Lines)}</p>
            </div>
            <div className="hidden md:block absolute left-1/2 top-0 w-8 h-8 rounded-full bg-[#ff7eb6] text-white flex items-center justify-center font-bold text-lg -translate-x-1/2" />
          </div>

          <div className="relative pl-12 pb-12 md:pl-0 md:flex md:flex-row-reverse md:items-center">
            <div className="md:w-1/2 md:pl-12 md:text-left">
              <h3 className="text-2xl font-semibold mb-4">{t("Flow.step2Title")}</h3>
              <p className="text-lg text-white/90 leading-relaxed">{renderLines(step2Lines)}</p>
            </div>
            <div className="hidden md:block absolute left-1/2 top-0 w-8 h-8 rounded-full bg-[#ff7eb6] text-white flex items-center justify-center font-bold text-lg -translate-x-1/2" />
          </div>

          <div className="relative pl-12 pb-12 md:pl-0 md:flex md:items-center">
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <h3 className="text-2xl font-semibold mb-4">{t("Flow.step3Title")}</h3>
              <p className="text-lg text-white/90 leading-relaxed">{renderLines(step3Lines)}</p>
            </div>
            <div className="hidden md:block absolute left-1/2 top-0 w-8 h-8 rounded-full bg-[#ff7eb6] text-white flex items-center justify-center font-bold text-lg -translate-x-1/2" />
            <div className="hidden md:block absolute top-0 bottom-0 right-0">
              <Image
                src={catImage}
                alt="Cat image"
                fill={false}
                width={0}
                height={0}
                sizes="50vw"
                className="h-full w-auto rounded-md object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
