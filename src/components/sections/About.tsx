import { highlights, aboutParagraphs } from '@/data/portfolio';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';

export default function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <SectionHeading eyebrow="About Me" title="Engineering intelligence, from data to deployment" />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div className="space-y-6">
          {aboutParagraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 120}>
              <p className="text-base leading-relaxed text-slate-400 md:text-lg">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4">
          {highlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 120}>
              <TiltCard>
                <p className="text-xs uppercase tracking-wider text-slate-500">{item.label}</p>
                <p className="mt-2 font-display text-2xl font-bold text-white">{item.value}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
