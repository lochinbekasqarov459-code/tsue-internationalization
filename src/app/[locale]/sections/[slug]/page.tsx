import Link from "next/link";
import type { Metadata } from "next";
import {notFound} from "next/navigation";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import {copy,locales,sections,type Locale} from "@/data/sections";

export function generateStaticParams(){return locales.flatMap(locale=>sections.map(section=>({locale,slug:section.slug})));}

function SectionVisual({slug}:{slug:string}) {
  switch(slug) {
    case "international-relations":
      return <div className="grid gap-4 md:grid-cols-[.7fr_1.3fr]"><div className="rounded-2xl bg-[#10233f] p-7 text-white"><span className="eyebrow">PEOPLE & CONNECTIONS</span><div className="mt-8 border-l border-[#c8a66a]/60 pl-5"><p className="display text-2xl">International</p><p className="mt-1 text-sm text-white/55">Relations Department</p><div className="mt-7 space-y-4 text-xs text-white/65"><p>01 — Department overview</p><p>02 — Team directory</p><p>03 — Responsibilities</p></div></div></div><div className="flex min-h-[230px] flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7"><span className="eyebrow">INSTITUTIONAL PROFILE</span><div className="grid grid-cols-3 gap-3">{["Structure","Team","Contacts"].map((x)=><div key={x} className="rounded-xl bg-[#f3f6fa] p-4 text-center"><span className="display text-xl text-[#c8a66a]">↗</span><p className="mt-2 text-[10px] text-slate-600">{x}</p></div>)}</div></div></div>;
    case "international-grants":
      return <div className="rounded-3xl bg-gradient-to-br from-[#102c50] to-[#07182d] p-8 text-white md:p-10"><div className="flex items-center justify-between"><span className="eyebrow">FUNDING LANDSCAPE</span><span className="rounded-full border border-white/20 px-3 py-1 text-[9px] tracking-widest">OPPORTUNITY</span></div><div className="mt-10 grid gap-4 md:grid-cols-3">{[["01","DISCOVER","Find verified calls"],["02","PREPARE","Review requirements"],["03","APPLY","Use official portals"]].map(([n,h,d])=><div key={n} className="border-t border-[#c8a66a]/50 pt-5"><span className="display text-4xl text-[#d7b77d]">{n}</span><p className="mt-4 text-xs font-bold tracking-widest">{h}</p><p className="mt-2 text-xs text-white/50">{d}</p></div>)}</div></div>;
    case "transformation-center":
      return <div className="grid gap-3 md:grid-cols-[1.1fr_.9fr]"><div className="relative overflow-hidden rounded-3xl bg-[#e4ebe7] p-8"><span className="eyebrow text-[#61796d]">TRANSFORMATION / IN MOTION</span><p className="display mt-16 max-w-sm text-4xl leading-tight text-[#193c33]">Change begins with a connected vision.</p><div className="absolute -bottom-20 -right-12 h-64 w-64 rounded-full border-[22px] border-[#9db7a7]/40"/></div><div className="grid gap-3"><div className="rounded-2xl bg-[#193c33] p-6 text-white"><span className="text-xs text-[#b8d0bf]">01 / STRATEGY</span><p className="display mt-7 text-2xl">Direction</p></div><div className="rounded-2xl bg-[#c7d7cd] p-6 text-[#193c33]"><span className="text-xs">02 / IMPLEMENTATION</span><p className="display mt-7 text-2xl">Action</p></div></div></div>;
    case "international-conferences":
      return <div className="relative overflow-hidden rounded-3xl bg-[#7c2832] p-8 text-[#fff3e7] md:p-12"><div className="absolute -right-10 -top-16 h-72 w-72 rounded-full border border-[#f3cba4]/30"/><div className="absolute -right-2 top-0 h-56 w-56 rounded-full border border-[#f3cba4]/20"/><div className="relative"><span className="eyebrow text-[#f3cba4]">IDEAS MEET THE WORLD</span><p className="display mt-9 max-w-xl text-5xl leading-[.98] md:text-6xl">A meeting<br/><i>of minds.</i></p><div className="mt-10 flex flex-wrap items-end justify-between gap-5 border-t border-white/20 pt-5"><span className="text-xs tracking-widest">CONFERENCES · FORUMS · DIALOGUE</span><span className="display text-3xl text-[#f3cba4]">04 / 10</span></div></div></div>;
    case "international-scientific-relations":
      return <div className="relative overflow-hidden rounded-3xl bg-[#102b4b] p-8 text-white md:p-10"><span className="eyebrow">RESEARCH CONSTELLATION</span><div className="relative mx-auto mt-8 grid min-h-[220px] max-w-xl place-items-center"><div className="absolute h-52 w-52 rounded-full border border-[#8eacc7]/40"/><div className="absolute h-36 w-80 rotate-[-24deg] rounded-[50%] border border-[#8eacc7]/30"/><div className="absolute h-36 w-80 rotate-[24deg] rounded-[50%] border border-[#8eacc7]/30"/><div className="z-10 rounded-full border border-[#d7b77d] bg-[#173a5f] px-8 py-5 text-center"><span className="display text-2xl text-[#e2c995]">Research</span><p className="mt-1 text-[9px] tracking-widest text-white/50">SHARED KNOWLEDGE</p></div>{[["FACULTY","top-0 left-1/2 -translate-x-1/2"],["IDEAS","bottom-0 left-1/2 -translate-x-1/2"],["GLOBAL","left-0 top-1/2 -translate-y-1/2"],["IMPACT","right-0 top-1/2 -translate-y-1/2"]].map(([label,pos])=><span key={label} className={"absolute rounded-full bg-[#315574] px-3 py-2 text-[9px] tracking-widest "+pos}>{label}</span>)}</div></div>;
    case "international-cooperation":
      return <div className="grid gap-4 md:grid-cols-2"><div className="rounded-3xl bg-[#142e4a] p-8 text-white"><span className="eyebrow">GLOBAL NETWORK</span><p className="display mt-14 text-4xl">Connect<br/><i className="text-[#d7b77d]">across borders.</i></p><div className="mt-10 flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#d7b77d]"/><span className="text-[10px] tracking-widest text-white/55">UNIVERSITY-TO-UNIVERSITY</span></div></div><div className="grid gap-3"><div className="rounded-2xl border border-slate-200 bg-white p-6"><span className="eyebrow">PARTNER SIDE A</span><p className="display mt-5 text-2xl">Shared priorities</p></div><div className="flex items-center justify-center rounded-xl bg-[#e5eaf0] py-3 text-xs tracking-[.3em] text-[#60748b]">↔ CO-CREATION ↔</div><div className="rounded-2xl border border-slate-200 bg-white p-6"><span className="eyebrow">PARTNER SIDE B</span><p className="display mt-5 text-2xl">Shared outcomes</p></div></div></div>;
    case "international-memorandums":
      return <div className="rounded-3xl bg-[#e9e3d7] p-5 md:p-8"><div className="mx-auto max-w-2xl border border-[#c7bda9] bg-[#fbf8f1] p-7 shadow-xl md:p-10"><div className="flex items-center justify-between border-b border-[#d9d0c2] pb-5"><span className="eyebrow text-[#8e7046]">AGREEMENT ARCHIVE</span><span className="display text-3xl text-[#a58758]">07</span></div><div className="py-9 text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#b99a66] text-2xl text-[#a58758]">✦</div><p className="display mt-5 text-3xl text-[#25364b]">Memorandum</p><p className="mt-2 text-[9px] tracking-[.25em] text-[#998d7b]">INTERNATIONAL COOPERATION DOCUMENT</p></div><div className="space-y-3">{[1,2,3].map(x=><div key={x} className="h-px bg-[#e3dbce]"/>)}<div className="mt-7 flex justify-between text-[9px] tracking-widest text-[#9c8d78]"><span>PARTIES</span><span>DATE</span><span>STATUS</span></div></div></div></div>;
    case "professional-development-abroad":
      return <div className="grid gap-4 md:grid-cols-[.8fr_1.2fr]"><div className="flex min-h-[250px] flex-col justify-between rounded-3xl bg-[#1d4653] p-8 text-white"><span className="eyebrow text-[#b4d3d1]">LEARNING JOURNEY</span><p className="display text-5xl leading-tight">Learn<br/><i className="text-[#c6ded6]">beyond.</i></p><span className="text-[9px] tracking-[.2em] text-white/45">PROFESSIONAL MOBILITY</span></div><div className="rounded-3xl border border-slate-200 bg-white p-8"><span className="eyebrow">A PATH OF DEVELOPMENT</span><div className="mt-8 space-y-7">{[["01","Explore opportunities"],["02","Build your skills"],["03","Share your experience"]].map(([n,s])=><div key={n} className="flex items-center gap-5"><span className="display text-3xl text-[#c8a66a]">{n}</span><p className="text-sm text-slate-600">{s}</p></div>)}</div></div></div>;
    case "foreign-faculty-programmes":
      return <div className="rounded-3xl bg-[#24364d] p-8 text-white md:p-10"><div className="flex items-center justify-between"><span className="eyebrow">FACULTY EXCHANGE</span><span className="display text-3xl text-[#d7b77d]">09</span></div><div className="mt-10 grid gap-4 md:grid-cols-[1fr_1fr]"><div><p className="display text-4xl">Teaching<br/><i className="text-[#d7b77d]">without borders.</i></p><p className="mt-5 max-w-xs text-xs leading-6 text-white/55">Academic dialogue, visiting expertise and shared learning.</p></div><div className="grid grid-cols-2 gap-2">{["LECTURES","WORKSHOPS","MENTORING","RESEARCH"].map(s=><div key={s} className="flex min-h-24 items-end rounded-xl border border-white/15 bg-white/5 p-4 text-[9px] tracking-widest text-[#e2c995]">{s}</div>)}</div></div></div>;
    default:
      return <div className="rounded-3xl bg-gradient-to-br from-[#dbe5ef] via-white to-[#f5ead5] p-8 md:p-10"><span className="eyebrow">WELCOME / INTERNATIONAL STUDENTS</span><p className="display mt-8 max-w-xl text-5xl leading-tight text-[#10233f]">Your next chapter starts here.</p><div className="mt-10 grid gap-3 sm:grid-cols-3">{[["01","ADMISSIONS"],["02","ACADEMIC LIFE"],["03","PRACTICAL GUIDE"]].map(([n,t])=><div key={n} className="rounded-xl border border-[#d7dde5] bg-white/75 p-5"><span className="display text-3xl text-[#c8a66a]">{n}</span><p className="mt-5 text-[9px] tracking-widest text-[#334760]">{t}</p></div>)}</div></div>;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!locales.includes(rawLocale as Locale)) return {};
  const locale = rawLocale as Locale;
  const section = sections.find((item) => item.slug === slug);
  if (!section) return {};
  return {
    title: section.title[locale],
    description: section.summary[locale],
    alternates: {
      canonical: "/" + locale + "/sections/" + slug,
      languages: {
        uz: "/uz/sections/" + slug,
        en: "/en/sections/" + slug,
        ru: "/ru/sections/" + slug
      }
    }
  };
}

