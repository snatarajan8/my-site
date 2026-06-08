export default function MultiRegion() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Initiative
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        Multi-Region & UK Expansion
      </h1>
      <p className="mt-1 text-sm text-zinc-400">Feb 2023 – May 2026</p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          {"Almost everything I ship has a UK follow-up. The recipe is consistent: implement in US-central, test, open a second PR targeting UK clusters, often blocked on networking tickets from another team. Sometimes those tickets move fast, sometimes they don't."}
        </p>

        <p>
          {"One PR description is honest about this: paas_cluster-config#24650 says 'got crickets on the thread so I'm gonna merge and revert if/when it doesn't work.' That's an accurate description of how you keep moving when you depend on a team that isn't responsive. You merge, monitor, and revert if needed. The alternative is waiting indefinitely."}
        </p>

        <p>
          {"The UK-specific bugs that surfaced over the years follow a pattern. The Spanner UK project prefix bug (using ckprod instead of ukprod in path construction) required four sequential PRs to fully close — each one exposed the next edge case. UK FEDS version bumps regularly lagged behind US and needed explicit catch-up PRs. The UK-specific NR profile in the Argo analysis templates required separate chart changes."}
        </p>

        <p>
          {"us-east4 expansion shows up most visibly in the mTLS work — those PRs provision certificates in both us-central1 and us-east4 explicitly rather than relying on a wildcard. The falcon-cloud config PRs follow the same pattern: separate environment blocks for each DC, provisioned together."}
        </p>
      </div>
    </article>
  );
}
