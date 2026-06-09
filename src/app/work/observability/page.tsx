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
          {"When a service deploys at Credit Karma, a lot of systems need to know about it — New Relic dashboards, Slack notifications, the Platform Console software catalog, and on-call alerting. The Falcon events pipeline is what makes that work. It's the connective tissue between a deploy action and everything downstream that depends on knowing it happened."}
        </p>

        <p>
          {"The centerpiece is falcon-events: a dedicated Falcon component deployed to every US and UK cluster that handles async event processing. Its primary job is feeding Platform Console's software catalog with live service and environment metadata — the source of truth for what's running where, in what configuration. Without it, the catalog goes stale and teams lose confidence in it. I built the Pub/Sub topics, subscriptions, IAM bindings, and receiver code that make this work across all environments."}
        </p>

        <p>
          {"The New Relic integration gives teams deploy-correlated visibility. Deploy events flow through a Cloud Function to NR, including canary weight data from Argo Rollouts webhook payloads — so dashboards show progressive rollout progress over time, not just a binary before/after. When an on-call engineer is investigating a regression, they can see exactly when a canary promoted and what the traffic weight was at each stage."}
        </p>

        <p>
          {"Notification routing expanded as Falcon's surface area grew. Deploy-failed notifications for events-deploy failures that were previously going to an unsubscribed topic. JIRA and Slack notifications for Cloud Run actions. A dry_run_prod_alert event type for the siteops team. Fixing 'unknown env' messages in Slack by deriving environment from subscriber config rather than relying on string matching that breaks in edge cases. Each addition came from a real gap someone noticed."}
        </p>
      </div>
    </article>
  );
}
