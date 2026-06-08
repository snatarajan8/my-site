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
          {"The DB migration arm of Falcon spans de_db-migrate-chart (the Helm chart that renders the migration Job), de_falcon-service (the wiring code), and paas_cluster-config (the version bumps and rollout config). Supports MySQL and Spanner, handles secret-manager lookups, and manages workload identity service-account bindings."}
        </p>

        <p>
          {"Regional awareness came first in early 2023 — the chart needed to pass region to the migration job so UK runs could use UK-specific connection strings and credentials. WLIDv2 (Workload Identity v2) followed a few months later: additional chart values and a per-job toggle to switch from node service account to workload identity."}
        </p>

        <p>
          {"The Spanner migration push ran from late 2023 through most of 2024. I opened support behind a toggle, adapted the chart, then spent several PRs debugging UK-specific issues. UK projects use 'ukprod' as a project prefix, not 'ckprod.' That sounds obvious in hindsight but it only surfaces in production, and closing it required four sequential PRs as each edge case revealed the next."}
        </p>

        <p>
          {"The final piece, de_db-migrate-chart#50, replaced a write-once 'does this KSA exist? if so, skip' gate with a reconciliation loop that re-checks and re-applies the KSA annotation on every release. The old design meant annotations silently drifted after the first write. The new design is level-triggered — it re-owns the annotation every time, regardless of prior state."}
        </p>
      </div>
    </article>
  );
}
