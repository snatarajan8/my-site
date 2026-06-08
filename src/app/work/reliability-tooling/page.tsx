export default function ReliabilityTooling() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Initiative
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        Reliability Tooling / dive CLI
      </h1>
      <p className="mt-1 text-sm text-zinc-400">Sep 2024 – Feb 2025 · 18 + 15 PRs across two repos</p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          {"Built this from scratch. de_reliability-tooling is a Go binary that auto-generates progressive-rollout analysis specs for Argo Rollouts. You give it a service name and component, it queries New Relic for your service's latency and error rate distributions, decides on facets (per-endpoint groupings), sets thresholds, and edits the rollout YAML in your working tree. The TUI is built with Charmbracelet bubbletea."}
        </p>

        <p>
          {"The generate-facets command is the core piece. It runs the NR queries, groups endpoints by traffic volume, and writes analysis steps with dynamic thresholds. Before this existed, on-call engineers were setting analysis thresholds by hand based on intuition. Now it's a 30-second CLI command that reads from production data."}
        </p>

        <p>
          {"de_dive-cktool-plugin wraps the binary as a Python cktool plugin. Engineers install it once with 'ck plugin install dive' and run 'ck dive reliability-tooling' from any service repo. The plugin handles NR API key management, Docker image pulling from GAR, and volume mounts. One non-obvious issue: Docker on Mac requires the mount path to be under the user's home directory. The initial path (/usr/local/lib/ck-dive) didn't qualify and silently failed."}
        </p>

        <p>
          {"The last meaningful PR (#16) fixed a bug where subprocess.run was always returning non-None, which caused the tool to error on every invocation in the stable release. Small, embarrassing, and fixed. The pattern of committing dev-loop fixes immediately rather than batching them is how this repo stayed usable."}
        </p>

        <p>
          {"End-to-end productization: Go binary, Docker image, cktool plugin, docs on the Falcon site, and a real-world evangelist PR on another team's rollout spec (vault_intuit-matching-service#1547) to demonstrate what the tool actually does on production config."}
        </p>
      </div>
    </article>
  );
}
