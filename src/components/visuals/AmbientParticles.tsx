const particles = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 53) % 100,
  delay: (i * 0.7) % 6,
  duration: 7 + (i % 5) * 1.5,
  size: i % 3 === 0 ? 3 : 2,
}));

const streams = [
  { left: '10%', delay: '0s' },
  { left: '50%', delay: '2s' },
  { left: '90%', delay: '3.4s' },
];

export default function AmbientParticles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {streams.map((stream) => (
        <span
          key={stream.left}
          className="animate-stream absolute top-0 h-1/2 w-px bg-gradient-to-b from-transparent via-red-400/70 to-transparent"
          style={{ left: stream.left, animationDelay: stream.delay }}
        />
      ))}
      {particles.map((particle, index) => (
        <span
          key={index}
          className="animate-drift absolute rounded-full bg-red-300"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
