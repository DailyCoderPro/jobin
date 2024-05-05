import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ResponsiveAppBar from './Components/Common/CustomNavbar';
import NotFoundPage from './Pages/Error';

function App() {
  return (
    <BrowserRouter>
    <ResponsiveAppBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
