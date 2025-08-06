
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'react-hot-toast';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ManageBooking from './pages/admin/ManageBooking';

function App() {

  return (
    <>
  
  <BrowserRouter>
  <ScrollToTop/>
  <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />

        <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='managebooking' element={<ManageBooking/>}/>

        </Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
