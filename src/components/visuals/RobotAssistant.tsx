interface RobotAssistantProps {
  className?: string;
}

export default function RobotAssistant({ className = '' }: RobotAssistantProps) {
  return (
    <svg viewBox="0 0 120 150" aria-hidden="true" className={className}>
      <line x1="60" y1="22" x2="60" y2="10" strokeWidth="2" className="stroke-red-400/70" />
      <circle cx="60" cy="8" r="4" className="animate-pulse-glow fill-red-400" />
      <rect x="8" y="46" width="10" height="28" rx="3" strokeWidth="1" className="fill-navy-700 stroke-red-500/50" />
      <rect x="102" y="46" width="10" height="28" rx="3" strokeWidth="1" className="fill-navy-700 stroke-red-500/50" />
      <rect x="20" y="22" width="80" height="72" rx="20" strokeWidth="1.5" className="fill-navy-800 stroke-red-500/60" />
      <rect x="30" y="44" width="60" height="26" rx="13" strokeWidth="1" className="fill-navy-950 stroke-red-500/40" />
      <circle cx="45" cy="57" r="6" className="animate-pulse-glow fill-red-500" />
      <circle cx="75" cy="57" r="6" className="animate-pulse-glow fill-red-500" style={{ animationDelay: '1s' }} />
      <line x1="42" y1="80" x2="78" y2="80" strokeWidth="2" strokeLinecap="round" className="stroke-red-400/50" />
      <line x1="48" y1="86" x2="72" y2="86" strokeWidth="2" strokeLinecap="round" className="stroke-red-400/30" />
      <rect x="46" y="94" width="28" height="16" rx="4" className="fill-navy-700" />
      <path d="M22 118 Q60 104 98 118 L104 140 H16 Z" strokeWidth="1.5" className="fill-navy-800 stroke-red-500/50" />
    </svg>
  );
}
