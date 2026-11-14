import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';
import { profile } from '@/data/portfolio';

interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external: boolean;
}

const stripProtocol = (url: string) => url.replace(/^https?:\/\//, '');

const channels: ContactChannel[] = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail, external: false },
  { label: 'LinkedIn', value: stripProtocol(profile.linkedin), href: profile.linkedin, icon: Linkedin, external: true },
  { label: 'GitHub', value: stripProtocol(profile.github), href: profile.github, icon: Github, external: true },
  { label: 'LeetCode', value: stripProtocol(profile.leetcode), href: profile.leetcode, icon: Terminal, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <Reveal>
        <div className="glass-panel relative overflow-hidden px-6 py-14 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/25 blur-[100px]" />
          <div className="relative">
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something intelligent"
              description="Open to AI/ML Engineer, Generative AI Developer and AI Engineer opportunities, as well as conversations about LLMs, RAG and agentic systems."
            />

            <div className="mx-auto grid max-w-5xl gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
              {channels.map((channel, index) => (
                <Reveal key={channel.label} delay={index * 100} className="h-full">
                  <TiltCard className="h-full">
                    <a
                      href={channel.href}
                      target={channel.external ? '_blank' : undefined}
                      rel={channel.external ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      <channel.icon className="h-6 w-6 text-sky-300" />
                      <p className="mt-5 text-xs uppercase tracking-wider text-slate-500">{channel.label}</p>
                      <p className="mt-1 truncate text-sm font-medium text-white">{channel.value}</p>
                    </a>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
