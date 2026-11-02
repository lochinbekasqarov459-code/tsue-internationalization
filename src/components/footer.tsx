import Link from "next/link";
import type {Locale} from "@/data/sections";
import {copy} from "@/data/sections";
export function Footer({locale}:{locale:Locale}) {
 return <footer id="contact" className="bg-[#091b31] py-12 text-white"><div className="shell flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><Link href={"/"+locale} className="text-sm font-bold tracking-[.2em]">TSUE <span className="text-[#d7b77d]">GLOBAL</span></Link><p className="mt-3 max-w-md text-xs leading-6 text-white/45">{copy[locale].footer}</p></div><div className="text-xs leading-6 text-white/50"><p className="tracking-[.16em]">TASHKENT · UZBEKISTAN</p><p>Internationalization portal concept</p></div></div><div className="shell mt-9 border-t border-white/10 pt-5 text-[10px] leading-5 text-white/35">{copy[locale].note}</div></footer>;
}
