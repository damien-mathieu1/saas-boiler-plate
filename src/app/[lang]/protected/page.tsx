import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default async function ProtectedPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = await getDictionary(lang);

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect(`/${lang}/login`);
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      {/* <div className="w-full">
        <div className="py-6 font-bold bg-gray-50   text-center">
          This is a protected page that you can only see as an authenticated
          user
        </div>
      </div> */}

      <Alert className="w-2/12 mt-12 bg-alert-background text-alert-foreground">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Logged in !</AlertTitle>
        <AlertDescription>
          You can only see this page as an authenticated user.
        </AlertDescription>
      </Alert>

      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <Header t={t.homePage.header} />
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          <FetchDataSteps />
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}
