import { ArrowUpRight, Github, Play } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';
import { projectCategories, projects, type Project, type ProjectCategory } from '@/data/portfolio';

const categoryAccent: Record<ProjectCategory, string> = {
  'Generative AI': 'text-cyan-300 border-cyan-400/30 bg-cyan-400/10',
  'Machine Learning': 'text-sky-300 border-sky-400/30 bg-sky-400/10',
  'Deep Learning': 'text-blue-300 border-blue-400/30 bg-blue-400/10',
};

function ProjectCard({ project }: { project: Project }) {
  const hasLinks = Boolean(project.repoUrl || project.demoUrl);

  return (
    <TiltCard className="flex h-full flex-col">
      <div className="mb-4 flex flex-wrap gap-2">
        <span className={`inline-flex w-fit rounded-full border px-3 py-1 text-xs font-medium ${categoryAccent[project.category]}`}>
          {project.category}
        </span>
        {project.hackathon && (
          <span className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-sky-100">
            Hackathon Project
          </span>
        )}
      </div>
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <ul className="mt-4 flex-1 space-y-2.5">
        {project.points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-400">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            {point}
          </li>
        ))}
      </ul>
      {project.stack.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300">
              {tech}
            </li>
          ))}
        </ul>
      )}
      {hasLinks && (
        <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-5">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition-colors hover:text-sky-300"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition-colors hover:text-cyan-300"
            >
              <Play className="h-4 w-4" />
              Live demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      )}
    </TiltCard>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work across AI disciplines"
          description="Projects grouped by discipline, from agentic GenAI systems to deep learning models."
        />
      </Reveal>

      <div className="space-y-20">
        {projectCategories.map((category) => {
          const items = projects.filter((project) => project.category === category);
          return (
            <div key={category}>
              <Reveal>
                <div className="mb-8 flex items-center gap-4">
                  <h3 className="font-display text-2xl font-bold text-white">{category}</h3>
                  <span className="h-px flex-1 bg-gradient-to-r from-sky-400/40 to-transparent" />
                </div>
              </Reveal>
              <div className="grid gap-6 md:grid-cols-2">
                {items.map((project, index) => (
                  <Reveal key={project.title} delay={index * 120} className="h-full">
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
