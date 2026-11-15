interface GeometricRingProps {
  className?: string;
}

const dotAngles = [0, 120, 240];

export default function GeometricRing({ className = '' }: GeometricRingProps) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={`animate-spin-slow ${className}`} style={{ transformOrigin: '50% 50%' }}>
      <circle cx="100" cy="100" r="96" fill="none" strokeWidth="0.6" className="stroke-red-500/40" />
      <circle cx="100" cy="100" r="78" fill="none" strokeWidth="0.8" strokeDasharray="2 6" className="stroke-red-400/30" />
      <circle cx="100" cy="100" r="30" fill="none" strokeWidth="1" className="stroke-red-500/50" />
      {dotAngles.map((deg) => {
        const rad = ((deg - 90) * Math.PI) / 180;
        return (
          <circle
            key={deg}
            cx={Number((100 + 54 * Math.cos(rad)).toFixed(2))}
            cy={Number((100 + 54 * Math.sin(rad)).toFixed(2))}
            r="9"
            className="fill-red-500/70"
          />
        );
      })}
      <circle cx="100" cy="100" r="5" className="fill-red-400/80" />
    </svg>
  );
}
