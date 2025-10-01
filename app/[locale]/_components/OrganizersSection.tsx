"use client";

import { useTranslations } from "next-intl";
import Image, { type StaticImageData } from "next/image";

import imamuraPhoto from '@/public/images/photo_imamura.jpeg';
import haradaPhoto from '@/public/images/photo_harada.jpg';
import komadaPhoto from '@/public/images/photo_komada.jpg';
import hayashiPhoto from '@/public/images/photo_hayashi.jpg';
import naitoPhoto from '@/public/images/photo_naito.jpg';

const organizerImages = {
  'photo_imamura': imamuraPhoto,
  'photo_harada': haradaPhoto,
  'photo_komada': komadaPhoto,
  'photo_hayashi': hayashiPhoto,
  'photo_naito': naitoPhoto,
} satisfies Record<string, StaticImageData>;

type OrganizerImageKey = keyof typeof organizerImages;

type Organizer = {
  name: string;
  affiliation: string;
  imageUrl: OrganizerImageKey;
};

export default function OrganizersSection() {
  const t = useTranslations();
  const speakers = (t.raw("Organizers.list") as Organizer[]) || [];

  return (
    <section id="organizers" className="mx-auto max-w-6xl px-8 md:px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">{t("Organizers.title")}</h2>
      <p className="mt-4 md:mt-8 md:ml-6 text-white leading-relaxed text-justify text-sm md:text-base">
        {t("Organizers.desc")}
      </p>
      <div className="mt-4 md:ml-6 flex overflow-x-auto gap-6 pt-4 pb-8 -mb-4">
          {speakers.map((organizer) => (
            <div 
                key={organizer.name} 
                className="flex-shrink-0 flex flex-col items-center gap-3 w-32 md:w-40"
            >
                {/* 1. 円形の画像アイコン */}
                <Image
                src={organizerImages[organizer.imageUrl]}
                alt={`${organizer.name}の写真`}
                width={96}  // 画像の実サイズ（例: 96px）
                height={96} // 画像の実サイズ（例: 96px）
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover object-top shadow-md"
                />
                {/* 2. 画像の下に表示するテキスト */}
                <div className="text-center">
                <h3 className="text-sm mt-2 mb-2 md:text-base font-semibold text-white whitespace-pre-line md:whitespace-normal">{organizer.name}</h3>
                <p className="text-xs text-gray-300 mt-2 mb-2 whitespace-pre-line">
                    {organizer.affiliation}
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
