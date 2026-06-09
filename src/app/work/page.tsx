export default function Work() {
  return (
    <article className="max-w-2xl">
      <p
        className="text-accent"
        style={{
          fontFamily: "var(--font-ibm-plex-mono), monospace",
          fontSize: "10.5px",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        Platform Engineering
      </p>
      <h1
        className="mt-2 text-ink"
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: "1.875rem",
          fontWeight: 600,
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
        }}
      >
        My Work
      </h1>

      <div className="mt-8 space-y-6 text-ink-muted leading-relaxed">
        <p>
          {"Falcon is Credit Karma's internal platform for deploying and releasing services. Every Kubernetes deployment at CK flows through it — progressive rollouts via Argo, database migrations, multi-region deployments across US and UK, and the software catalog that engineers rely on to understand what's running where. I've been the primary engineer on it for over three years."}
        </p>

        <p>
          {"What that means in practice: I own the Go backend, the React frontend, the GitOps infrastructure, the workflow engine teams use to provision environments, and the reliability tooling for setting up progressive delivery analysis. When something new needs to be in Falcon — a new deploy target, a new safety guarantee, a new automation — I build it."}
        </p>

        <h2
          className="text-ink pt-2"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "1.125rem",
            fontWeight: 500,
          }}
        >
          {"What I've shipped"}
        </h2>

        <p>
          {"The biggest recent project is Falcon Cloud — extending Falcon to deploy Cloud Run services with the same safety guarantees that Kubernetes services already have: progressive rollouts, audit trail, dual-datacenter support, mTLS verification between components, and KMS-signed messages so the deployer only acts on authenticated instructions. I built it alone across about ten repos. Teams that previously had no safe deploy path for Cloud Run now have one."}
        </p>

        <p>
          {"Before that, the Spanner DB migration story took three years to close properly. The tooling now gives every service team a safe, automated path for running schema changes as part of their deploy — with regional awareness so UK services use the right credentials, and level-triggered KSA reconciliation so identity bindings don't drift silently after the first write."}
        </p>

        <p>
          {"The observability and events pipeline connects Falcon deploys to New Relic dashboards, Slack notifications, and the Platform Console catalog. Without it, teams lose deploy history and the on-call engineer loses visibility during incidents."}
        </p>

        <h2
          className="text-ink pt-2"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "1.125rem",
            fontWeight: 500,
          }}
        >
          Tech
        </h2>

        <p>
          {"Go is my primary language, four-plus years in production. TypeScript and Node for the Platform Console backend and React frontend. Python for the dive cktool plugin. SQL for Postgres and Spanner."}
        </p>

        <p>
          {"Infrastructure: Kubernetes (controllers, informers, CRDs, Helm, cert-manager, Argo Rollouts), GCP (Cloud Run, Pub/Sub, Eventarc, Spanner, KMS, IAM, Secret Manager, binary auth), Terraform across several repos, CircleCI, FluxCD-style GitOps. Observability mostly through New Relic — NRQL, custom events, alerts, tracing segments."}
        </p>

        <h2
          className="text-ink pt-2"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "1.125rem",
            fontWeight: 500,
          }}
        >
          {"How I work"}
        </h2>

        <p>
          {"Every structural change goes behind a feature flag before it becomes the default. Spanner migrations, the Redis cache replacement, informers, GSM secrets, KMS verification — all of it started behind a toggle. The flag stays until the rollout is complete and the old path is dead."}
        </p>

        <p>
          {"I use a personal canary service called bird-facts to validate platform changes before they reach services with real users. It's a trivial Node service that returns bird trivia, but it runs through every Falcon code path. If something breaks on bird-facts, I find out before anyone else does."}
        </p>

        <p>
          {"Most of my PR descriptions have a Summary, a Why, a Risk section, and a Testing section. Writing out the why forces you to notice when the why is weak."}
        </p>
      </div>
    </article>
  );
}
