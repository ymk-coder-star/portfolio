import { useEffect, useRef, useState } from 'react';

export default function Reveal({
	children,
	className = '',
	variant = 'up',
	delay = 0,
	immediate = false,
	as: Tag = 'div',
}) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const prefersReduced = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;

		if (prefersReduced) {
			setVisible(true);
			return undefined;
		}

		if (immediate) {
			const timer = window.setTimeout(() => setVisible(true), 50);
			return () => window.clearTimeout(timer);
		}

		const node = ref.current;
		if (!node) return undefined;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, [immediate]);

	const variantClass =
		variant === 'fade' ? ' reveal--fade' : variant === 'scale' ? ' reveal--scale' : '';

	return (
		<Tag
			ref={ref}
			className={`reveal${variantClass}${visible ? ' reveal--visible' : ''}${className ? ` ${className}` : ''}`}
			style={{ '--reveal-delay': `${delay}ms` }}>
			{children}
		</Tag>
	);
}
