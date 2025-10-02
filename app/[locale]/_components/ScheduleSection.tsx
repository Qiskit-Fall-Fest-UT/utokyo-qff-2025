"use client";

import { useTranslations } from "next-intl";

type ScheduleEvent = {
  time: string;
  title: string;
  desc: string; 
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
      className="mx-auto max-w-6xl px-8 md:px-4 py-4 md:py-8 pt-8 md:pt-16 md:py-12"
    >
      <h2 className="text-2xl md:text-3xl font-semibold">
        {t("Schedule.title")}
      </h2>
      {/* <p className="pl-8 m-8 text-white">
        {t("Schedule.desc")}
      </p> */}

      <div className="mt-8 md:mt-12 space-y-8 md:space-y-12 px-2 md:px-8">
        
        {/* Phase 1: Entry Period */}
        <div className="border-l-4 border-indigo-500 pl-6 ">
          <div className="md:flex items-baseline">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {t("Schedule.entryPeriodTitle")}
            </h3>
            <p className="mt-2 md:mt-0 pl-8 md:pl-20 text-xl md:text-2xl font-semibold text-[#c49cee]">
              {t("Schedule.entryPeriod")}
            </p>
          </div>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            {t("Schedule.entryPeriodDesc")}
          </p>
        </div>

        {/* Phase 2: Team Formation Period */}
        
        <div className="border-l-4 border-purple-500 pl-6">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            {t("Schedule.teamFormationPeriodTitle")}
          </h3>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            {t("Schedule.teamFormationPeriodDesc")}
          </p>
        </div>

        <div className="space-y-8">
          {/* Phase 3: Event Period (with schedule table) */}
          <div className="border-l-4 border-pink-500 pl-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {t("Schedule.eventPeriodTitle")}
            </h3>
            <p className="mt-4 text-gray-400 text-sm md:text-base">
              {t("Schedule.eventPeriodDesc")}
            </p>
          </div>

            <div className="mx-4 md:mx-8 grid grid-cols-1 md:grid-cols-3">
              {scheduleDays.map((day) => (
                <div key={day.date} className="bg-gray-800/50 border border-gray-700 p-4 md:p-6">
                  {/* 日付 */}
                  <h3 className="text-xl font-semibold text-[#c49cee] mb-3 md:mb-6 text-center py-2">
                    {day.date}
                  </h3>
                  
                  {/* その日の内容 */}
                  <ul className="space-y-3 md:space-y-4 mb-2">
                    {day.events.map((event, index) => (
                      <li key={index} className="flex gap-4 items-center">
                        <time className="font-mono text-sm text-indigo-400 flex-shrink-0">{event.time}</time>
                        <p className="text-gray-300 text-sm">{event.desc}</p>
                        <p className="text-gray-300 whitespace-pre-wrap">{event.title}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}
