import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { copy, locales, sections, type Locale } from "@/data/sections";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) return {};
  const locale = raw as Locale;
  const labels = {
    uz: { title: "Xalqaro aloqalar", description: "TDIU xalqaro aloqalari, grantlar, akademik hamkorlik va talabalar uchun ma’lumotlar." },
    en: { title: "Internationalization", description: "TSUE international relations, grants, academic cooperation and student information." },
    ru: { title: "Международные связи", description: "Международные связи ТГЭУ, гранты, академическое сотрудничество и информация для студентов." }
  };
  return {
    title: labels[locale].title,
    description: labels[locale].description,
    alternates: {
      canonical: "/" + locale,
      languages: { uz: "/uz", en: "/en", ru: "/ru" }
    }
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const p = await params;
  if (!locales.includes(p.locale as Locale)) notFound();
  const locale = p.locale as Locale;
  const t = copy[locale];

  return (
    <main id="main-content">
      <div className="bg-[#091b31] text-white">
        <Header locale={locale} />
        <section className="hero-grid relative isolate overflow-hidden">
          <div className="pointer-events-none absolute -right-40 top-5 h-[550px] w-[550px] rounded-full border border-white/[.07]" />
          <div className="pointer-events-none absolute -right-16 top-24 h-[390px] w-[390px] rounded-full border border-[#d7b77d]/20" />
          <div className="pointer-events-none absolute right-16 top-48 h-[220px] w-[220px] rounded-full border border-white/[.07]" />
          <div className="shell relative grid min-h-[610px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr]">
            <div className="max-w-2xl">
              <p className="eyebrow">{t.kicker}</p>
              <h1 className="display mt-8 text-[clamp(3.4rem,7vw,6.6rem)] leading-[.99]">
                {t.h1}<br /><span className="italic text-[#d7b77d]">{t.h2}</span><br />{t.h3}
              </h1>
              <p className="mt-8 max-w-xl text-sm leading-8 text-white/60 md:text-base">{t.hero}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href={"/" + locale + "#sections"} className="focus rounded-full bg-[#c8a66a] px-7 py-4 text-xs font-bold tracking-wide text-[#091b31] hover:bg-[#dfc18d]">{t.explore} ↗</Link>
                <Link href={"/" + locale + "#about"} className="focus rounded-full border border-white/20 px-7 py-4 text-xs text-white/80 hover:border-white/50">{t.about}</Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[470px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-3xl border border-white/15 bg-gradient-to-br from-[#294867] via-[#183651] to-[#0b1b31] p-5 shadow-2xl">
                <div className="absolute inset-5 border border-white/15" />
                <div className="absolute inset-9 border border-white/[.08]" />
                <div className="absolute left-1/2 top-1/2 h-[350px] w-[240px] -translate-x-1/2 -translate-y-1/2 rotate-[-24deg] rounded-[50%] border border-[#d7b77d]/25" />
                <div className="absolute left-1/2 top-1/2 h-[280px] w-[390px] -translate-x-1/2 -translate-y-1/2 rotate-[18deg] rounded-[50%] border border-white/10" />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <div className="flex justify-between text-[9px] tracking-[.2em] text-white/45"><span>TSUE · TASHKENT</span><span>GLOBAL / 01</span></div>
                  <div>
                    <p className="eyebrow">INTERNATIONALIZATION</p>
                    <p className="display mt-4 text-5xl leading-[.95] text-[#dfc18d]">GLOBAL<br /><span className="italic text-white">HORIZONS</span></p>
                    <div className="mt-6 h-px w-16 bg-[#d7b77d]" />
                    <p className="mt-4 max-w-[210px] text-xs leading-6 text-white/60">Knowledge without borders. Opportunity without limits.</p>
                  </div>
                  <div className="flex items-end justify-between text-[9px] tracking-[.16em] text-white/45"><span>GLOBAL ACADEMIC NETWORK</span><span className="display text-3xl text-[#d7b77d]">01—10</span></div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[#d7b77d]/40 bg-[#142d49] px-5 py-4 shadow-xl">
                <p className="eyebrow">ONE UNIVERSITY</p><p className="display mt-1 text-xl">Global mindset.</p>
              </div>
            </div>
          </div>
          <div className="shell grid grid-cols-3 border-t border-white/10 py-5 text-[9px] tracking-[.18em] text-white/40"><span>ACADEMIC EXCHANGE</span><span className="text-center">GLOBAL PARTNERSHIPS</span><span className="text-right">SHARED KNOWLEDGE</span></div>
        </section>
      </div>

      <section id="about" className="shell grid gap-8 py-24 md:grid-cols-[.8fr_1.2fr] md:py-32">
        <div><p className="eyebrow">A NEW DIGITAL EXPERIENCE</p><h2 className="display mt-5 max-w-md text-4xl leading-tight md:text-5xl">{t.aboutTitle}</h2></div>
        <div className="flex flex-col justify-end"><p className="max-w-2xl text-sm leading-8 text-slate-600 md:text-base">{t.aboutText}</p><p className="mt-6 max-w-2xl border-l-2 border-[#c8a66a] pl-4 text-xs leading-6 text-slate-500">{t.note}</p></div>
      </section>

      <section id="sections" className="bg-white py-24 md:py-28">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="eyebrow">THE INTERNATIONAL ECOSYSTEM</p><h2 className="display mt-4 text-4xl md:text-5xl">{t.areaTitle}</h2></div>
            <p className="max-w-sm text-sm leading-7 text-slate-500">{t.areaText}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <Link key={section.slug} href={"/" + locale + "/sections/" + section.slug} className="card focus rounded-2xl border border-slate-200 bg-[#fbfcfe] p-7">
                <div className="flex items-center justify-between"><span className="display text-4xl text-[#c8a66a]">{section.number}</span><span className="text-[8px] tracking-[.18em] text-slate-400">{section.category[locale]}</span></div>
                <h3 className="mt-8 min-h-[52px] text-base font-semibold leading-6">{section.title[locale]}</h3>
                <p className="mt-3 min-h-[66px] text-xs leading-6 text-slate-500">{section.summary[locale]}</p>
                <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-4 text-[10px]"><span className="text-slate-400">{t.details}</span><span>↗</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
