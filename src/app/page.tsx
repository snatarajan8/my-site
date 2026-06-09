export default function Home() {
  const tags = ["Go", "Kubernetes", "GCP", "TypeScript", "Terraform"];

  return (
    <div className="flex flex-col justify-center min-h-[72vh] max-w-lg">
      <p
        className="text-accent mb-5"
        style={{
          fontFamily: "var(--font-ibm-plex-mono), monospace",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        Platform Engineer
      </p>

      <h1
        className="text-ink mb-6"
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 1.08,
        }}
      >
        Shyam Natarajan
      </h1>

      <p className="text-ink-muted leading-relaxed mb-2" style={{ maxWidth: "420px" }}>
        I build deployment and release infrastructure. Over three years at
        Credit Karma as the primary engineer on Falcon — their Kubernetes and
        Cloud Run control plane.
      </p>

      <p className="text-ink-muted leading-relaxed mb-10" style={{ maxWidth: "420px" }}>
        859 pull requests. 99% close rate. Still shipping.
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-ink-dim border border-site-border px-3 py-1 rounded"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "11px",
              letterSpacing: "0.04em",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
