import { useEffect } from 'react';

/**
 * Subtle scroll parallax via CSS custom property.
 * Respects prefers-reduced-motion.
 */
export function useHeroParallax(ref, speed = 0.32) {
	useEffect(() => {
		const node = ref.current;
		if (!node) return undefined;

		const prefersReduced = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;

		if (prefersReduced) return undefined;

		let ticking = false;

		const update = () => {
			const offset = window.scrollY * speed;
			node.style.setProperty('--parallax-y', `${offset}px`);
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(update);
			}
		};

		update();
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => window.removeEventListener('scroll', onScroll);
	}, [ref, speed]);
}
