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
          {"Two security overhauls ran in parallel through early 2026. Both deal with trust between Falcon components that previously communicated without cryptographic verification."}
        </p>

        <p>
          {"KMS-signed Pub/Sub messages between the falcon-cloud agent and the Cloud Run deployer. Every message from the agent carries a KMS signature; the deployer verifies it before acting. I set up the keys in vault_crypto-kms, wired the signing into de_falcon-service, and implemented verification in de_falcon-cloud-run-deployer. The algorithm started as SHA256 on the signing side, caught a mismatch during review, and I aligned both to SHA512."}
        </p>

        <p>
          {"mTLS between falcon-master and falcon-cloud. This touched the GCP Certificate Authority Service (custom CA template with a SAN allowlist), cert-manager certificates provisioned via GoogleCASIssuer, and cluster-config patches to mount the certificates and configure the gRPC server. The rollout was staged — cktest first, then prod, each gated on the previous PR landing clean."}
        </p>

        <p>
          {"A path correction PR mid-rollout (paas_cluster-config#30110) is worth noting. I had the wrong mental model of the GRPCServerOptions to ServerOptions struct chain and placed the TLS config block at the wrong YAML path. The PR description walks through the struct chain explicitly so the next person doesn't make the same mistake."}
        </p>

        <p>
          {"Earlier in 2024: moved DB migration secrets to Google Secret Manager behind a toggle, then rolled it out to prod. The binary authorization attestor IAM work for the Cloud Run product line also lives in this area — granting the deployer service account the right permissions to attest image builds before Cloud Run accepts them."}
        </p>
      </div>
    </article>
  );
}
