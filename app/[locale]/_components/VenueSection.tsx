"use client";

import { useTranslations } from "next-intl";
import React from 'react';

export default function VenueSection() {
  const t = useTranslations();
  const venueUrl = "https://www.s.u-tokyo.ac.jp/ja/access.html";

  return (
    <section
      id="venue"
      className="mx-auto max-w-6xl px-8 md:px-4 py-8 pb-6 md:pb-8"
    >
      <h2 className="text-2xl md:text-3xl font-semibold pb-4 md:pb-8">{t("Venue.title")}</h2>
      <p className="text-white md:px-4 md:px-8">
        {t.rich('Venue.desc', {
          link: (chunks: React.ReactNode) => (
            <a 
              href={venueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 underline hover:text-indigo-300"
            >
              {chunks}
            </a>
          )
        })}
      </p>
      <div className="mt-6 md:mt-8 rounded-xl overflow-hidden border">
        <div className="relative aspect-[3/2] md:aspect-[3/1]">
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
  );
}
