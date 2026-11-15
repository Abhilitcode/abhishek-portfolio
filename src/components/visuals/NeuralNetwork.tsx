const SIZE = 400;
const CENTER = SIZE / 2;

const nodes = Array.from({ length: 12 }, (_, i) => {
  const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
  const radius = i % 2 === 0 ? 178 : 150;
  return {
    x: Number((CENTER + radius * Math.cos(angle)).toFixed(1)),
    y: Number((CENTER + radius * Math.sin(angle)).toFixed(1)),
  };
});

const links = nodes.flatMap((_, i) => [
  [i, (i + 1) % nodes.length],
  [i, (i + 4) % nodes.length],
]);

interface NeuralNetworkProps {
  className?: string;
}

export default function NeuralNetwork({ className = '' }: NeuralNetworkProps) {
  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      aria-hidden="true"
      className={`animate-spin-reverse ${className}`}
      style={{ transformOrigin: '50% 50%' }}
    >
      {links.map(([from, to]) => (
        <line
          key={`${from}-${to}`}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          className="stroke-red-400/30"
          strokeWidth="1"
        />
      ))}
      {nodes.map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="3.5"
          className="animate-pulse-glow fill-red-300"
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}
    </svg>
  );
}
