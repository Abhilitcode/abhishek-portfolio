interface SharinganEyeProps {
  className?: string;
}

const CENTER = 100;
const TOMOE_RADIUS = 46;
const TOMOE_ANGLES = [-90, 30, 150];

function polar(radius: number, degrees: number) {
  const rad = (degrees * Math.PI) / 180;
  return {
    x: Number((CENTER + radius * Math.cos(rad)).toFixed(2)),
    y: Number((CENTER + radius * Math.sin(rad)).toFixed(2)),
  };
}

function tomoePath(angle: number) {
  const head = polar(TOMOE_RADIUS, angle);
  const control = polar(34, angle + 4);
  const tail = polar(20, angle + 16);
  return `M${head.x} ${head.y} Q${control.x} ${control.y} ${tail.x} ${tail.y}`;
}

export default function SharinganEye({ className = '' }: SharinganEyeProps) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className} style={{ transformOrigin: '50% 50%' }}>
      <defs>
        <radialGradient id="sharingan-iris" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#991b1b" />
          <stop offset="55%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#450a0a" />
        </radialGradient>
      </defs>
      <circle cx={CENTER} cy={CENTER} r="97" fill="none" stroke="#ef4444" strokeOpacity="0.55" strokeWidth="1" />
      <circle cx={CENTER} cy={CENTER} r="92" fill="url(#sharingan-iris)" />
      <circle cx={CENTER} cy={CENTER} r="92" fill="none" stroke="#7f1d1d" strokeWidth="2" />
      <circle cx={CENTER} cy={CENTER} r="72" fill="none" stroke="#0a0000" strokeOpacity="0.6" strokeWidth="2" />
      {TOMOE_ANGLES.map((angle) => {
        const head = polar(TOMOE_RADIUS, angle);
        return (
          <g key={angle}>
            <path d={tomoePath(angle)} fill="none" stroke="#050000" strokeWidth="6" strokeLinecap="round" />
            <circle cx={head.x} cy={head.y} r="10" fill="#050000" />
          </g>
        );
      })}
      <circle cx={CENTER} cy={CENTER} r="5" fill="#050000" />
    </svg>
  );
}
