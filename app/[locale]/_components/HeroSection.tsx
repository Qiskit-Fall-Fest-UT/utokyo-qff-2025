"use client";

import Image from "next/image";
import { Fragment } from "react";
import { useTranslations } from "next-intl";
import heroBg from "@/public/images/utokyo-qff-hero.png";
import heroImage from "@/public/images/hero_image.png";

export default function HeroSection() {
  const t = useTranslations();
  const headlineLines = t("Hero.title").split("\n");

  return (
    <section className="md:relative">
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src={heroBg}
          alt=""
          priority
          placeholder="blur"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="text-center md:hidden">
        {/* タイトル (モバイル) */}
        <h1 className="text-4xl font-extrabold text-white pt-16 pb-8">
          {headlineLines.map((line, index) => (
            <Fragment key={line + index}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h1>

        {/* 登録ボタン (モバイル) */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfRjBFBd7d5qw4YAcDZAWui4QDAN8C8qHNVSp0Aj_irC9OjQA/viewform?usp=header"
          target="_blank"
          className="inline-block rounded-lg px-6 py-2 border border-[#c8628f] bg-[#ff7eb6] backdrop-blur font-bold hover:bg-[#c8628f] transition"
        >
          {t("Hero.cta")}
        </a>

        {/* 画像 (モバイル) */}
        <div className="mt-12 mb-4 px-8">
          <Image
            src={heroImage}
            alt="Hero画像"
            priority
            placeholder="blur"
            className="w-full h-auto rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-8 py-24 text-left text-white hidden md:block">
        <h1 className="mt-2 text-4xl md:text-6xl font-extrabold drop-shadow-md">
          {headlineLines.map((line, index) => (
            <Fragment key={line + index}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h1>
        <p className="mt-4 text-balance text-white max-w-3xl">
          {t("Hero.desc")}
        </p>

        <div className="mt-8">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfRjBFBd7d5qw4YAcDZAWui4QDAN8C8qHNVSp0Aj_irC9OjQA/viewform?usp=header"
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
