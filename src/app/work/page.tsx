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
          {"I'm a platform engineer. For the past three and a quarter years at Credit Karma, I've been the primary engineer on Falcon — their internal deploy and release control plane. 859 pull requests across 40 repositories. 99% close rate."}
        </p>

        <p>
          {"Falcon runs Kubernetes deployments, progressive rollouts via Argo, database migrations, and since December 2025, GCP Cloud Run services across US and UK regions. Most of my output clusters around three repos: paas_cluster-config (the GitOps source of truth, 302 PRs), de_falcon-service (the Go backend, 202 PRs), and de_falcon-app (the React frontend, 38 PRs). Around those I own the Platform Console workflow engine, a reliability CLI called dive, and the security layer for mTLS and KMS-signed deploys."}
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
          {"The biggest recent project is Falcon Cloud — extending Falcon from Kubernetes-only to Cloud Run. I built it alone across about 10 repos: a new agent inside falcon-service, a stateless Cloud Run deployer that receives KMS-signed Pub/Sub messages, a Spanner audit database, mTLS between the master and cloud agent, and the full IAM/Eventarc/attestor stack underneath. Started December 2025, still shipping."}
        </p>

        <p>
          {"Before that: the Spanner DB migration story took three years to close properly. I opened support behind a toggle in early 2023, ported the migration Helm chart, tracked down UK project-prefix bugs that only surfaced in production, and finally landed a level-triggered KSA-reconciliation pattern that replaced a write-once gate that had been silently drifting for years."}
        </p>

        <p>
          {"The cluster-config rollouts are less glamorous but probably more representative of the day-to-day. Every structural change — whether it's informers, mTLS, Liquibase version bumps, or GSM secrets — gets walked through testenv-member, vault, admin, prod, and UK, one cluster at a time, with per-zone memory tuning based on observed New Relic numbers. I've done this enough times that I built a CircleCI job to automate the version bump part."}
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
          {"Most of my PR descriptions have a Summary, a Why, a Risk section, and a Testing section. The ratio of description to lines of code is high. Writing out the why forces you to notice when the why is weak."}
        </p>

        <p>
          {"Every structural change goes behind a feature flag before it becomes the default. Spanner migrations, the Redis cache replacement, informers, GSM secrets, KMS verification — all of it started behind a toggle. The flag stays until the rollout is complete and the old path is dead."}
        </p>

        <p>
          {"I use a personal canary service called bird-facts to validate platform changes before they reach services with real users. It's a trivial Node service that returns bird trivia, but it runs through every Falcon code path. If something breaks on bird-facts, I find out before anyone else does."}
        </p>

        <p>
          {"When my own tooling breaks, I commit the fix immediately. Not in a batch, right then. The dev loop is part of the work."}
        </p>
      </div>
    </article>
  );
}
