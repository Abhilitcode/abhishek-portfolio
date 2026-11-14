import { Award } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { certifications } from '@/data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <Reveal>
        <SectionHeading eyebrow="Certifications & Achievements" title="Continuous learning in AI and data" />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((item, index) => (
          <Reveal key={item.title} delay={(index % 2) * 120} className="h-full">
            <div className="glass-panel group flex h-full gap-4 p-6 transition-colors duration-300 hover:border-sky-400/40">
              <Award className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
              <div>
                <h3 className="font-semibold text-slate-100 transition-colors group-hover:text-sky-300">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.issuer}</p>
                {item.detail && <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.detail}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
