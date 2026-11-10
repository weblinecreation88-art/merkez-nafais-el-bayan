import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import QuranCourses from './pages/QuranCourses';
import ArabicCourses from './pages/ArabicCourses';
import ReligiousSciences from './pages/ReligiousSciences';
import Nursery from './pages/Nursery';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';

/* Ramène en haut de page à chaque navigation : sans cela, on arrive
   au milieu d'une nouvelle page après avoir scrollé la précédente. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="container text-center" style={{ padding: '120px 20px' }}>
      <h1>Page introuvable</h1>
      <p className="mt-2" style={{ color: 'var(--light-text)' }}>
        La page que vous cherchez n’existe pas ou a été déplacée.
      </p>
      <div className="mt-4">
        <Link to="/" className="btn">Retour à l’accueil</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main id="contenu-principal" style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cours-de-coran" element={<QuranCourses />} />
          <Route path="/cours-arabe" element={<ArabicCourses />} />
          <Route path="/sciences-religieuses" element={<ReligiousSciences />} />
          <Route path="/la-creche" element={<Nursery />} />
          <Route path="/inscription-et-tarifs" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/politique-de-confidentialite" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
