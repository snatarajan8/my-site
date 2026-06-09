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
          {"Argo Rollouts handles progressive delivery for CK's Kubernetes services — the mechanism by which a new version is deployed to a small percentage of traffic, analyzed against real metrics, and either promoted or aborted before it reaches all users. For a platform serving millions of people, this is one of the most important safety mechanisms available. My work spans the analysis templates, the Argo controller configuration, and the shared Helm chart that every CK service flows through."}
        </p>

        <p>
          {"The most impactful change was migrating from cluster-scoped AnalysisTemplates to namespace-scoped ones. Cluster-scoped resources can't be Helm-templated per namespace, which meant services couldn't customize their analysis without forking shared config. Moving to namespace-scoped templates gave every service team the ability to configure their own analysis thresholds, failure conditions, and metric queries — without modifying platform-owned resources. Every service at CK running Argo Rollouts got this capability from two PRs across two repos."}
        </p>

        <p>
          {"I also own the monitoring for the Argo controller itself. The controller is foundational enough that it needs its own alerting loop — if it goes down, deploys across all services stall silently. I added New Relic health metrics and alerts for the controller so the platform team gets paged on controller failures before any service team notices deploys aren't moving."}
        </p>

        <p>
          {"The current open work is a fix for terminating background AnalysisRuns when a rollout fully promotes. Completed rollouts were leaving analysis processes running unnecessarily, consuming resources and polluting dashboards. The fix is marked experimental and gated on staging validation — the kind of change where 'looks correct in review' isn't enough."}
        </p>
      </div>
    </article>
  );
}
