import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServicePage from './pages/ServicePage';
import Trainings from './pages/Trainings';
import Training from './pages/Training';       // singular, training.jsx
import Trainers from './pages/Trainers';
import CoffeeBreak from './pages/CoffeeBreak';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Useful from './pages/Useful';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/useful" element={<Useful />} />
        <Route path="/trainings" element={<Trainings />} />

        <Route path="/training" element={<Training />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/coffee-break" element={<CoffeeBreak />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
