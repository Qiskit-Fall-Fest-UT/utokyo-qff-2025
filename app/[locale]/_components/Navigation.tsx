"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navigation() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-6">
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 border"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Site navigation drawer
            </SheetDescription>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Menu</span>
              <SheetClose asChild>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex items-center justify-center rounded-md p-2 border"
                >
                  <X className="h-5 w-5" />
                </button>
              </SheetClose>
            </div>
            <nav className="mt-4 flex flex-col gap-1">
              <SheetClose asChild>
                <a href="#about" className="rounded-lg px-3 py-2 hover:bg-gray-100">
                  {t("Nav.about")}
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#partners" className="rounded-lg px-3 py-2 hover:bg-gray-100">
                  {t("Nav.partners")}
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#schedule" className="rounded-lg px-3 py-2 hover:bg-gray-100">
                  {t("Nav.schedule")}
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#speakers" className="rounded-lg px-3 py-2 hover:bg-gray-100">
                  {t("Nav.speakers")}
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#venue" className="rounded-lg px-3 py-2 hover:bg-gray-100">
                  {t("Nav.venue")}
                </a>
              </SheetClose>
            </nav>
            <SheetClose asChild>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdesRsVZpp7WS1vut0jc3J5tKT63Y1fYg9X1xBEedxuPAL-fQ/viewform?usp=header"
                className="mt-4 inline-flex items-center justify-center rounded-lg px-4 py-2 border"
              >
                {t("Nav.register")}
              </a>
            </SheetClose>
          </SheetContent>
        </Sheet>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="font-medium">
            {t("Nav.about")}
          </a>
          <a href="#partners">{t("Nav.partners")}</a>
          <a href="#schedule">{t("Nav.schedule")}</a>
          <a href="#speakers">{t("Nav.speakers")}</a>
          <a href="#venue">{t("Nav.venue")}</a>
        </nav>

        <LanguageSwitcher />

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdesRsVZpp7WS1vut0jc3J5tKT63Y1fYg9X1xBEedxuPAL-fQ/viewform?usp=header"
          className="hidden md:inline-flex items-center rounded-lg px-4 py-2 border"
        >
          {t("Nav.register")}
        </a>
      </div>
    </header>
  );
}
