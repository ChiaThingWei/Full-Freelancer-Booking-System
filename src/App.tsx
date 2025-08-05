
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
  
  <BrowserRouter>
  <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
