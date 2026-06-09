export default function Security() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Initiative
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        Security: mTLS & KMS-signed Deploys
      </h1>
      <p className="mt-1 text-sm text-zinc-400">Jan 2026 – May 2026</p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          {"For most of Falcon's history, communication between components relied on network-level trust. The master could receive instructions from any process that could reach its API; a message on the Pub/Sub topic would be acted on by whoever was listening. That's workable in a tightly controlled internal network, but it doesn't hold as the platform's footprint grows and attack surface expands. Two security overhauls ran in parallel through early 2026 to address this."}
        </p>

        <p>
          {"KMS-signed messages for Falcon Cloud: every message the falcon-cloud agent publishes carries a KMS signature generated at publish time. The Cloud Run deployer verifies the signature before executing any action — enabling, disabling, scaling, or deploying a service. Without a valid signature from the known key, the message is dropped. I set up the keys in GCP, wired signing into Falcon Service, and implemented verification in the deployer. The signing algorithm went through one correction during review — SHA256 on the signing side didn't match SHA512 on the verification side — caught before production."}
        </p>

        <p>
          {"mTLS between falcon-master and falcon-cloud: certificates provisioned via GCP Certificate Authority Service using a custom CA template with a SAN allowlist, managed by cert-manager via GoogleCASIssuer, and mounted to the Falcon Service pods. The gRPC server enforces mutual TLS on all connections from the cloud agent. The rollout was staged — cktest environments first, then production — with each step gated on the previous landing clean and the connection verified before proceeding."}
        </p>

        <p>
          {"Earlier security work in 2024: moved DB migration secrets from chart values to Google Secret Manager behind a feature flag, then rolled it out to production. Binary auth attestor IAM bindings for the Cloud Run deployer, so Cloud Run only accepts images that have been attested as part of the build process."}
        </p>
      </div>
    </article>
  );
}
