import fs from "fs";
import path from "path";
import Link from "next/link";

type Meta = { title: string; date: string; dateISO: string };

function getPosts() {
  const dir = path.join(process.cwd(), "src/app/blog");
  return fs
    .readdirSync(dir)
    .filter((f) => fs.statSync(path.join(dir, f)).isDirectory())
    .flatMap((slug) => {
      const metaPath = path.join(dir, slug, "meta.json");
      if (!fs.existsSync(metaPath)) return [];
      const meta: Meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
      return [{ slug, ...meta }];
    })
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO));
}

export default function Blog() {
  const posts = getPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-800">Blog</h1>
      {posts.length === 0 ? (
        <p className="mt-4 text-zinc-400">No posts yet.</p>
      ) : (
        <ul className="mt-6 space-y-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex items-baseline justify-between"
              >
                <span className="font-medium text-zinc-800 group-hover:text-zinc-600">
                  {p.title}
                </span>
                <span className="text-sm text-zinc-400">{p.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
