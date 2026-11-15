import { Briefcase } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Where I have built and shipped" />
      </Reveal>

      <ol className="relative ml-3 border-l border-sky-400/25 md:ml-6">
        {experience.map((item, index) => (
          <Reveal key={item.company} delay={index * 150}>
            <li className="relative mb-12 pl-8 md:pl-12 last:mb-0">
              <span className="absolute -left-[9px] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-navy-950 ring-2 ring-sky-400 shadow-[0_0_16px_rgba(220,38,38,0.8)]" />
              <div className="glass-panel p-6 transition-colors duration-300 hover:border-sky-400/40 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white md:text-2xl">{item.role}</h3>
                    <p className="mt-1 flex items-center gap-2 text-sky-300">
                      <Briefcase className="h-4 w-4 shrink-0" />
                      {item.company}
                    </p>
                  </div>
                  <p className="text-sm text-slate-400">{item.period}</p>
                </div>
                {item.project && (
                  <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                    Internship project: {item.project}
                  </p>
                )}
                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-400 md:text-base">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
