"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import aiharaPhoto from '@/public/images/photo_aihara.png';
import terashiPhoto from '@/public/images/photo_terashi.jpeg';
import todoPhoto from '@/public/images/photo_default.png'; // 仮のインポート
import horiiPhoto from '@/public/images/photo_horii.jpeg';

const speakerImages = {
  'photo_aihara': aiharaPhoto,
  'photo_terashi': terashiPhoto,
  'photo_default': todoPhoto,
  'photo_horii': horiiPhoto,
};

type Speaker = {
  name: string;
  affiliation: string;
  imageUrl: string;
};

export default function SpeakersSection() {
  const t = useTranslations();
  const speakers = (t.raw("Speakers.list") as Speaker[]) || [];

  return (
    <section id="speakers" className="mx-auto max-w-6xl px-8 md:px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">{t("Speakers.title")}</h2>
      <p className="mt-4 md:mt-8 md:ml-6 text-white leading-relaxed text-justify text-sm md:text-base">
        {t("Speakers.desc")}
      </p>
      <div className="mt-4 md:ml-6 flex overflow-x-auto gap-6 pt-4 pb-8 -mb-4">
          {speakers.map((speaker) => (
            <div 
              key={speaker.name} 
              className="flex-shrink-0 w-60 rounded-xl shadow-lg bg-white overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <Image
                src={speakerImages[speaker.imageUrl]}
                alt={`${speaker.name}の写真`}
                className="w-full h-60 object-cover object-top"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{speaker.name}</h3>
                <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                  {speaker.affiliation}
                </p>
              </div>
            </div>
          ))}
        </div>

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
