export default function SideProjects() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Initiative
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        Side Projects & Personal Tooling
      </h1>
      <p className="mt-1 text-sm text-zinc-400">2023 – present</p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          {"Three projects that aren't throwaway work — each plays a real role in how I validate platform changes or analyze the org."}
        </p>

        <p>
          {"de_bird-facts is a Node.js service that returns bird trivia. Its business value is zero. Its platform value is high: it runs the full CK service stack — Falcon-managed deploys, Argo Rollouts progressive delivery, the ck-service Helm chart, CircleCI — and I can do things to it that no team would tolerate on a real service. Remove components. Force rollbacks. Break things intentionally to see how the platform responds. Several deploy changes were validated by deploying bird-facts and watching the outcome before any real service was touched."}
        </p>

        <p>
          {"de_bird-facts-cloud-run is the Cloud Run sibling, built specifically to test Falcon Cloud end-to-end before asking any real product team to onboard. It absorbed every early failure in the Cloud Run product line — deploy errors, message routing bugs, IAM misconfigurations, mTLS certificate issues. By the time I asked other teams to use Falcon Cloud, it had already run thousands of deploys on bird-facts-cloud-run."}
        </p>

        <p>
          {"de_snatarajan-site is this website, which started as a personal site and expanded into a PR analytics dashboard for the ck-private org — 18 months of data, per-repo views, year-over-year comparisons. One decision I'm glad about: an early version had aggregate metrics that masked the per-PR story. When your own dashboard is lying to you, cut the lying part."}
        </p>
      </div>
    </article>
  );
}
