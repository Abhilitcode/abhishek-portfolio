import type { LucideIcon } from 'lucide-react';

interface ButtonLinkProps {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  external?: boolean;
}

const variantClasses = {
  primary:
    'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-[0_0_30px_-6px_rgba(56,189,248,0.6)] hover:shadow-[0_0_45px_-4px_rgba(56,189,248,0.85)]',
  secondary:
    'border border-white/15 bg-white/5 text-white hover:border-sky-400/50 hover:bg-sky-400/10',
};

export default function ButtonLink({ href, label, variant = 'primary', icon: Icon, external = false }: ButtonLinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${variantClasses[variant]}`}
    >
      {label}
      {Icon && <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </a>
  );
}
