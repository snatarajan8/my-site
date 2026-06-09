export default function FalconService() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Initiative
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        Falcon Service (Go Backend)
      </h1>
      <p className="mt-1 text-sm text-zinc-400">Feb 2023 – May 2026</p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          {"Falcon Service is the Go binary at the center of Credit Karma's deploy and release infrastructure. It runs in every cluster across US and UK environments, in four modes: the master API that orchestrates all deploys, the agent that executes deployments on each cluster via kubectl and Helm, the events processor that drives async pipeline steps, and the catalog refresher that publishes live service state to the internal software catalog. Every Kubernetes deployment at CK passes through this binary."}
        </p>

        <p>
          {"The caching rebuild in 2024–2025 was the most significant structural change I made to the backend. The original approach polled the Kubernetes API server directly for namespaces, routes, and network policies on every request. Under load this caused unnecessary API server pressure and inconsistent behavior when the informer cache warmed slowly. I replaced it with a CacheController abstraction that fronts all get/list calls behind a unified interface, deployed it behind a feature flag, and rolled it out cluster-by-cluster with memory tuning based on observed New Relic metrics per zone. The result is a service that reads Kubernetes state once and serves it from cache."}
        </p>

        <p>
          {"The Spanner audit trail gave every team a reliable history of what Falcon did and when. I designed the multi-table schema — ServiceActions, ComponentEvents, EnvironmentEvents — built the write path with retry-on-startup, added the read APIs, and exposed the data in the React frontend. Before this, diagnosing a deploy failure required digging through logs. Now there's a structured record of every action."}
        </p>

        <p>
          {"In late 2025 I added a fifth mode: the falcon-cloud agent, which extended Falcon from Kubernetes-only to Cloud Run. The agent publishes KMS-signed Pub/Sub messages to a standalone deployer service. This is the same binary, extended rather than forked, so Cloud Run deployments inherit all of Falcon's existing authentication, audit, and orchestration infrastructure."}
        </p>

        <p>
          {"A few smaller changes worth noting for what they signal about how I treat foundational infrastructure: graceful-shutdown drain that returns 503 on /readiness for a configurable window after SIGTERM, so requests stop routing before the pod disappears. Consolidated Kubernetes client initialization to eliminate duplicate informer overhead. Made Cloud Run service registration idempotent. Masked secret env-var values in API responses before they could be logged or returned to callers."}
        </p>
      </div>
    </article>
  );
}
