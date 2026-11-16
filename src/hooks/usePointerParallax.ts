import { useEffect, type RefObject } from 'react';

export function usePointerParallax<T extends HTMLElement>(ref: RefObject<T>) {
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;

    const apply = () => {
      frame = 0;
      element.style.setProperty('--px', targetX.toFixed(3));
      element.style.setProperty('--py', targetY.toFixed(3));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      const rect = element.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      targetY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      schedule();
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
      schedule();
    };

    element.addEventListener('pointermove', handlePointerMove);
    element.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      element.removeEventListener('pointermove', handlePointerMove);
      element.removeEventListener('pointerleave', handlePointerLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref]);
}
