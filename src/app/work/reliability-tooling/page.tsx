export default function ReliabilityTooling() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Initiative
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        Reliability Tooling / dive CLI
      </h1>
      <p className="mt-1 text-sm text-zinc-400">Sep 2024 – Feb 2025</p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          {"Setting up progressive delivery analysis for a service used to mean guessing at thresholds. An engineer would look at their service's latency and error rate, pick numbers that felt reasonable, and hope. Thresholds set too tight would abort healthy canaries; thresholds set too loose would let bad deploys pass analysis silently. dive solves this by reading from production data instead of intuition."}
        </p>

        <p>
          {"The tool is a Go binary with a Charmbracelet bubbletea TUI. You give it a service name and component, it queries New Relic for your service's real latency and error rate distributions, groups endpoints by traffic volume, sets thresholds based on observed baselines, and writes the analysis steps directly into your rollout YAML. What used to be a manual exercise requiring New Relic familiarity and Argo Rollouts expertise is now a 30-second CLI command."}
        </p>

        <p>
          {"I built it as a complete product: Go binary, Docker image, Python cktool plugin so engineers install it with 'ck plugin install dive' from any service repo, documentation on the Falcon site, and a first real-world deployment on another team's production rollout spec to demonstrate the output on real service config. The plugin handles NR API key management, Docker image pulling from GAR, and volume mounts — the kind of friction that kills adoption if left to the caller."}
        </p>

        <p>
          {"The impact is most visible for teams setting up progressive delivery for the first time. They get a complete, calibrated Argo analysis spec ready to commit, rather than a blank template and a guess."}
        </p>
      </div>
    </article>
  );
}
