"use client";

import Image from "next/image";
import { Fragment } from "react";
import { useTranslations } from "next-intl";
import aboutImage from "@/public/images/badge_pink.png";

export default function AboutSection() {
  const t = useTranslations();
  const descriptionLines = t("About.desc").split("\n");

  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-8 md:px-4 md:pt-4 md:py-16"
    >
      <div className="flex flex-col md:flex-row md:items-center md:gap-8">
        <div className="md:hidden pb-4 px-16 w-full">
          <Image
            src={aboutImage}
            alt="About image"
            className="rounded-lg object-cover p-10"
          />
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {t("About.title")}
          </h2>
          <p className="mt-4 md:mt-8 text-white leading-relaxed text-justify text-sm md:text-base">
            {descriptionLines.map((line, index) => (
              <Fragment key={line + index}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </p>
        </div>

        <div className="hidden md:block mt-8 md:mt-0 w-full md:w-1/3">
          <Image
            src={aboutImage}
            alt="About image"
            className="rounded-lg object-cover p-10"
          />
        </div>
      </div>
    </section>
  );
}
