"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/data/sections";
const labels:Record<Locale,{about:string;areas:string;contact:string}>={uz:{about:"Portal haqida",areas:"Yo‘nalishlar",contact:"Aloqa"},en:{about:"About",areas:"Sections",contact:"Contact"},ru:{about:"О портале",areas:"Разделы",contact:"Контакты"}};
export function Header({locale}:{locale:Locale}) {
 const pathname=usePathname();
 const href=(next:Locale)=>pathname.replace(/^\/(uz|en|ru)(?=\/|$)/,"/"+next);
 const t=labels[locale];
 return <header className="relative z-20 border-b border-white/10 bg-[#091b31] text-white">
  <div className="shell flex h-11 items-center justify-between text-[10px] tracking-[.18em] text-white/55"><span>GLOBAL CONNECTIONS · TSUE</span><div className="flex gap-3">{(["uz","en","ru"] as Locale[]).map(code=><Link key={code} href={href(code)} className={"focus rounded px-1 py-1 uppercase "+(locale===code?"text-[#dfc18d]":"hover:text-white")} aria-current={locale===code?"page":undefined}>{code}</Link>)}</div></div>
  <div className="shell flex min-h-[76px] items-center justify-between gap-4 border-t border-white/10">
   <Link href={"/"+locale} className="focus flex items-center gap-3 rounded"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8a66a]/65 font-serif text-lg text-[#dfc18d]">G</span><span><b className="block text-[13px] tracking-[.18em]">TSUE <span className="text-[#d7b77d]">GLOBAL</span></b><small className="mt-1 block text-[8px] tracking-[.23em] text-white/45">INTERNATIONALIZATION</small></span></Link>
   <nav className="hidden gap-8 text-xs text-white/65 md:flex"><Link href={"/"+locale+"#about"}>{t.about}</Link><Link href={"/"+locale+"#sections"}>{t.areas}</Link><Link href={"/"+locale+"#contact"}>{t.contact}</Link></nav>
   <Link href={"/"+locale+"#sections"} className="focus rounded-full border border-[#c8a66a]/60 px-4 py-2.5 text-[10px] tracking-wide text-[#dfc18d] hover:bg-[#c8a66a] hover:text-[#091b31]">DISCOVER ↗</Link>
  </div>
 </header>;
}
