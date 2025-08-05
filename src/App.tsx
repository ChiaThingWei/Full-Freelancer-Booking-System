
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
  
  <BrowserRouter>
  <ScrollToTop/>
  <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
