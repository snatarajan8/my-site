"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const nav = [
  { id: "about", label: "About Me", href: "/about", items: [] },
  {
    id: "blog",
    label: "Blog",
    href: "/blog",
    items: [{ label: "Testing the Blog UI", href: "/blog/test-post" }],
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
    items: [] as { label: string; href: string }[],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    blog: pathname.startsWith("/blog"),
    projects: pathname.startsWith("/projects"),
  });

  return (
    <aside className="w-56 shrink-0 flex flex-col min-h-screen bg-zinc-900">
      <div className="px-5 py-5 border-b border-zinc-800">
        <p className="font-semibold text-sm text-zinc-100">Shyam Natarajan</p>
        <p className="text-xs text-zinc-500 mt-0.5">Software Engineer / Cat Dad / Offroad Enthusiast</p>
      </div>

      <nav className="flex-1 py-3">
        {nav.map((section) => {
          const isActive =
            pathname === section.href ||
            pathname.startsWith(section.href + "/");
          const isExpanded = expanded[section.id];
          const hasItems = section.items.length > 0;

          return (
            <div key={section.id}>
              {hasItems ? (
                <button
                  onClick={() => {
                    router.push(section.href);
                    setExpanded((prev) => ({
                      ...prev,
                      [section.id]: !prev[section.id],
                    }));
                  }}
                  className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-left transition-colors hover:bg-zinc-800 ${
                    isActive ? "text-zinc-100 font-medium" : "text-zinc-500"
                  }`}
                >
                  {isExpanded ? (
                    <FaChevronDown size={9} className="shrink-0 text-zinc-600" />
                  ) : (
                    <FaChevronRight size={9} className="shrink-0 text-zinc-600" />
                  )}
                  {section.label}
                </button>
              ) : (
                <Link
                  href={section.href}
                  className={`flex items-center gap-2 w-full px-4 py-2 text-sm transition-colors hover:bg-zinc-800 ${
                    isActive
                      ? "text-zinc-100 font-medium bg-zinc-800"
                      : "text-zinc-500"
                  }`}
                >
                  <FaChevronRight size={9} className="shrink-0 invisible" />
                  {section.label}
                </Link>
              )}

              {hasItems && isExpanded && (
                <div>
                  {section.items.map((item) => {
                    const itemActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block pl-9 pr-4 py-1.5 text-sm transition-colors hover:bg-zinc-800 ${
                          itemActive
                            ? "text-zinc-100 font-medium bg-zinc-800"
                            : "text-zinc-500"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}