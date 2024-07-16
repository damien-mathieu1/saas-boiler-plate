import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import { Locale } from "@/i18n-config";
import { ToastCall } from "@/components/ToastCall";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login({
  searchParams,
  params: { lang },
}: {
  searchParams: { message: string };
  params: { lang: Locale };
}) {
  const signIn = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect(`/${lang}/login?message=${error.message}`);
    }

    return redirect(`/${lang}/protected`);
  };

  return (
    <div className="w-full h-dvh   lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input type="password" name="password" required />
            </div>
            <SubmitButton formAction={signIn} pendingText="Signing In...">
              Log in
            </SubmitButton>
          </form>

          <Button variant="outline" className="w-full">
            Login with Github
          </Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href={`/${lang}/signup`} className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-scale-down dark:brightness-[0.8] dark:grayscale"
        />
      </div>
      {searchParams?.message && (
        <ToastCall message={searchParams.message} variant="destructive" />
      )}
    </div>
  );
}
