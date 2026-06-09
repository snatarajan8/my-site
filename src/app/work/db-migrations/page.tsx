export default function DbMigrations() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Initiative
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        DB Migration Tooling
      </h1>
      <p className="mt-1 text-sm text-zinc-400">Mar 2023 – May 2025</p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          {"Running database migrations safely inside a deploy pipeline is harder than it looks. The migration job needs regional awareness so UK services connect to the right databases, correct workload identity bindings so the job runs with the right GCP service account, and credentials pulled from Secret Manager rather than hardcoded values. If any of this drifts between releases, the migration fails or runs with the wrong identity — quietly, in production."}
        </p>

        <p>
          {"Falcon's DB migration arm handles MySQL and Spanner across US and UK environments. It manages the Helm chart that renders the migration Job, the wiring inside Falcon Service, and the GitOps configuration. I've owned all three layers. Teams using Falcon for schema changes get regional awareness, secret-manager credential lookup, and workload identity management without having to wire any of it themselves."}
        </p>

        <p>
          {"Spanner support was the hardest part to land. I opened the feature behind a toggle in late 2023, adapted the chart, and then spent months debugging UK-specific issues — UK GCP projects use 'ukprod' as a project prefix, not 'ckprod,' a distinction that only surfaces in production and required four sequential PRs to fully close as each edge case revealed the next."}
        </p>

        <p>
          {"The most important structural fix replaced a write-once identity gate with a level-triggered reconciliation loop. The old design checked whether a Kubernetes service account annotation existed and skipped writing it if it did — which meant annotations could drift silently after the first write. The new design re-applies the annotation on every release, regardless of prior state. It re-owns the configuration every time rather than assuming it's still correct."}
        </p>
      </div>
    </article>
  );
}
