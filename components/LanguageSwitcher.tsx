"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations();

  const isJa = locale === "ja";
  const isEn = locale === "en";

  return (
    <div className="ml-auto flex items-center gap-2" aria-label="Language switcher">
      <Languages aria-hidden className="h-4 w-4 text-gray-500" />
      <div role="group" aria-label="Language" className="inline-flex items-center rounded-lg border bg-white shadow-sm">
        <Link
          href="/ja"
          prefetch
          title={t("Lang.ja")}
          className={
            "px-2.5 py-1 text-xs font-medium rounded-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 " +
            (isJa ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100")
          }
          aria-current={isJa ? "true" : undefined}
        >
          JA
        </Link>
        <Link
          href="/en"
          prefetch
          title={t("Lang.en")}
          className={
            "px-2.5 py-1 text-xs font-medium rounded-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 " +
            (isEn ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100")
          }
          aria-current={isEn ? "true" : undefined}
        >
          EN
        </Link>
      </div>
    </div>
  );
}

