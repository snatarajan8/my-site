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
          {"Credit Karma operates in both US and UK regions, and almost every Falcon feature has to work in both. The challenge isn't just deploying the same config twice — UK infrastructure has different GCP project prefixes, different cluster topologies, different network paths, and different regulatory requirements. A change that works cleanly in US-central can fail silently in UK for reasons that only surface under real traffic."}
        </p>

        <p>
          {"I've owned the UK follow-up for most of what I've shipped on Falcon. Regional awareness in the DB migration chart so UK services use UK-specific connection strings and credentials. UK-specific New Relic alerting profiles in the Argo analysis templates. Explicit UK cluster rollouts for every structural change. Debugging the Spanner project-prefix bugs that only manifested in UK environments — where the project ID uses 'ukprod' instead of 'ckprod,' a distinction that's obvious in hindsight but requires four sequential PRs to fully close once it surfaces."}
        </p>

        <p>
          {"The us-east4 expansion for Falcon Cloud follows the same discipline. Each deploy publishes separate messages for us-central1 and us-east4, with explicit configuration blocks per datacenter rather than wildcards. The mTLS rollout provisions certificates for both regions explicitly. The goal is that a second-region deployment isn't an afterthought bolted on later — it's part of the initial design."}
        </p>

        <p>
          {"When cross-team dependencies slow UK rollouts down, the pattern is: merge the US change, document the UK blocker explicitly, and follow up. Waiting indefinitely for another team to unblock is worse than shipping the US path and tracking the UK gap openly."}
        </p>
      </div>
    </article>
  );
}
