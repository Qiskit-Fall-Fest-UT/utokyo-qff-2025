"use client";

import { useTranslations } from "next-intl";

export default function VenueSection() {
  const t = useTranslations();

  return (
    <section
      id="venue"
      className="mx-auto max-w-6xl px-8 md:px-4 py-8 pb-6 md:pb-16 md:py-16 md:pb-20"
    >
      <h2 className="text-2xl md:text-3xl font-semibold">{t("Venue.title")}</h2>
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
