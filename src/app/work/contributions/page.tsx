export default function Contributions() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Initiative
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        Cross-Team Contributions
      </h1>
      <p className="mt-1 text-sm text-zinc-400">2023 – 2026</p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          {"A handful of single-PR contributions in repos owned by other teams. Each is small, but the reason behind each one is worth noting."}
        </p>

        <p>
          {"de_python#28 fixed a CircleCI build break after an Artifactory cutover. The fix was one line. The owning team was slow to respond and the break was blocking other people, so I just did it."}
        </p>

        <p>
          {"vault_intuit-matching-service#1547 added dive-generated reliability features to another team's progressive rollout spec. I noted in the PR body that I'd reach out on Slack to discuss. The intention was to show what the new Falcon analysis tooling actually does on real production config, not just in documentation."}
        </p>

        <p>
          {"de_protoc-gen-registration#2 updated a mod and sum file for a proto codegen tool. The PR body: 'No clue how to test this.' It worked."}
        </p>

        <p>
          {"cloud_tf-service-bootstrap#4448 enabled Cloud Run APIs in the Falcon prod GCP project. One-line Terraform change, required to make the entire Cloud Run product line functional in production. Disproportionate impact for the size of the diff."}
        </p>
      </div>
    </article>
  );
}
