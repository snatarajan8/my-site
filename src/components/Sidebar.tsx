"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown, FaChevronRight, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

type NavItem = { label: string; href: string };

export default function Sidebar({
  blogItems,
  projectItems,
  workItems,
}: {
  blogItems: NavItem[];
  projectItems: NavItem[];
  workItems: NavItem[];
}) {
  const nav = [
    { id: "about", label: "About", href: "/about", items: [] as NavItem[] },
    { id: "work", label: "Work", href: "/work", items: workItems },
    { id: "blog", label: "Blog", href: "/blog", items: blogItems },
    { id: "projects", label: "Projects", href: "/projects", items: projectItems },
  ];
  const pathname = usePathname();
  const router = useRouter();

  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    work: pathname.startsWith("/work"),
    blog: pathname.startsWith("/blog"),
    projects: pathname.startsWith("/projects"),
  });

  return (
    <aside
      className="shrink-0 flex flex-col min-h-screen bg-bg-elevated border-r border-site-border"
      style={{ width: "232px" }}
    >
      {/* Identity header */}
      <div className="px-5 py-6 border-b border-site-border">
        <p
          className="text-ink leading-tight"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          Shyam Natarajan
        </p>
        <p
          className="mt-1 text-accent"
          style={{
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            fontSize: "10.5px",
            letterSpacing: "0.05em",
          }}
        >
          platform engineer
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-2">
        {nav.map((section) => {
          const isActive =
            pathname === section.href ||
            pathname.startsWith(section.href + "/");
          const isSectionRoot = pathname === section.href;
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
                  className={`
                    flex items-center gap-2.5 w-full py-2 text-left text-[13px]
                    transition-colors duration-150 cursor-pointer
                    border-l-2
                    ${isActive && isSectionRoot
                      ? "border-l-accent text-ink font-medium bg-bg-hover pl-[18px] pr-4"
                      : "border-l-transparent text-ink-muted hover:text-ink hover:bg-bg-hover pl-[18px] pr-4"
                    }
                  `}
                >
                  {isExpanded ? (
                    <FaChevronDown size={7} className="shrink-0 text-ink-dim" />
                  ) : (
                    <FaChevronRight size={7} className="shrink-0 text-ink-dim" />
                  )}
                  {section.label}
                </button>
              ) : (
                <Link
                  href={section.href}
                  className={`
                    flex items-center gap-2.5 w-full py-2 text-[13px]
                    transition-colors duration-150
                    border-l-2
                    ${isActive
                      ? "border-l-accent text-ink font-medium bg-bg-hover pl-[18px] pr-4"
                      : "border-l-transparent text-ink-muted hover:text-ink hover:bg-bg-hover pl-[18px] pr-4"
                    }
                  `}
                >
                  <span className="w-[7px] shrink-0" />
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
                        className={`
                          block py-[5px] text-[12px]
                          transition-colors duration-150
                          border-l-2
                          ${itemActive
                            ? "border-l-accent text-ink font-medium bg-bg-hover pl-[34px] pr-4"
                            : "border-l-transparent text-ink-dim hover:text-ink-muted hover:bg-bg-hover pl-[34px] pr-4"
                          }
                        `}
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

      {/* Social links */}
      <div className="px-5 py-4 border-t border-site-border flex items-center gap-4">
        <a
          href="https://github.com/snatarajan8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-dim hover:text-ink transition-colors duration-150"
          title="GitHub"
        >
          <FaGithub size={15} />
        </a>
        <a
          href="https://www.instagram.com/heyitsshyam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-dim hover:text-ink transition-colors duration-150"
          title="Instagram"
        >
          <FaInstagram size={15} />
        </a>
        <a
          href="https://www.linkedin.com/in/shyam-natarajan-1b9190125/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-dim hover:text-ink transition-colors duration-150"
          title="LinkedIn"
        >
          <FaLinkedin size={15} />
        </a>
      </div>
    </aside>
  );
}
