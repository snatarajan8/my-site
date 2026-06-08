export default function About() {
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
        About
      </p>
      <h1
        className="mt-2 text-ink"
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: "1.875rem",
          fontWeight: 600,
          letterSpacing: "-0.025em",
          lineHeight: 1.15,
        }}
      >
        About Me
      </h1>
      <div className="mt-6 inline-flex rounded border border-site-border bg-accent-subtle px-4 py-1.5">
        <span
          className="text-accent"
          style={{
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.04em",
          }}
        >
          Work in progress
        </span>
      </div>
    </div>
  );
}
