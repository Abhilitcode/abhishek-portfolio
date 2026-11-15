import { ExternalLink, FileText } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';
import { certificates } from '@/data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <Reveal>
        <SectionHeading eyebrow="Certifications & Achievements" title="Continuous learning in AI and data" />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((item, index) => (
          <Reveal key={item.file} delay={index * 120} className="h-full">
            <TiltCard className="h-full">
              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <FileText className="h-6 w-6 text-sky-300" />
                  <ExternalLink className="h-4 w-4 text-slate-500 transition-colors group-hover:text-sky-300" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white transition-colors group-hover:text-sky-300">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {item.issuer} · {item.date}
                </p>
                {item.courses && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.courses.map((course) => (
                      <li key={course} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {course}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-auto pt-6 text-sm font-medium text-sky-300">View certificate PDF</p>
              </a>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
