"use client";

import Link from "next/link";
import Image from "next/image";
import heroBg from "@/public/images/background.png";
import { useTranslations, useLocale } from "next-intl";

export default function Page() {
  const t = useTranslations();
  const locale = useLocale();
  const speakerNames = ["Speaker A", "Speaker B", "Speaker C"];
  const other = locale === "ja" ? "en" : "ja";

  return (
    <main>
      {/* Nav */}
      <header className="sticky top-0 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-6">
          <a href="#about" className="font-medium">
            {t("Nav.about")}
          </a>
          <a href="#partners">{t("Nav.partners")}</a>
          <a href="#schedule">{t("Nav.schedule")}</a>
          <a href="#speakers">{t("Nav.speakers")}</a>
          <a href="#venue">{t("Nav.venue")}</a>

          <Link
            href={`/${other}`}
            prefetch
            className="ml-auto inline-flex items-center rounded-lg px-3 py-1 text-sm border"
          >
            {other === "ja" ? t("Lang.ja") : t("Lang.en")}
          </Link>

          <a
            href="https://example.com/register"
            className="inline-flex items-center rounded-lg px-4 py-2 border"
          >
            {t("Nav.register")}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroBg}
            alt=""
            priority
            placeholder="blur"
            fill
            className="object-cover object-center"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-6xl px-4 py-24 text-center text-white">
          <p className="uppercase tracking-widest text-sm/6 opacity-90">
            {t("Hero.eyebrow")}
          </p>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold drop-shadow-sm">
            {t("Hero.title")}
          </h1>
          <p className="mt-4 text-balance text-white/90 max-w-3xl mx-auto">
            {t("Hero.desc")}
          </p>

          {/* Event details */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3 text-left">
            <div className="rounded-lg bg-white/10 backdrop-blur px-4 py-3 border border-white/15">
              <p className="text-xs uppercase tracking-wider text-white/80">日付</p>
              <p className="mt-1 font-medium">11/1(土) と 11/8(土) の両日</p>
            </div>
            <div className="rounded-lg bg-white/10 backdrop-blur px-4 py-3 border border-white/15">
              <p className="text-xs uppercase tracking-wider text-white/80">時間</p>
              <p className="mt-1 font-medium">9:00～20:00</p>
            </div>
            <div className="rounded-lg bg-white/10 backdrop-blur px-4 py-3 border border-white/15">
              <p className="text-xs uppercase tracking-wider text-white/80">場所</p>
              <p className="mt-1 font-medium">理学部１号館 中央棟 341共通講義室</p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="https://example.com/register"
              className="inline-block rounded-lg px-6 py-3 border border-white/30 bg-white/10 backdrop-blur hover:bg-white/20 transition"
            >
              {t("Hero.cta")}
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">{t("About.title")}</h2>
        <p className="mt-3 text-gray-700">{t("About.desc")}</p>
      </section>

      {/* Partners */}
      <section id="partners" className="mx-auto max-w-6xl px-4 py-16 border-t">
        <h2 className="text-2xl font-semibold">{t("Partners.title")}</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="aspect-[3/1] rounded-xl border grid place-content-center">
            IBM
          </div>
          <div className="aspect-[3/1] rounded-xl border grid place-content-center">
            Qiskit
          </div>
          <div className="aspect-[3/1] rounded-xl border grid place-content-center">
            協創課
          </div>
          <div className="aspect-[3/1] rounded-xl border grid place-content-center">
            {t("Partners.sponsor")}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="mx-auto max-w-6xl px-4 py-16 border-t">
        <h2 className="text-2xl font-semibold">{t("Schedule.title")}</h2>
        <ul className="mt-6 space-y-4">
          <li className="rounded-xl border p-4">
            <p className="font-medium">{t("Schedule.day1")}</p>
            <p className="text-gray-600">{t("Schedule.day1Desc")}</p>
          </li>
          <li className="rounded-xl border p-4">
            <p className="font-medium">{t("Schedule.day2")}</p>
            <p className="text-gray-600">{t("Schedule.day2Desc")}</p>
          </li>
          {/* Add Day 3/4 */}
        </ul>
      </section>

      {/* Speakers */}
      <section id="speakers" className="mx-auto max-w-6xl px-4 py-16 border-t">
        <h2 className="text-2xl font-semibold">{t("Speakers.title")}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {speakerNames.map((name) => (
            <article key={name} className="rounded-xl border p-4">
              <div className="aspect-square rounded-lg border" />
              <h3 className="mt-3 font-medium">{name}</h3>
              <p className="text-gray-600">{t("Speakers.subtitle")}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Venue / Contact */}
      <section id="venue" className="mx-auto max-w-6xl px-4 py-16 border-t">
        <h2 className="text-2xl font-semibold">{t("Venue.title")}</h2>
        <p className="mt-3 text-gray-700">{t("Venue.desc")}</p>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} QFF • {t("Footer.credit")}
        </div>
      </footer>
    </main>
  );
}