export default async function SectionPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const p = await params;
  if (!locales.includes(p.locale as Locale)) notFound();
  const locale = p.locale as Locale;
  const section = sections.find((item) => item.slug === p.slug);
  if (!section) notFound();
  const t = copy[locale];

  return (
    <main id="main-content">
      <div className="bg-[#091b31] text-white">
        <Header locale={locale} />
        <section className="hero-grid relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute -right-32 top-0 h-[480px] w-[480px] rounded-full border border-[#d7b77d]/20" />
          <div className="shell relative">
            <Link href={"/" + locale + "#sections"} className="focus text-xs text-white/55 hover:text-white">← {t.back}</Link>
            <p className="eyebrow mt-14">INTERNATIONAL AREA · {section.number}</p>
            <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.05] md:text-7xl">{section.title[locale]}</h1>
            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/60 md:text-base">{section.summary[locale]}</p>
          </div>
        </section>
      </div>
      <section className="shell py-12 md:py-16"><SectionVisual slug={section.slug} /></section>
      <section className="shell grid gap-12 pb-20 md:grid-cols-[.65fr_1.35fr] md:pb-28">
        <div><p className="eyebrow">{section.category[locale]}</p><p className="display mt-4 text-7xl text-[#c8a66a]">{section.number}</p></div>
        <div className="max-w-3xl">
          <h2 className="display text-3xl md:text-4xl">{t.overview}</h2>
          <p className="mt-6 text-sm leading-8 text-slate-600">{section.detail[locale]}</p>
          {section.staff && (
            <div className="mt-10">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div><p className="eyebrow">PEOPLE & CONTACTS</p><h3 className="display mt-3 text-2xl md:text-3xl">{t.teamHeading}</h3></div>
                <p className="text-xs text-slate-400">{section.staff.length} listed staff members</p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {section.staff.map((person) => (
                  <article key={person.name} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h4 className="text-sm font-semibold text-[#10233f]">{person.name}</h4>
                    <p className="mt-2 text-[10px] font-bold tracking-wide text-[#a17b40]">{person.title[locale]}</p>
                    {person.email && <a href={"mailto:" + person.email} className="focus mt-3 inline-block break-all text-xs text-slate-500 underline decoration-[#c8a66a]/60 underline-offset-4 hover:text-[#10233f]">{person.email}</a>}
                  </article>
                ))}
              </div>
              <p className="mt-3 text-[10px] leading-5 text-slate-400">Source: TSUE official staff directory. Roles and contacts may change; confirm before contacting.</p>
            </div>
          )}
          <div className="mt-12">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div><p className="eyebrow">SOURCE DIRECTORY</p><h3 className="display mt-3 text-2xl md:text-3xl">{t.sourceHeading}</h3></div>
              <p className="max-w-xs text-xs leading-6 text-slate-500">{t.sourceText}</p>
            </div>
            <div className="mt-6 grid gap-4">
              {section.sources.map((source) => (
                <article key={source.url} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(16,35,63,.04)]">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[9px] font-bold tracking-[.18em] text-[#a17b40]">
                      {source.status === "archive" ? t.archive : source.status === "upcoming" ? t.upcoming : t.reference}
                    </span>
                    <time className="text-[10px] text-slate-400">{source.date}</time>
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-[#10233f]">{source.title[locale]}</h4>
                  <p className="mt-2 text-xs leading-6 text-slate-500">{source.description[locale]}</p>
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="focus mt-5 inline-flex items-center gap-2 rounded-full border border-[#c8a66a]/60 px-4 py-2.5 text-[10px] font-semibold text-[#89652e] transition hover:bg-[#10233f] hover:text-white">
                    {t.openSource} <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-10 rounded-2xl border border-[#e6dcc8] bg-[#fbf8f1] p-6">
            <p className="text-xs leading-6 text-slate-600">{t.note}</p>
          </div>
          <Link href={"/" + locale + "#sections"} className="focus mt-9 inline-flex rounded-full bg-[#10233f] px-6 py-3 text-xs text-white hover:bg-[#1d3b60]">← {t.back}</Link>
        </div>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
