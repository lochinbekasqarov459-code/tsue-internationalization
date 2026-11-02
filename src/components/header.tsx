"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/data/sections";

const labels: Record<Locale, { about: string; areas: string; contact: string; discover: string; menu: string; close: string }> = {
  uz: { about: "Portal haqida", areas: "Yo‘nalishlar", contact: "Aloqa", discover: "KASHF ETING", menu: "Menyuni ochish", close: "Menyuni yopish" },
  en: { about: "About", areas: "Sections", contact: "Contact", discover: "EXPLORE", menu: "Open menu", close: "Close menu" },
  ru: { about: "О портале", areas: "Разделы", contact: "Контакты", discover: "ОБЗОР", menu: "Открыть меню", close: "Закрыть меню" }
};

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const href = (next: Locale) => pathname.replace(/^\/(uz|en|ru)(?=\/|$)/, "/" + next);
  const t = labels[locale];

  return (
    <header className="relative z-20 border-b border-white/10 bg-[#091b31] text-white">
      <div className="shell flex h-11 items-center justify-between text-[10px] tracking-[.18em] text-white/55">
        <span>GLOBAL CONNECTIONS · TSUE</span>
        <div className="flex items-center gap-3" aria-label="Language selector">
          {(["uz", "en", "ru"] as Locale[]).map((code) => (
            <Link key={code} href={href(code)} className={"focus rounded px-1 py-1 uppercase " + (locale === code ? "text-[#dfc18d]" : "hover:text-white")} aria-current={locale === code ? "page" : undefined}>
              {code}
            </Link>
          ))}
        </div>
      </div>
      <div className="shell flex min-h-[76px] items-center justify-between gap-4 border-t border-white/10">
        <Link href={"/" + locale} className="focus flex items-center gap-3 rounded">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8a66a]/65 font-serif text-lg text-[#dfc18d]">G</span>
          <span>
            <b className="block text-[13px] tracking-[.18em]">TSUE <span className="text-[#d7b77d]">GLOBAL</span></b>
            <small className="mt-1 block text-[8px] tracking-[.23em] text-white/45">INTERNATIONALIZATION</small>
          </span>
        </Link>
        <nav className="hidden gap-8 text-xs text-white/65 md:flex">
          <Link href={"/" + locale + "#about"} className="hover:text-white">{t.about}</Link>
          <Link href={"/" + locale + "#sections"} className="hover:text-white">{t.areas}</Link>
          <Link href={"/" + locale + "#contact"} className="hover:text-white">{t.contact}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href={"/" + locale + "#sections"} className="focus hidden rounded-full border border-[#c8a66a]/60 px-4 py-2.5 text-[10px] tracking-wide text-[#dfc18d] transition hover:bg-[#c8a66a] hover:text-[#091b31] sm:inline-flex">
            {t.discover} ↗
          </Link>
          <button type="button" className="focus inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg text-[#dfc18d] md:hidden" aria-label={open ? t.close : t.menu} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="shell grid gap-1 border-t border-white/10 pb-5 pt-3 text-sm text-white/80 md:hidden">
          <Link onClick={() => setOpen(false)} className="focus rounded-lg px-3 py-3 hover:bg-white/5" href={"/" + locale + "#about"}>{t.about}</Link>
          <Link onClick={() => setOpen(false)} className="focus rounded-lg px-3 py-3 hover:bg-white/5" href={"/" + locale + "#sections"}>{t.areas}</Link>
          <Link onClick={() => setOpen(false)} className="focus rounded-lg px-3 py-3 hover:bg-white/5" href={"/" + locale + "#contact"}>{t.contact}</Link>
        </nav>
      )}
    </header>
  );
}
