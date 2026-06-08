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
          {"de_bird-facts is a Node.js service that returns bird trivia. It has no users in any business sense. What it has is full on-rails CK service infrastructure: Falcon-managed deploys, Argo Rollouts progressive delivery, the ck-service Helm chart, CircleCI. I deploy it constantly to validate platform changes. If a configmap cleanup migration is supposed to delete configmaps, I verify it by deploying bird-facts and watching. Several PR descriptions in paas_cluster-config cite it explicitly: 'will monitor by deploying bird-facts and seeing that configmaps are deleted.' Because I own the service, I can do things to it that no team would tolerate on a real service — remove components, force progressive demotions, break things intentionally."}
        </p>

        <p>
          {"de_bird-facts-cloud-run is the Cloud Run sibling, built so I could test Falcon Cloud end-to-end without asking a real product team to be the guinea pig. It absorbed every early failure in the Cloud Run product line. Every new action (deploy, enable, disable, scale, mTLS) got validated here first."}
        </p>

        <p>
          {"de_snatarajan-site started as a personal website and pivoted in the second PR to a PR-analytics dashboard for the entire ck-private org — 18 months of PR data, per-repo views, year-over-year comparisons. One decision I'm glad about: #5 dropped the aggregate metrics because they were masking the per-PR story. When your own dashboard is lying to you, cut the lying part."}
        </p>
      </div>
    </article>
  );
}
