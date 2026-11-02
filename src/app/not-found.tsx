import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#091b31] px-6 text-white">
      <div className="max-w-lg text-center">
        <p className="eyebrow">404 · PAGE NOT FOUND</p>
        <h1 className="display mt-5 text-6xl">Lost in the map.</h1>
        <p className="mt-5 text-sm leading-7 text-white/60">This page may have moved or the address may be incorrect.</p>
        <Link href="/uz" className="focus mt-8 inline-flex rounded-full bg-[#c8a66a] px-6 py-3 text-xs font-bold text-[#091b31]">Back to the portal ↗</Link>
      </div>
    </main>
  );
}
