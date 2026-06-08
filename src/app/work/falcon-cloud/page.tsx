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
          {"Three years into building Falcon, I started a new product line: extending it to deploy Cloud Run services alongside Kubernetes. The architecture is cleanly split — a falcon-cloud agent inside the existing falcon-service binary, and a standalone falcon-cloud-run-deployer Cloud Run service that receives instructions via Pub/Sub and executes against the GCP API. I built both sides."}
        </p>

        <p>
          {"The message contract is KMS-signed. Falcon generates a signature on the publish side; the deployer verifies it before acting on anything. I originally had SHA256 on both sides but caught a mismatch early and aligned both to SHA512. The messages flow through Eventarc, and one constraint I hit was that Eventarc auto-creates Pub/Sub subscriptions with retry behavior you can't configure. The fix: return HTTP 200 for non-retryable errors so the subscription stops retrying them."}
        </p>

        <p>
          {"The other non-obvious piece: Cloud Run's load balancer enforces a deadline on the first response byte. If your handler does any outbound I/O before writing the response header, you can blow the deadline and trigger redelivery. The fix was to write the 200 header immediately and publish any error events asynchronously afterward."}
        </p>

        <p>
          {"The full stack touches about 10 repos: agent code in falcon-service, the deployer service, Spanner audit tables tracking every action, KMS key provisioning in vault_crypto-kms, Pub/Sub topics and subscriptions, Eventarc routing, IAM bindings, binary auth attestors, mTLS certificates between master and the cloud agent, and the React frontend controls. I used a personal Cloud Run canary service (de_bird-facts-cloud-run) to absorb every early failure before asking real product teams to onboard."}
        </p>

        <p>
          {"Deploy supports dual-datacenter by default — each deploy publishes separate messages for us-central1 and us-east4. Enable, disable, scale, and audit trail are all wired. Still shipping."}
        </p>
      </div>
    </article>
  );
}
