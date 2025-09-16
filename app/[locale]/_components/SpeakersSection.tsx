"use client";

import { useTranslations } from "next-intl";

export default function SpeakersSection() {
  const t = useTranslations();

  return (
    <section id="speakers" className="mx-auto max-w-6xl px-8 md:px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">{t("Speakers.title")}</h2>
      <h3 className="text-2xl md:text-3xl font-semibold pl-12 m-8 text-[#c49cee]">
        {t("Speakers.desc")}
      </h3>
      {/* const speakerNames = (t.raw("Speakers.names") as string[]) || []; */}
      {/* <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {speakerNames.map((name) => (
          <article key={name} className="rounded-xl border p-4">
            <div className="aspect-square rounded-lg border" />
            <h3 className="mt-3 font-medium">{name}</h3>
            <p className="text-gray-600">{t("Speakers.subtitle")}</p>
          </article>
        ))}
      </div> */}
    </section>
  );
}
