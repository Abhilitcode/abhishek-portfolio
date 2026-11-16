interface CrowProps {
  className?: string;
}

const BODY = 'M34 36 C42 28 60 26 74 28 C82 29 86 28 90 27 L102 33 L90 36 C84 40 74 42 62 41 C52 40 42 40 34 36 Z';
const TAIL = 'M38 33 L12 41 L18 35 L8 31 L40 38 Z';
const NEAR_WING = 'M66 31 C60 16 40 6 16 4 C32 12 40 20 46 30 C50 36 56 38 64 38 Z';
const FAR_WING = 'M64 30 C70 16 82 10 98 10 C86 18 78 26 74 34 Z';

export default function Crow({ className = '' }: CrowProps) {
  return (
    <svg viewBox="0 0 120 64" aria-hidden="true" className={className} style={{ overflow: 'visible' }}>
      <path d={FAR_WING} className="crow-wing crow-wing-far fill-zinc-900 stroke-red-500/30" strokeWidth="0.6" />
      <path d={TAIL} className="fill-zinc-950" />
      <path d={BODY} className="fill-zinc-950 stroke-red-500/35" strokeWidth="0.6" />
      <path d={NEAR_WING} className="crow-wing fill-zinc-900 stroke-red-500/40" strokeWidth="0.6" />
      <circle cx="91" cy="30" r="1.4" className="animate-pulse-glow fill-red-500" />
    </svg>
  );
}
