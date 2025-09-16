"use client";

import { useTranslations } from "next-intl";

export default function ScheduleSection() {
  const t = useTranslations();

  return (
    <section id="schedule" className="mx-auto max-w-6xl px-8 md:px-4 py-8 pt-16 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">{t("Schedule.title")}</h2>
      <h3 className="text-2xl md:text-3xl font-semibold pl-12 m-8 text-[#c49cee]">
        {t("Schedule.desc")}
      </h3>
    </section>
  );
}
