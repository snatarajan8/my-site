export default function Contributions() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Initiative
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        Cross-Team Contributions
      </h1>
      <p className="mt-1 text-sm text-zinc-400">2023 – 2026</p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          {"A handful of contributions in repos owned by other teams. None are large changes, but each one had a concrete reason behind it."}
        </p>

        <p>
          {"Fixed a broken CircleCI build in a shared Python tooling repo after an Artifactory cutover. The owning team was slow to respond and the break was blocking other people. One-line fix, unblocked immediately."}
        </p>

        <p>
          {"Applied the dive reliability tooling to another team's production Argo Rollouts spec — the first real-world demonstration of what auto-generated progressive delivery analysis looks like on production config, rather than just in documentation. The intention was to show teams what the tooling actually produces, not just describe it."}
        </p>

        <p>
          {"Enabled Cloud Run APIs in the Falcon prod GCP project via a one-line Terraform change. A small diff with disproportionate impact — without it, none of the Falcon Cloud product line could run in production."}
        </p>
      </div>
    </article>
  );
}
