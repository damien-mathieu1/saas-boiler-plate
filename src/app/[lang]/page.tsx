import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";

export default async function Index({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = await getDictionary(lang);

  const canInitSupabaseClient = async (): Promise<{
    supabaseConnected: boolean;
    user: any;
  }> => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      return {
        supabaseConnected: true,
        user,
      };
    } catch (e) {
      return {
        supabaseConnected: false,
        user: null,
      };
    }
  };

  const { supabaseConnected: isSupabaseConnected, user } =
    await canInitSupabaseClient();

  if (isSupabaseConnected && user) {
    return redirect(`/${lang}/protected`);
  }
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <Header t={t.homePage.header} />
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">{t.homePage.nextStep}</h2>
          {isSupabaseConnected ? (
            <SignUpUserSteps t={t.homePage.signUpUserSteps} params={{ lang }} />
          ) : (
            <ConnectSupabaseSteps t={t.homePage.connectSupabaseSteps} />
          )}
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
