export default function ThisWebsite() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Project
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        This Website
      </h1>
      <p className="mt-1 text-sm text-zinc-400">March 3, 2026</p>
      <div className="mt-8 text-zinc-600 leading-relaxed">
        {This is a next.js website deployed with Vercel. Surprisingly easy and lightweight. More to come.}
      </div>
    </article>
  );
}
