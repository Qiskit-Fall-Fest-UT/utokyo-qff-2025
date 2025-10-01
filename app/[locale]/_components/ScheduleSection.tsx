"use client";

import { useTranslations } from "next-intl";

type ScheduleEvent = {
  time: string;
  title: string;
  description?: string; // オプショナルな説明
};

type ScheduleDay = {
  date: string;
  events: ScheduleEvent[];
};

export default function ScheduleSection() {
  const t = useTranslations();
  const scheduleDays = (t.raw("Schedule.days") as ScheduleDay[]) || [];

  return (
    <section
      id="schedule"
      className="mx-auto max-w-6xl px-8 md:px-4 py-8 pt-16 md:py-16"
    >
      <h2 className="text-2xl md:text-3xl font-semibold">
        {t("Schedule.title")}
      </h2>
      <p className="pl-8 m-8 text-white">
        {t("Schedule.desc")}
      </p>

      <div className="mt-12 ml-8 mr-8 grid grid-cols-1 md:grid-cols-3">
        {scheduleDays.map((day) => (
          <div key={day.date} className="bg-gray-800/50 border border-gray-700  p-6">
            {/* 日付 */}
            <h3 className="text-xl font-semibold text-[#c49cee] mb-6 text-center">
              {day.date}
            </h3>
            
            {/* その日の内容 */}
            <ul className="space-y-4">
              {day.events.map((event, index) => (
                <li key={index} className="flex gap-4">
                  <time className="font-mono text-sm text-indigo-400 flex-shrink-0">{event.time}</time>
                  <p className="text-gray-300">{event.title}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}
