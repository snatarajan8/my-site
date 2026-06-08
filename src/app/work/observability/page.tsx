export default function Observability() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Initiative
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        Observability & Events Pipeline
      </h1>
      <p className="mt-1 text-sm text-zinc-400">May 2023 – May 2026</p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          {"The observability work connects Falcon's deploy events to New Relic, Slack notifications, and downstream automation. It runs across several repos and accumulated over three years — no single big push, just continuous expansion of what the platform emits."}
        </p>

        <p>
          {"The initial push in mid-2023 added environment to Falcon notifications and plumbed it into New Relic. A Cloud Function in obs_cloud-functions receives FalconEvents and transforms them for NR. Later additions included canary weight data from Argo Rollouts webhook payloads, so dashboards could show progressive rollout progress over time."}
        </p>

        <p>
          {"The bigger structural work was falcon-events — a dedicated Falcon component for async event processing, deployed to every cluster (US and UK, test and prod). It handles the metadata pipeline that feeds Platform Console's catalog with live service and environment data. The Pub/Sub topics, subscriptions, IAM bindings, and receiver code accumulated across about 20 PRs through mid-2024."}
        </p>

        <p>
          {"Notification surface additions: deploy-failed notifications for events-deploy failures that were previously going to an unsubscribed topic, JIRA and Slack notifications for Cloud Run actions, a dry_run_prod_alert event type with routing to the siteops team, and a cleanup pass to fix 'unknown env' messages in Slack by deriving environment from subscriber config rather than relying on string matching."}
        </p>
      </div>
    </article>
  );
}
