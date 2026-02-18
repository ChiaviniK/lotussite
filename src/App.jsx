import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Carbono from './pages/Carbono';

// Component for the landing page that includes all sections
const Home = () => (
  <>
    <Hero />
    <Services />
    <Team />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-neutral text-dark font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carbono" element={<Carbono />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
