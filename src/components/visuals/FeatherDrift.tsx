import type { CSSProperties } from 'react';

const feathers = [
  { left: '4%', top: '8%', size: 34, depth: 22, duration: 22, delay: -4 },
  { left: '18%', top: '-6%', size: 26, depth: 12, duration: 18, delay: -11 },
  { left: '31%', top: '20%', size: 40, depth: 28, duration: 26, delay: -7 },
  { left: '44%', top: '4%', size: 22, depth: 9, duration: 16, delay: -2 },
  { left: '58%', top: '-4%', size: 30, depth: 20, duration: 24, delay: -13 },
  { left: '70%', top: '12%', size: 36, depth: 16, duration: 21, delay: -9 },
  { left: '82%', top: '2%', size: 24, depth: 26, duration: 19, delay: -6 },
  { left: '92%', top: '26%', size: 32, depth: 11, duration: 25, delay: -15 },
  { left: '12%', top: '62%', size: 28, depth: 18, duration: 20, delay: -10 },
  { left: '50%', top: '70%', size: 38, depth: 24, duration: 27, delay: -3 },
  { left: '78%', top: '66%', size: 26, depth: 14, duration: 17, delay: -8 },
  { left: '64%', top: '86%', size: 30, depth: 20, duration: 23, delay: -12 },
];

const embers = [
  { left: '26%', top: '34%', depth: 30, delay: '0s' },
  { left: '61%', top: '48%', depth: 22, delay: '1.2s' },
  { left: '88%', top: '58%', depth: 34, delay: '2.4s' },
  { left: '38%', top: '80%', depth: 26, delay: '3.6s' },
  { left: '10%', top: '44%', depth: 18, delay: '4.8s' },
  { left: '74%', top: '30%', depth: 30, delay: '1.9s' },
];

export default function FeatherDrift() {
  return (
    <div aria-hidden="true" className="feather-layer pointer-events-none absolute inset-0 overflow-hidden">
      {feathers.map((feather, index) => (
        <span
          key={index}
          className={`parallax-depth absolute ${index >= 6 ? 'hidden md:block' : ''}`}
          style={{ left: feather.left, top: feather.top, '--depth': feather.depth } as CSSProperties}
        >
          <span
            className="animate-feather block"
            style={{ animationDuration: `${feather.duration}s`, animationDelay: `${feather.delay}s` }}
          >
            <svg viewBox="0 0 24 80" width={feather.size * 0.3} height={feather.size} className="drop-shadow-[0_0_6px_rgba(220,38,38,0.25)]">
              <path d="M12 0 C19 18 19 52 12 80 C5 52 5 18 12 0 Z" className="fill-zinc-950 stroke-red-500/30" strokeWidth="0.8" />
              <path d="M12 4 L12 78" className="stroke-red-500/25" strokeWidth="0.6" />
            </svg>
          </span>
        </span>
      ))}
      {embers.map((ember, index) => (
        <span
          key={index}
          className={`parallax-depth absolute ${index >= 4 ? 'hidden md:block' : ''}`}
          style={{ left: ember.left, top: ember.top, '--depth': ember.depth } as CSSProperties}
        >
          <span
            className="animate-ember block h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_4px_rgba(239,68,68,0.6)]"
            style={{ animationDelay: ember.delay }}
          />
        </span>
      ))}
    </div>
  );
}
