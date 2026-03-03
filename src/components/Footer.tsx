import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-center pb-8 pt-4">
      <div className="flex items-center gap-6 rounded-2xl border border-zinc-200 bg-zinc-50 px-8 py-4 shadow-sm">
        <a
          href="https://github.com/snatarajan8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-900"
        >
          <FaGithub size={20} />
          <span className="text-sm font-medium">GitHub</span>
        </a>
        <div className="h-4 w-px bg-zinc-200" />
        <a
          href="https://www.instagram.com/heyitsshyam"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-zinc-500 transition-colors hover:text-pink-500"
        >
          <FaInstagram size={20} />
          <span className="text-sm font-medium">Instagram</span>
        </a>
        <div className="h-4 w-px bg-zinc-200" />
        <a
          href="https://www.linkedin.com/in/shyam-natarajan-1b9190125/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-zinc-500 transition-colors hover:text-blue-600"
        >
          <FaLinkedin size={20} />
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
      </div>
    </footer>
  );
}