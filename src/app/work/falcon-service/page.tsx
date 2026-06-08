export default function FalconService() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Initiative
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        Falcon Service (Go Backend)
      </h1>
      <p className="mt-1 text-sm text-zinc-400">Feb 2023 – May 2026 · 202 PRs</p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          {"Falcon's Go backend. A single binary that runs in four modes: Master (the central API in admin clusters), Agent (runs in every member cluster, executes deploys via kubectl and Helm), Events (processes a Pub/Sub topic per environment), and Catalog Refresher (queries agents for Kubernetes state and publishes to the software catalog). I added a fifth mode in December 2025 for Cloud Run."}
        </p>

        <p>
          {"The most interesting structural work was the caching rebuild in mid-2024. The original approach was polling Kubernetes for namespaces, ckroutes, and network policies. I explored a shared informer factory, decided it was more complex than the problem warranted, and landed on a CacheController abstraction that fronts get/list calls behind a feature flag. The rollout touched six cluster-config PRs and walked through admin, bulk, member, and vault clusters with explicit memory bumps for each zone based on observed New Relic numbers. The rollout ran from August through September 2025."}
        </p>

        <p>
          {"The Spanner audit trail was the biggest single push — a multi-table model with ServiceActions, ComponentEvents, EnvironmentEvents, and response tables. I designed the schema, shipped the migration logic with retry-on-startup, built out the read APIs across about 15 PRs, and eventually exposed the data in the React frontend. The schema evolved significantly through review before it stabilized."}
        </p>

        <p>
          {"A few late PRs are worth noting for engineering taste: graceful-shutdown drain that returns 503 on /readiness for a configurable window after SIGTERM, so requests stop routing before the pod disappears (#3906). Consolidated multiple kubernetes.New() calls into a shared client to eliminate duplicate informer overhead (#3835). Made RegisterCloudRunService idempotent (#3867). Masked secret env-var values in API responses (#3890)."}
        </p>

        <p>
          {"Two PRs are just pain documented in commit messages. I called them 'post-quantum cryptographic lightning' — a TLS issue introduced by Go's post-quantum key exchange, hitting twice, months apart. The second PR is titled 'the second strike of post quantum cryptographic lightning.' The Go upgrade attempts (1.23, 1.24) each got reverted due to the dependency chain complexity of moving a service this foundational."}
        </p>
      </div>
    </article>
  );
}
