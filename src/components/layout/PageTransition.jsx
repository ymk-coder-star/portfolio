import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function PageTransition({ children }) {
	const location = useLocation();

	useEffect(() => {
		const frame = window.requestAnimationFrame(() => {
			const hashTarget = location.hash
				? document.getElementById(location.hash.slice(1))
				: null;

			if (hashTarget) {
				hashTarget.scrollIntoView({ block: 'start', behavior: 'auto' });
				return;
			}

			window.scrollTo({ top: 0, behavior: 'auto' });
		});

		return () => window.cancelAnimationFrame(frame);
	}, [location.hash, location.pathname]);

	return (
		<div key={location.pathname} className="page-transition">
			{children}
		</div>
	);
}
