import { GraduationCap } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <Reveal>
        <SectionHeading eyebrow="Education" title="Academic foundation" />
      </Reveal>

      <div className="grid gap-6">
        {education.map((item, index) => (
          <Reveal key={item.degree} delay={index * 120}>
            <TiltCard>
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-400/10 text-sky-300">
                    <GraduationCap className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white md:text-2xl">{item.degree}</h3>
                    <p className="mt-1 text-slate-300">{item.institution}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.period}</p>
                  </div>
                </div>
                <span className="inline-flex w-fit rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2 font-display text-lg font-bold text-cyan-200 shadow-[0_0_24px_-6px_rgba(248,113,113,0.6)]">
                  {item.score}
                </span>
              </div>
              <ul className="mt-6 space-y-2 border-t border-white/10 pt-6">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 text-sm text-slate-300 md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
