import { profile } from '@/data/portfolio';
import AmbientParticles from '@/components/visuals/AmbientParticles';
import CrowFlock from '@/components/visuals/CrowFlock';
import GeometricRing from '@/components/visuals/GeometricRing';
import NeuralNetwork from '@/components/visuals/NeuralNetwork';
import RobotAssistant from '@/components/visuals/RobotAssistant';
import SharinganEye from '@/components/visuals/SharinganEye';

const portrait = '/assets/images/Gemini_Generated_Image_3jr7ey3jr7ey3jr7.png';

const orbits = [
  { size: 'h-[92%] w-[92%]', tilt: 'rotateX(70deg) rotateZ(10deg)', spin: 'animate-spin-slow', color: 'border-red-500/50' },
  { size: 'h-[78%] w-[78%]', tilt: 'rotateY(70deg) rotateZ(-20deg)', spin: 'animate-spin-reverse', color: 'border-red-400/40' },
  { size: 'h-[64%] w-[64%]', tilt: 'rotateX(25deg) rotateY(-35deg)', spin: 'animate-spin-slow', color: 'border-red-600/50' },
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" style={{ perspective: '1100px' }}>
      <div className="animate-pulse-glow absolute inset-0 rounded-full bg-red-700/25 blur-[90px]" />
      <NeuralNetwork className="absolute inset-0 h-full w-full opacity-80" />
      <GeometricRing className="absolute inset-[10%] h-[80%] w-[80%] opacity-70" />
      <div className="absolute inset-[18%] rounded-full border border-red-500/20" />
      <AmbientParticles />

      <div className="preserve-3d absolute inset-0">
        {orbits.map((orbit, index) => (
          <div
            key={index}
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: orbit.tilt, transformStyle: 'preserve-3d' }}
          >
            <div className={`${orbit.spin} relative ${orbit.size} rounded-full border ${orbit.color}`}>
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-red-400 shadow-[0_0_16px_4px_rgba(248,113,113,0.7)]" />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative aspect-square h-[72%] w-[72%]">
          <div className="animate-pulse-glow absolute inset-0 rounded-full bg-red-600/30 blur-2xl" />
          <SharinganEye className="animate-spin-slow absolute inset-0 h-full w-full drop-shadow-[0_0_18px_rgba(220,38,38,0.6)]" />
        </div>
      </div>

      <CrowFlock />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-float relative aspect-square h-[48%] w-[48%] overflow-hidden rounded-full shadow-[0_0_60px_-10px_rgba(220,38,38,0.7)] ring-1 ring-red-500/50">
          <img src={portrait} alt={profile.name} className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/15 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.35)]" />
        </div>
      </div>

      <RobotAssistant className="animate-float absolute -bottom-2 -left-2 w-[24%] h-auto drop-shadow-[0_0_12px_rgba(220,38,38,0.5)]" />
    </div>
  );
}
