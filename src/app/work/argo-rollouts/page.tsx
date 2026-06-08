export default function ArgoRollouts() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Initiative
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        Argo Rollouts & Progressive Delivery
      </h1>
      <p className="mt-1 text-sm text-zinc-400">Feb 2023 – Apr 2026</p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          {"Argo Rollouts handles progressive delivery for CK's Kubernetes services. My work spans the chart (analysis templates, default args, Helm templating), the controller (cleanup behaviors, notifications, security patches), and the shared ck-service Helm chart that every CK service flows through."}
        </p>

        <p>
          {"The most significant change was migrating from ClusterAnalysisTemplates to namespace-scoped AnalysisTemplates in late 2023 and early 2024. The motivation: cluster-scoped resources can't be Helm-templated per namespace, so services couldn't customize their analysis templates without forking them. The migration touched two PRs across two repos and updated the shared ck-service chart."}
        </p>

        <p>
          {"I also own the NR alerting for the Argo controller itself — three PRs in obs_nrtf adding controller health metrics, basic alerts, and per-target incident creation. The Argo controller is foundational enough that it needs its own monitoring loop, not just service-level dashboards."}
        </p>

        <p>
          {"The most recent PR (#124) is marked EXPERIMENTAL in the title. It's a candidate fix for terminating background AnalysisRuns when a rollout is fully promoted. The description explicitly says 'Do not merge without validating against the affected services in staging.' That framing is deliberate — it signals that the change needs real validation, not just a code review."}
        </p>
      </div>
    </article>
  );
}
