"use client";

import Image from "next/image";
import { Fragment } from "react";
import { useTranslations } from "next-intl";
import heroBg from "@/public/images/utokyo-qff-hero.png";

export default function HeroSection() {
  const t = useTranslations();
  const headlineLines = t("Hero.title").split("\n");

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroBg}
          alt=""
          priority
          placeholder="blur"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="mx-auto max-w-6xl px-8 py-24 text-left text-white">
        <h1 className="mt-2 text-4xl md:text-6xl font-extrabold drop-shadow-sm">
          {headlineLines.map((line, index) => (
            <Fragment key={line + index}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h1>
        <p className="mt-4 text-balance text-white max-w-3xl">{t("Hero.desc")}</p>

        <div className="mt-8">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdesRsVZpp7WS1vut0jc3J5tKT63Y1fYg9X1xBEedxuPAL-fQ/viewform?usp=header"
            target="_blank"
            className="inline-block rounded-lg px-6 py-3 border border-[#c8628f] bg-[#ff7eb6] backdrop-blur font-bold hover:bg-[#c8628f] transition"
          >
            {t("Hero.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
