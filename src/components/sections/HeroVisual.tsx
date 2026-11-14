import { profile } from '@/data/portfolio';
import portrait from '@/assets/images/1789426064185.jpg';

const orbits = [
  { size: 'h-[92%] w-[92%]', tilt: 'rotateX(70deg) rotateZ(10deg)', spin: 'animate-spin-slow', color: 'border-sky-400/50' },
  { size: 'h-[78%] w-[78%]', tilt: 'rotateY(70deg) rotateZ(-20deg)', spin: 'animate-spin-reverse', color: 'border-cyan-300/40' },
  { size: 'h-[64%] w-[64%]', tilt: 'rotateX(25deg) rotateY(-35deg)', spin: 'animate-spin-slow', color: 'border-blue-400/40' },
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]" style={{ perspective: '1000px' }}>
      <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-[80px] animate-pulse-glow" />

      <div className="preserve-3d absolute inset-0">
        {orbits.map((orbit, index) => (
          <div key={index} className="absolute inset-0 flex items-center justify-center" style={{ transform: orbit.tilt, transformStyle: 'preserve-3d' }}>
            <div className={`${orbit.spin} relative ${orbit.size} rounded-full border ${orbit.color}`}>
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_16px_4px_rgba(103,232,249,0.7)]" />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-float relative aspect-square h-[48%] w-[48%] overflow-hidden rounded-full shadow-[0_0_60px_-10px_rgba(56,189,248,0.6)] ring-1 ring-sky-400/40">
          <img src={portrait} alt={profile.name} className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(56,189,248,0.25)]" />
        </div>
      </div>
    </div>
  );
}
