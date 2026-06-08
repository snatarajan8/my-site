export default function ClusterConfig() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Initiative
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        GitOps / Cluster Config
      </h1>
      <p className="mt-1 text-sm text-zinc-400">Feb 2023 – May 2026 · 302 PRs</p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          {"paas_cluster-config is the source of truth for every Kubernetes object across all CK clusters — US and UK, test and prod, member, vault, admin, and trusted-front-end. FluxCD reconciles continuously from this repo via HelmRelease CRDs. My 302 PRs here are the largest concentration of output in any single repo."}
        </p>

        <p>
          {"About half those PRs are version bumps — 'Bump Falcon Service test env version to v0.54.X' — steady weekly cadence from v0.54.144 in February 2023 to v0.54.1229 in May 2026. I've done this enough times that I started building a CircleCI job that computes which services need a chart bump automatically from a configmap diff. That job is still an open PR."}
        </p>

        <p>
          {"The more interesting work is cross-region rollout choreography. Every structural change gets walked through testenv-member, vault, admin, prod, and UK clusters, one at a time, with explicit notes about what's being validated and what to roll back. The configmap cleanup migration in summer 2024 ran from June through August and touched 15 separate PRs. The mTLS rollout in May 2026 moved faster but was more security-sensitive — eight PRs, each building on the last, no outage."}
        </p>

        <p>
          {"The k8s informers rollout in 2025 is a representative example of the pattern. Each cluster got its own PR with a memory bump sized to observed New Relic numbers for that zone. Admin clusters need different tuning than member clusters, vault has different load again. You don't know the numbers until you've watched the service run after the change."}
        </p>

        <p>
          {"There are 30+ revert PRs in the corpus. Some are paired — one PR reverts, the next re-applies after a fix. Each revert is one line of diff with a clear description. Fast reverting and explicit audit trail is how you operate a high-velocity GitOps repo responsibly."}
        </p>
      </div>
    </article>
  );
}
