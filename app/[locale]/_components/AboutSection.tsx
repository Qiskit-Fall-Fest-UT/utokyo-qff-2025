"use client";

import Image from "next/image";
import { Fragment } from "react";
import { useTranslations } from "next-intl";
import aboutImage from "@/public/images/badge_pink.png";

export default function AboutSection() {
  const t = useTranslations();
  const descriptionLines = t("About.desc").split("\n");

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:gap-8">
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-semibold">{t("About.title")}</h2>
          <p className="mt-8 text-white leading-relaxed text-justify">
            {descriptionLines.map((line, index) => (
              <Fragment key={line + index}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </p>
        </div>

        <div className="mt-8 md:mt-0 w-full md:w-1/3">
          <Image src={aboutImage} alt="About image" className="rounded-lg object-cover p-10" />
        </div>
      </div>
    </section>
  );
}
