import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Locale } from "@/i18n-config";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "../login/submit-button";
import { ToastCall } from "@/components/ToastCall";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function LoginForm({
  searchParams,
  params: { lang },
}: {
  searchParams: { message: string };
  params: { lang: Locale };
}) {
  const signUp = async (formData: FormData) => {
    "use server";
    console.log("formData", formData);
    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
        data: {
          lang,
          first_name: formData.get("first-name") as string,
          last_name: formData.get("last-name") as string,
        },
      },
    });

    if (error) {
      console.error(error);
      return redirect(`/${lang}/login?message=Error during user registration`);
    }

    return redirect(
      `/${lang}/signup?message=Check email to continue sign up process`
    );
  };
  return (
    <div className="h-svh items-center flex">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input name="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input name="last-name" placeholder="Robinson" required />
              </div>
            </div>
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
              <Label htmlFor="password">Password</Label>
              <Input name="password" type="password" />
            </div>
            <SubmitButton formAction={signUp} pendingText="Signin Up...">
              Create an account
            </SubmitButton>
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href={`/${lang}/login`} className="underline">
                Sign in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
      {searchParams?.message && (
        <ToastCall message={searchParams.message} variant="destructive" />
      )}
    </div>
  );
}
