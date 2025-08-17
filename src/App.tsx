
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './modules/app/pages/Home'
import ScrollToTop from './modules/app/components/ScrollToTop'
import { Toaster } from 'react-hot-toast'
import AdminLayout from './layout/AdminLayout'
import Dashboard from './modules/admin/pages/Dashboard'
import ManageBooking from './modules/admin/pages/ManageBooking'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/queryClient'
import EditBooking from './modules/admin/pages/EditBooking'
import Register from './modules/app/pages/Register'
import AdminLogin from './modules/app/pages/Login'

function App() {

  return (
    <>
  
  <BrowserRouter>
  <ScrollToTop/>
  <Toaster position="bottom-right" reverseOrder={false} />
  <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='managebooking' element={<ManageBooking/>}/>
          <Route path='managebooking/:bookingId/edit' element={<EditBooking/>}/>
        </Route>

      </Routes>
      </QueryClientProvider>
    </BrowserRouter>
    </>
  )
}

export default App
