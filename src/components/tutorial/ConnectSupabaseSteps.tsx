import { Dictionary } from "../../../dictionaries/fr";
import Step from "./Step";

export default function ConnectSupabaseSteps({
  t,
}: {
  t: Dictionary["homePage"]["connectSupabaseSteps"];
}) {
  return (
    <ol className="flex flex-col gap-6">
      <Step title={t.createSupabase}>
        <p>
          {t.headOver}{" "}
          <a
            href="https://app.supabase.com/project/_/settings/api"
            target="_blank"
            className="font-bold hover:underline text-foreground/80"
            rel="noreferrer"
          >
            database.new
          </a>{" "}
          {t.createSupabaseProject}
        </p>
      </Step>

      <Step title={t.declareEnv}>
        <p>
          {t.renameThe}{" "}
          <span className="px-2 py-1 rounded-md bg-foreground/20 text-foreground/80">
            .env.example
          </span>{" "}
          {t.nextJsFile}{" "}
          <span className="px-2 py-1 rounded-md bg-foreground/20 text-foreground/80">
            .env.local
          </span>{" "}
          {t.populateWith}{" "}
          <a
            href="https://app.supabase.com/project/_/settings/api"
            target="_blank"
            className="font-bold hover:underline text-foreground/80"
            rel="noreferrer"
          >
            {t.yourSupabaseProject}
          </a>
        </p>
      </Step>

      <Step title={t.restartServer}>
        <p>
          {t.mayNeedToQuit}{" "}
          <span className="px-2 py-1 rounded-md bg-foreground/20 text-foreground/80">
            npm run dev
          </span>{" "}
          {t.again}
        </p>
      </Step>

      <Step title={t.refreshPage}>
        <p>{t.needRefresh}</p>
      </Step>
    </ol>
  );
}
