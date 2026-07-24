import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageLoader from './components/layout/PageLoader';
import PageTransition from './components/layout/PageTransition';

const Home = lazy(() => import('./pages/home/Home'));
const Portfolio = lazy(() => import('./pages/portfolio/Portfolio'));
const About = lazy(() => import('./pages/about/About'));
const CaseStudy = lazy(() => import('./pages/case-study/CaseStudy'));

function LegacyProjectRedirect() {
  const { projectId } = useParams();
  return <Navigate to={`/portfolio/projects/${projectId}`} replace />;
}

export default function App() {
  return (
    <div className="app-shell">
      <BrowserRouter>
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio/projects/:projectId" element={<CaseStudy />} />
                <Route path="/projects/:projectId" element={<LegacyProjectRedirect />} />
              </Routes>
            </PageTransition>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
