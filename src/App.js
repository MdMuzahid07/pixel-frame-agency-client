import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/AboutUs/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Services from './pages/Services/Services';

function App() {
  return (
    <div className='bg-slate-100'>
      <div className='lg:max-w-screen-xl	mx-auto'>
        <Navbar >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Navbar>
      </div>
    </div>
  );
}

export default App;
