/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MeSpDnKyjpf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use server";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getDictionary } from "@/get-dictionary";
import LocaleSwitcher from "@/components/locale-switcher";
import { Locale } from "@/i18n-config";

export default async function Component({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.profile;
  return (
    <div>
      <div className="px-4 space-y-6 sm:px-6 mt-8">
        <header className="space-y-2">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold">Meadow Richardson</h1>
          </div>
        </header>
        <div className="space-y-8">
          <Card>
            <CardContent className="space-y-6">
              <div className="space-y-2 mt-4">
                <Label htmlFor="name">{t.name}</Label>
                <Input
                  id="name"
                  placeholder="E.g. Jane Doe"
                  defaultValue="Meadow Richardson"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t.email}</Label>
                <Input id="email" placeholder={t.egEmail} />
              </div>
              <div className="space-y-2">
                <Label>{t.biography}</Label>
                <Textarea
                  id="bio"
                  placeholder={t.enterBio}
                  className="mt-1"
                  style={{ minHeight: "100px" }}
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div>{t.language}</div>
              <div>{t.choseLang}</div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <LocaleSwitcher dictionary={t} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div>{t.changePassword}</div>
              <div>{t.securityInfo}</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">{t.currentPassword}</Label>
                <Input type="password" id="current-password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">{t.newPassword}</Label>
                <Input type="password" id="new-password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">{t.confirmPassword}</Label>
                <Input type="password" id="confirm-password" />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="pt-6">
          <Button>{t.save}</Button>
        </div>
      </div>
    </div>
  );
}
