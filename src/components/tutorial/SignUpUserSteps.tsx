import Link from "next/link";
import Step from "./Step";
import { Dictionary } from "../../../dictionaries/fr";
import { Locale } from "@/i18n-config";

export default function SignUpUserSteps({
  t,
  params: { lang },
}: {
  t: Dictionary["homePage"]["signUpUserSteps"];
  params: { lang: Locale };
}) {
  return (
    <ol className="flex flex-col gap-6">
      <Step title={t.signUpFirstUser}>
        <p>
          {t.signUp}{" "}
          <Link
            href={`/${lang}/login`}
            className="font-bold hover:underline text-foreground/80"
          >
            {t.signUpLink}
          </Link>{" "}
          {t.signUpLinkText}
        </p>
      </Step>
    </ol>
  );
}
