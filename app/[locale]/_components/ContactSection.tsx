"use client";

import { useTranslations } from "next-intl";
import Image from "next/image"; 

import mailIcon from "@/public/images/mail_icon.png"; 

export default function ContactSection() {
    const t = useTranslations();
  
    return (
      <section
        id="contact"
        className="mx-auto max-w-6xl px-8 md:px-4 py-6 md:py-16"
      >
        <h2 className="text-2xl md:text-3xl font-semibold">
          {t("Contact.title")}
        </h2>
        <p className="mt-4 md:mt-8 md:ml-8 text-white leading-relaxed text-justify text-sm md:text-base">
          {t("Contact.desc")}
        </p>

        <div className="mt-8 flex gap-6 md:gap-12 pl-4 md:pl-24 items-center">
          <Image
              src={mailIcon}
              alt="mail"
              width={32} 
              height={32} 
              className="w-7 h-7 md:w-8 md:h-8 object-contain"
            />
          
          <p className="text-white leading-relaxed text-lg">
            {t("Contact.mail")}
          </p>

        </ div>

      </section>
  );
}