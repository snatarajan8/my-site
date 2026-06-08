export default function PlatformConsole() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Initiative
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        Platform Console
      </h1>
      <p className="mt-1 text-sm text-zinc-400">Mar 2023 – May 2026 · 59 PRs + 24 on workflow definitions</p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          {"Platform Console (PlatCon) is Credit Karma's internal Backstage-style workflow engine. Engineers fill out a form, the engine runs a multi-step workflow calling external systems (Falcon, GCP, etc.), and the engine tracks progress, alerts on SLAs, and exposes controls for managing in-flight runs. I own the backend and frontend, plus the workflow definitions library."}
        </p>

        <p>
          {"The SLA alerting subsystem accumulated across a dozen PRs — a control loop polling for violations, configurable approaching-SLA notifications with business-hours-only filtering, an alert dedup table so the same alert doesn't fire on every poll cycle, child-workflow alerts propagating to parent owners, intraday workflow handling, and per-run alert disabling. Each fix came from a real complaint."}
        </p>

        <p>
          {"The catalog-source system is the piece I'm most happy with. Workflow form inputs can be backed by live Falcon metadata pulled from GCS — real environment names, real service names, real cluster lists, not hardcoded values. I extended this so any catalog resource type can back any input field, not just Falcon data. Other teams can wire their own data into PlatCon forms without touching the engine."}
        </p>

        <p>
          {"One performance PR worth calling out: #385 added a custom Postgres aggregate function that combines workflow statuses inside the database query rather than pulling raw data and processing it on application pods. Most app engineers don't reach for database aggregates. Here it was the right tool — the query was already going to the database, and the combine step was straightforward."}
        </p>

        <p>
          {"Other additions: a user-approval executor for compliance-flavored gates (#636, #656), workflow restart from failed state (#608), and a recheck-status button for runs stuck in terminal failure (#606). Plus the docs-gap audit — #81 audited the platform-console-docs site for missing sections, and #82 filled seven of them in one shot."}
        </p>
      </div>
    </article>
  );
}
