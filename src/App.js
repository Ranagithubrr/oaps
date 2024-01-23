import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import Servicepage from './Pages/Servicepage';
import Insightspage from './Pages/Insightspage';
import Contactpage from './Pages/Contactpage';
import BlogDetail from './Pages/BlogDetail';
import Copyright from './components/Copyright/Copyright';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/service" element={<Servicepage />} />
        <Route path="/insights" element={<Insightspage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      {/* <Footer /> */}
      <Copyright />
    </div>
  );
}

export default App;
