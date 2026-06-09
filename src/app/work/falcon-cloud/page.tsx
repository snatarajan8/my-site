export default function FalconCloud() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Initiative
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        Falcon Cloud / Cloud Run
      </h1>
      <p className="mt-1 text-sm text-zinc-400">Dec 2025 – present</p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          {"Before Falcon Cloud, Cloud Run at Credit Karma was a gap. Teams deploying to Cloud Run had no progressive rollout support, no centralized audit trail, no safety gates — none of the guarantees that Kubernetes services had through Falcon. I extended Falcon to close that gap. Teams that previously had no safe deploy path for Cloud Run now have one."}
        </p>

        <p>
          {"The architecture is cleanly split. A falcon-cloud agent runs inside the existing Falcon Service binary and handles orchestration. A standalone falcon-cloud-run-deployer Cloud Run service receives instructions via Pub/Sub and executes against the GCP API. The deployer is stateless — it only acts on authenticated, KMS-signed messages from the agent. Without a valid signature, the message is dropped. This means the deployer can run with minimal permissions and no persistent state of its own."}
        </p>

        <p>
          {"Two non-obvious constraints shaped the design. Eventarc auto-creates Pub/Sub subscriptions with retry behavior you can't configure — so non-retryable errors had to return HTTP 200 rather than error codes to prevent the subscription from redelivering them indefinitely. Cloud Run's load balancer also enforces a deadline on the first response byte: any outbound I/O before writing the response header risks blowing the deadline and triggering redelivery. The fix was to write the 200 header immediately and publish error events asynchronously."}
        </p>

        <p>
          {"Every deploy publishes separate messages for us-central1 and us-east4, so dual-datacenter support is on by default. I used a personal Cloud Run service — a trivial app that returns bird facts — to absorb all the early failures before asking real product teams to onboard. Every new action (deploy, enable, disable, scale, mTLS verification) was validated there first."}
        </p>

        <p>
          {"The full stack touches about ten repos: the agent and deployer code, Spanner audit tables for every action, KMS key provisioning, Pub/Sub topics and subscriptions, Eventarc routing, IAM bindings, binary auth attestors, mTLS certificates between master and cloud agent, and the React frontend controls. Deploy, enable, disable, scale, and audit trail are all wired. Still shipping."}
        </p>
      </div>
    </article>
  );
}
