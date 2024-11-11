import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Project from "./pages/project/Project";
import Themes from './components/Themes';
import './index.css';
import Archived from './pages/archived/Archived';
import Footer from './pages/footer/Footer';

function AppContent() {
  const location = useLocation(); // This will work inside BrowserRouter's context

  return (
    <div>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="archived" element={<Archived />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      {/* Display Footer only on the Contact page */}
      {location.pathname === '/contact' && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent /> {/* Render main content inside BrowserRouter */}
    </BrowserRouter>
  );
}

export default App;
