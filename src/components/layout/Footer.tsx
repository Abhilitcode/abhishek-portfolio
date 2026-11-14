import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React, Vite and Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-2.5 text-slate-300 transition-colors hover:border-sky-400/50 hover:text-sky-300"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-2.5 text-slate-300 transition-colors hover:border-sky-400/50 hover:text-sky-300"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="rounded-full border border-white/10 p-2.5 text-slate-300 transition-colors hover:border-sky-400/50 hover:text-sky-300"
          >
            <Terminal className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-full border border-white/10 p-2.5 text-slate-300 transition-colors hover:border-sky-400/50 hover:text-sky-300"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
