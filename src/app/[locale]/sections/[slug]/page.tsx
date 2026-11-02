import Link from "next/link";
import {notFound} from "next/navigation";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import {copy,locales,sections,type Locale} from "@/data/sections";
export function generateStaticParams(){return locales.flatMap(locale=>sections.map(section=>({locale,slug:section.slug})));}
export default async function SectionPage({params}:{params:Promise<{locale:string;slug:string}>}) {
 const p=await params;if(!locales.includes(p.locale as Locale))notFound();const locale=p.locale as Locale;const section=sections.find(s=>s.slug===p.slug);if(!section)notFound();const t=copy[locale];
 return <main><div className="bg-[#091b31] text-white"><Header locale={locale}/><section className="hero-grid relative overflow-hidden py-20 md:py-28"><div className="pointer-events-none absolute -right-32 top-0 h-[480px] w-[480px] rounded-full border border-[#d7b77d]/20"/><div className="shell relative"><Link href={"/"+locale+"#sections"} className="focus text-xs text-white/55 hover:text-white">← {t.back}</Link><p className="eyebrow mt-14">INTERNATIONAL AREA · {section.number}</p><h1 className="display mt-6 max-w-4xl text-5xl leading-[1.05] md:text-7xl">{section.title[locale]}</h1><p className="mt-7 max-w-2xl text-sm leading-8 text-white/60 md:text-base">{section.summary[locale]}</p></div></section></div>
 <section className="shell grid gap-12 py-20 md:grid-cols-[.65fr_1.35fr] md:py-28"><div><p className="eyebrow">{section.category[locale]}</p><p className="display mt-4 text-7xl text-[#c8a66a]">{section.number}</p></div><div className="max-w-3xl"><h2 className="display text-3xl md:text-4xl">{t.status}</h2><p className="mt-6 text-sm leading-8 text-slate-600">{section.detail[locale]}</p><div className="mt-10 rounded-2xl border border-[#e6dcc8] bg-[#fbf8f1] p-6"><p className="text-xs font-bold tracking-wide text-[#8f7040]">{t.status}</p><p className="mt-2 text-xs leading-6 text-slate-600">{t.statusText}</p></div><Link href={"/"+locale+"#sections"} className="focus mt-9 inline-flex rounded-full bg-[#10233f] px-6 py-3 text-xs text-white hover:bg-[#1d3b60]">← {t.back}</Link></div></section><Footer locale={locale}/></main>;
}
