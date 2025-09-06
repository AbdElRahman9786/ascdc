"use client";

import {usePathname, useRouter} from "next/navigation";
import {useLocale} from "next-intl";

export default function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  // remove the current locale prefix from the path (so it can be reused)
  const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.push(`/${nextLocale}${pathWithoutLocale}`);
  };

  return (
    <select
      onChange={handleChange}
      value={locale}
      className="px-3 py-2 border rounded text-black shadow"
      name="language"
    >
      <option value="en">English</option>
      <option value="ar">العربية</option>
    </select>
  );
}
