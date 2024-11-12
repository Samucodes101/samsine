import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Hackathon from './pages/Hackathon';
import TechHub from './pages/TechHub';
function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/hackathon" element={<Hackathon />} />
            <Route path="/services/techhub" element={<Techhub />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;