import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { RiDashboard2Line } from "react-icons/ri"
import { RiDatabase2Line } from "react-icons/ri"

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed z-50 md:static md:translate-x-0 transition-transform duration-200
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        w-64 bg-gray-800 text-white p-4 h-full`}>
        <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
        <ul className="space-y-2">
          <li className='flex flex-row cursor-pointer hover:bg-gray-700 rounded-full py-2 px-1 transition-colors duration-200'><RiDashboard2Line className='ml-1 my-auto'/><a href="/admin" className="ml-4 block">Dashboard</a></li>
          <li className='flex flex-row cursor-pointer hover:bg-gray-700 rounded-full py-2 px-1 transition-colors duration-200'><RiDatabase2Line className='ml-1 my-auto'/><a href="/admin/managebooking" className="ml-4 block">Manage Bookings</a></li>
          <li>
            <button
              onClick={() => {
                localStorage.removeItem('isLoggedIn')
                window.location.href = '/login'
              }}
              className="text-red-300 hover:underline text-sm"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-auto bg-gray-100">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow md:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-xl">
            ☰
          </button>
          <h2 className="text-lg font-semibold">Admin</h2>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
