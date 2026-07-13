import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageLoader from './components/layout/PageLoader';
import PageTransition from './components/layout/PageTransition';

const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const CaseStudy = lazy(() => import('./pages/case-study/CaseStudy'));

export default function App() {
	return (
		<div className="app-shell">
			<BrowserRouter >
				<Navbar />
				<main className="flex-1">
					<Suspense fallback={<PageLoader />}>
						<PageTransition>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/about" element={<About />} />
								<Route path="/projects/:projectId" element={<CaseStudy />} />
							</Routes>
						</PageTransition>
					</Suspense>
				</main>
				<Footer />
			</BrowserRouter>
		</div>
	);
}
