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
    <div className="max-w-2xl">
      <p
        className="text-accent"
        style={{
          fontFamily: "var(--font-ibm-plex-mono), monospace",
          fontSize: "10.5px",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        Writing
      </p>
      <h1
        className="mt-2 mb-10 text-ink"
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: "1.875rem",
          fontWeight: 600,
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
        }}
      >
        Blog
      </h1>

      {posts.length === 0 ? (
        <p className="text-ink-dim" style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: "13px" }}>
          No posts yet.
        </p>
      ) : (
        <ul className="divide-y divide-site-border">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex items-baseline justify-between py-4 transition-colors duration-150"
              >
                <span className="text-ink-muted group-hover:text-ink transition-colors duration-150 text-[14px] leading-snug pr-4">
                  {p.title}
                </span>
                <span
                  className="text-ink-dim shrink-0 group-hover:text-accent transition-colors duration-150"
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: "11px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {p.date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
