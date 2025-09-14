"use client";
import React from "react";
import Image from "next/image";
import heroBg from "@/public/images/utokyo-qff-hero.png";
import aboutImage from "@/public/images/badge_pink.png"; 
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export default function Page() {
  const t = useTranslations();
  const speakerNames = (t.raw("Speakers.names") as string[]) || [];
  // Locale is used to format content; switching handled by LanguageSwitcher

  return (
    <main>
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-6">
          {/* Mobile menu button */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-md p-2 border"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              {/* A11y title/description for Radix Dialog */}
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Site navigation drawer
              </SheetDescription>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Menu</span>
                <SheetClose asChild>
                  <button
                    type="button"
                    aria-label="Close menu"
                    className="inline-flex items-center justify-center rounded-md p-2 border"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </SheetClose>
              </div>
              <nav className="mt-4 flex flex-col gap-1">
                <SheetClose asChild>
                  <a
                    href="#about"
                    className="rounded-lg px-3 py-2 hover:bg-gray-100"
                  >
                    {t("Nav.about")}
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#partners"
                    className="rounded-lg px-3 py-2 hover:bg-gray-100"
                  >
                    {t("Nav.partners")}
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#schedule"
                    className="rounded-lg px-3 py-2 hover:bg-gray-100"
                  >
                    {t("Nav.schedule")}
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#speakers"
                    className="rounded-lg px-3 py-2 hover:bg-gray-100"
                  >
                    {t("Nav.speakers")}
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#venue"
                    className="rounded-lg px-3 py-2 hover:bg-gray-100"
                  >
                    {t("Nav.venue")}
                  </a>
                </SheetClose>
              </nav>
              <SheetClose asChild>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdesRsVZpp7WS1vut0jc3J5tKT63Y1fYg9X1xBEedxuPAL-fQ/viewform?usp=header"
                  className="mt-4 inline-flex items-center justify-center rounded-lg px-4 py-2 border"
                >
                  {t("Nav.register")}
                </a>
              </SheetClose>
            </SheetContent>
          </Sheet>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="font-medium">
              {t("Nav.about")}
            </a>
            <a href="#partners">{t("Nav.partners")}</a>
            <a href="#schedule">{t("Nav.schedule")}</a>
            <a href="#speakers">{t("Nav.speakers")}</a>
            <a href="#venue">{t("Nav.venue")}</a>
          </nav>

          {/* Right controls */}
          <LanguageSwitcher />

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdesRsVZpp7WS1vut0jc3J5tKT63Y1fYg9X1xBEedxuPAL-fQ/viewform?usp=header"
            className="hidden md:inline-flex items-center rounded-lg px-4 py-2 border"
          >
            {t("Nav.register")}
          </a>
        </div>

        {/* Drawer handled by Sheet (Radix Dialog) */}
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
          {/* <div className="absolute inset-0 bg-black/50" aria-hidden="true" /> */}
        </div>

        {/* Content */}
        <div className="mx-auto max-w-6xl px-8 py-24 text-left text-white">
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold drop-shadow-sm">
            {t("Hero.title")
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <br />}
                  {line}
                </React.Fragment>
            ))}
          </h1>
          <p className="mt-4 text-balance text-white max-w-3xl">
            {t("Hero.desc")}
          </p>

          {/* Event details */}
          {/* <div className="mt-8 grid gap-3 sm:grid-cols-3 text-left">
            <div className="rounded-lg bg-white/10 backdrop-blur px-4 py-3 border border-white/15">
              <p className="text-xs uppercase tracking-wider text-white/80">
                {t("Event.dateLabel")}
              </p>
              <p className="mt-1 font-medium">{t("Event.dateValue")}</p>
            </div>
            <div className="rounded-lg bg-white/10 backdrop-blur px-4 py-3 border border-white/15">
              <p className="text-xs uppercase tracking-wider text-white/80">
                {t("Event.timeLabel")}
              </p>
              <p className="mt-1 font-medium">{t("Event.timeValue")}</p>
            </div>
            <div className="rounded-lg bg-white/10 backdrop-blur px-4 py-3 border border-white/15">
              <p className="text-xs uppercase tracking-wider text-white/80">
                {t("Event.locationLabel")}
              </p>
              <p className="mt-1 font-medium">{t("Event.locationValue")}</p>
            </div>
          </div> */}

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

      {/* Information */}
      <section id="infomation" className="mx-auto max-w-6xl px-4 pt-10 pb-8 text-center">
        <p className="m-4 text-[#c49cee] text-xl">{t("Information.date-str")}</p>
        <div className="relative inline-block">
          <h2 className="text-4xl font-semibold">{t("Information.date")}</h2>
          <p className="absolute bottom-0 -right-12 translate-x-full text-gray-400 whitespace-nowrap">{t("Information.note")}</p>
        </div>
        <p className="mt-10 mb-4 text-[#c49cee] text-xl">{t("Information.place-str")}</p>
        <p className="text-white text-3xl font-semibold leading-relaxed">
          {t("Information.place")
            .split("\n")
            .map((line, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />}
                {line}
              </React.Fragment>
          ))}
        </p>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        {/* Flexbox */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
          
          {/* 左側のテキストエリア */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-semibold">{t("About.title")}</h2>
            <p className="mt-8 text-white leading-relaxed text-justify">
              {t("About.desc")
                .split("\n")
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <br />}
                    {line}
                  </React.Fragment>
              ))}
            </p>
          </div>

          {/* 右側の画像エリア */}
          <div className="mt-8 md:mt-0 w-full md:w-1/3">
            <Image
              src={aboutImage}
              alt="About image"
              className="rounded-lg object-cover p-10"
            />
          </div>
        </div>
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
        {/* Map */}
        <div className="mt-6 rounded-xl overflow-hidden border">
          <div className="relative aspect-[16/9]">
            <iframe
              title="Google Map of the venue"
              src="https://www.google.com/maps?q=Faculty%20of%20Science%20Building%201%2C%20The%20University%20of%20Tokyo&output=embed"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} UTokyo QFF Team
        </div>
      </footer>
    </main>
  );
}
