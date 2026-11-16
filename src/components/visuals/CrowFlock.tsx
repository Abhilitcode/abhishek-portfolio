import type { CSSProperties } from 'react';
import Crow from '@/components/visuals/Crow';

const crows = [
  { flight: 'animate-crow-a', flip: false, depth: 18 },
  { flight: 'animate-crow-b', flip: true, depth: 10 },
  { flight: 'animate-crow-c', flip: false, depth: 26 },
];

const embers = [
  { left: '12%', top: '46%', delay: '0s' },
  { left: '24%', top: '28%', delay: '1.3s' },
  { left: '6%', top: '62%', delay: '2.6s' },
];

export default function CrowFlock() {
  return (
    <div
      aria-hidden="true"
      className="crow-layer parallax-depth pointer-events-none absolute inset-0"
      style={{ '--depth': 14 } as CSSProperties}
    >
      {crows.map((crow) => (
        <div
          key={crow.flight}
          className={`${crow.flight} absolute aspect-[120/64] w-[17%] ${crow.flip ? 'scale-x-[-1]' : ''}`}
        >
          <div className="parallax-depth absolute inset-0" style={{ '--depth': crow.depth } as CSSProperties}>
            <Crow className="animate-crow-bob h-full w-full drop-shadow-[0_0_10px_rgba(220,38,38,0.35)]" />
          </div>
          {embers.map((ember) => (
            <span
              key={ember.left}
              className="animate-ember absolute h-1 w-1 rounded-full bg-red-500 shadow-[0_0_8px_3px_rgba(239,68,68,0.7)]"
              style={{ left: ember.left, top: ember.top, animationDelay: ember.delay }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
