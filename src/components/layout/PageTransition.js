import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function PageTransition({ children }) {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'auto' });
	}, [location.pathname]);

	return (
		<div key={location.pathname} className="page-transition">
			{children}
		</div>
	);
}
