export default function Footer() {
  return (
    <footer className="px-10 lg:px-14 py-6 border-t border-site-border">
      <p
        className="text-ink-dim"
        style={{
          fontFamily: "var(--font-ibm-plex-mono), monospace",
          fontSize: "11px",
          letterSpacing: "0.04em",
        }}
      >
        © {new Date().getFullYear()} Shyam Natarajan
      </p>
    </footer>
  );
}
