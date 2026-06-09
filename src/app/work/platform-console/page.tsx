export default function PlatformConsole() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Initiative
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        Platform Console
      </h1>
      <p className="mt-1 text-sm text-zinc-400">Mar 2023 – May 2026</p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          {"Platform Console is Credit Karma's internal workflow engine for multi-system operations. When a team needs to provision a new environment, onboard a service to Falcon Cloud, or run a compliance-gated change, they don't file tickets and wait — they fill out a form, and PlatCon coordinates the calls across Falcon, GCP, and other systems automatically. The engine tracks progress, enforces SLAs, alerts owners when runs are stuck, and provides controls for managing in-flight workflows. I own the Node/TypeScript backend, the React frontend, and the workflow definitions library."}
        </p>

        <p>
          {"The SLA alerting system is the piece that required the most sustained iteration. A control loop polls for runs approaching or past their SLA threshold and fires notifications — but doing that naively means the same alert fires on every poll cycle. I built a dedup table so each alert fires once, added business-hours-only filtering so engineers don't get paged at midnight for non-critical overruns, and wired child-workflow alerts to propagate to parent owners so nothing gets lost in a multi-step run. Each iteration came from a real complaint from a real team."}
        </p>

        <p>
          {"The catalog-source system is the piece I'm most satisfied with. Workflow form inputs can be backed by live Falcon metadata pulled from GCS — real environment names, real service names, real cluster lists, not hardcoded values that rot as infrastructure changes. I extended this to be generic: any team can wire their own data into PlatCon form inputs without modifying the engine. It turned a Falcon-specific integration into a platform capability."}
        </p>

        <p>
          {"Other contributions: user-approval gates for compliance-sensitive workflows, workflow restart from failed state, a recheck-status button for runs stuck in terminal failure, and a custom Postgres aggregate function that combines workflow statuses inside the database query. Most engineers don't reach for database aggregates in application code, but here the data was already at the database and the combine step was straightforward — pulling it to the application layer would have been the wrong call."}
        </p>
      </div>
    </article>
  );
}
