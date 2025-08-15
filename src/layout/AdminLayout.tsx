import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { RiDashboard2Line } from "react-icons/ri"
import { RiDatabase2Line } from "react-icons/ri"
import { useLocation } from 'react-router-dom'
import { useSidebarStore } from '@/lib/store/sidebarStore'

const menuItems = [
  {
    label: 'Dashboard',
    href: '/admin',
    icon: RiDashboard2Line
  },
  {
    label: 'Manage Bookings',
    href: '/admin/managebooking',
    icon: RiDatabase2Line
  },
  {
    label: 'User Feedback',
    href: '',
    icon: RiDatabase2Line
  },
  {
    label: 'Manage Contents',
    href: '',
    icon: RiDatabase2Line
  },
  {
    label: 'Setting',
    href: '',
    icon: RiDatabase2Line
  }
];

const AdminLayout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation();
  const { collapsed, toggle } = useSidebarStore();


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
      {/* <div className={`fixed z-50 md:static shadow- md:translate-x-0 transition-transform duration-200
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        w-60 bg-white text-black p-4 h-full`}> */}

        <div
        className={`fixed z-50 md:static md:translate-x-0 transition-all duration-200
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        ${collapsed ? 'w-20' : 'w-60'}
        bg-white text-black p-4 h-full`}
        >

<div className="flex items-center justify-between mb-4 border-b pb-2">
          {!collapsed && (
            <h1 className="text-xl font-semibold text-gray-400">Admin Panel</h1>
          )}
          <button
           onClick={toggle}
            className="p-1 rounded mx-auto hover:bg-gray-200 transition"
          >
            ☰
          </button>
        </div>

        {/* 菜单 */}
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <a key={index} href={item.href}>
                <li
                  className={`${
                    isActive
                      ? 'bg-blue-500 text-white font-semibold'
                      : ''
                  } mb-1 flex items-center cursor-pointer hover:bg-blue-500 hover:text-white rounded-xl py-2 px-2 transition-colors duration-300`}
                >
                  <Icon className="ml-1 my-auto" />
                  {!collapsed && (
                    <span className="ml-4 block">{item.label}</span>
                  )}
                </li>
              </a>
            );
          })}
        </ul>
      </div>
        {/* <ul className="space-y-2">

        <a href="/admin" className=''>
        
        <li className='flex flex-row cursor-pointer hover:bg-blue-500 hover:text-white rounded-xl py-2 px-2 transition-colors duration-300'>
          <RiDashboard2Line className='ml-1 my-auto'/>
          <span className="ml-4 block">Dashboard</span>
        </li>
      </a>
      <a href="/admin/managebooking" className=''>
        <li className='flex flex-row cursor-pointer mt-2 hover:bg-blue-500 hover:text-white rounded-xl py-2 px-2 transition-colors duration-300'>
          <RiDatabase2Line className='ml-1 my-auto'/>
          <span className="ml-4 block">Manage Bookings</span>
        </li>
      </a>
      <a href="/admin" className=''>
        <li className='flex flex-row cursor-pointer mt-2 hover:bg-blue-500 hover:text-white rounded-xl py-2 px-2 transition-colors duration-300'>
          <RiDatabase2Line className='ml-1 my-auto'/>
          <span className="ml-4 block">User Feedback</span>
        </li>
      </a>

      <a href="/admin" className=''>
        <li className='flex flex-row cursor-pointer mt-2 hover:bg-blue-500 hover:text-white rounded-xl py-2 px-2 transition-colors duration-300'>
          <RiDatabase2Line className='ml-1 my-auto'/>
          <span className="ml-4 block">Manage Contents</span>
        </li>
      </a>

      <a href="/admin" className=''>
        <li className='flex flex-row cursor-pointer mt-2 hover:bg-blue-500 hover:text-white rounded-xl py-2 px-2 transition-colors duration-300'>
          <RiDatabase2Line className='ml-1 my-auto'/>
          <span className="ml-4 block">Setting</span>
        </li>
      </a>
      
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
        </ul> */}
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-auto bg-gray-100">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow md:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-xl">
            ☰
          </button>
          <h2 className="text-lg font-semibold">Your Name</h2>
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
