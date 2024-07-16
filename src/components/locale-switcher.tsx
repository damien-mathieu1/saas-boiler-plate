"use client";

import { usePathname } from "next/navigation";
import { i18n, type Locale } from "@/i18n-config";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { getDictionary } from "@/get-dictionary";

export default function LocaleSwitcher({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["profile"];
}) {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <RadioGroup defaultValue={pathName.split("/")[1]} className="space-y-2">
      {i18n.locales.map((locale) => {
        const localeInfo = dictionary.locales.find(
          (loc) => loc.code === locale
        );

        return (
          <div className="flex items-center space-x-2" id={locale} key={locale}>
            <RadioGroupItem
              value={locale}
              id={locale}
              onClick={() =>
                (window.location.href = redirectedPathName(locale))
              }
            />
            <Label htmlFor={locale}>{localeInfo?.name}</Label>
          </div>
        );
      })}
    </RadioGroup>
  );
}
