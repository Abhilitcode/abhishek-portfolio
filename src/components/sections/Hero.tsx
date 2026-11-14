import { ArrowRight, Mail } from 'lucide-react';
import ButtonLink from '@/components/ui/ButtonLink';
import Reveal from '@/components/ui/Reveal';
import { profile, heroStats } from '@/data/portfolio';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="section-shell grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.9)]" />
              {profile.availability}
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Hi, I'm <span className="text-gradient">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 font-display text-xl text-sky-200 md:text-2xl">{profile.title}</p>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">{profile.intro}</p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#projects" label="View Projects" icon={ArrowRight} />
              <ButtonLink href="#contact" label="Contact Me" icon={Mail} variant="secondary" />
            </div>
          </Reveal>

          <Reveal delay={500}>
            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">{stat.label}</dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}
