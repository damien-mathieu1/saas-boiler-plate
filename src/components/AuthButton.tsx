import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { ProfileMenu } from "./ProfileMenu";
import { signOut } from "@/action";
import { NotLoggedMenu } from "./NotLoggedMenu";
import { Locale } from "@/i18n-config";

export default async function AuthButton({
  params,
}: {
  params: { lang: Locale };
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <ProfileMenu signOut={signOut} params={params} />
    </div>
  ) : (
    <NotLoggedMenu params={params} />
  );
}
