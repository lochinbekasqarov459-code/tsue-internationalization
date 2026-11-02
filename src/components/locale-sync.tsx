"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function LocaleSync() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = pathname.split("/")[1];
    document.documentElement.lang = ["uz", "en", "ru"].includes(locale) ? locale : "uz";
  }, [pathname]);

  return null;
}
