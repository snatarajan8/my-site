import fs from "fs";
import path from "path";
import Sidebar from "./Sidebar";

function getNavItems(section: "blog" | "projects") {
  const dir = path.join(process.cwd(), "src/app", section);
  return fs
    .readdirSync(dir)
    .filter((f) => fs.statSync(path.join(dir, f)).isDirectory())
    .flatMap((slug) => {
      const metaPath = path.join(dir, slug, "meta.json");
      if (!fs.existsSync(metaPath)) return [];
      const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
      return [{ label: meta.title, href: `/${section}/${slug}`, dateISO: meta.dateISO }];
    })
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
    .map(({ label, href }) => ({ label, href }));
}

export default function SidebarWrapper() {
  const blogItems = getNavItems("blog");
  const projectItems = getNavItems("projects");
  return <Sidebar blogItems={blogItems} projectItems={projectItems} />;
}
