import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { RiDashboard2Line } from "react-icons/ri"
import { RiDatabase2Line } from "react-icons/ri"
import { useLocation } from 'react-router-dom'
import { useSidebarStore } from '@/lib/store/sidebarStore'
import { MessageCircle } from 'lucide-react'
import { TableOfContents } from 'lucide-react'
import { Settings } from 'lucide-react'

const menuItems = [
  {
    label: 'Dashboard',
    href: '/admin',
    iconClasee:'',
    icon: RiDashboard2Line
  },
  {
    label: 'Manage Bookings',
    href: '/admin/managebooking',
    iconClasee:'',
    icon: RiDatabase2Line
  },
  {
    label: 'User Feedback',
    href: '',
    iconClass:'size-4',
    icon: MessageCircle
  },
  {
    label: 'Manage Contents',
    href: '',
    iconClass:'size-4',
    icon: TableOfContents
  },
  {
    label: 'Setting',
    href: '',
    iconClass:'size-4',
    icon: Settings 
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
        <div
        className={`fixed z-50 shadow-md md:static md:translate-x-0 transition-all duration-200
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
            className={`p-1 cursor-pointer rounded ${collapsed? 'mx-auto':''}  hover:bg-gray-200 transition`}
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
                  } mb-2 flex items-center cursor-pointer hover:bg-blue-400 hover:text-white rounded-xl py-2 px-2 transition-colors duration-300`}
                >
                  <Icon className={`${collapsed? 'mx-auto':'ml-1'} ${item.iconClass} my-auto`} />
                  {!collapsed && (
                    <span className="ml-4 block">{item.label}</span>
                  )}
                </li>
              </a>
            );
          })}
        </ul>
      </div>
      
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-auto bg-gray-100">
        {/* Header */}
        {/* <header className="flex items-center justify-between p-4 bg-white shadow hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-xl">
            ☰
          </button>
          <h2 className="text-lg font-semibold">Your Name</h2>
        </header> */}

        <header className="flex items-center justify-between p-4 bg-white shadow-md ">

          <div className='flex flex-row'>
          <button onClick={() => {
            setSidebarOpen(!sidebarOpen) }} className="text-xl md:hidden cursor-pointer my-auto">
              ☰
            </button>
          <h2 className='font-semibold my-auto ml-4'>Chia Production</h2>
          </div>

          <div className='flex flex-row mr-6'>
            <img
            src='/images/chillguy.png'
            alt='profile'
            className='w-10 h-10 my-auto'
            />
            <h2 className="my-auto ml-2 font-semibold">Chia Thing Wei</h2>
          </div>
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
