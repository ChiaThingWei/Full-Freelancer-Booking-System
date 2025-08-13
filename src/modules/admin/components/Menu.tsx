import {motion} from 'framer-motion'

import {
  Drawer,

  DrawerContent,
 DrawerClose,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { SlidersHorizontal } from "lucide-react"
import { useBookingPaginationStore } from '@/lib/store/bookingFilterStore'

interface MenuProps {
  setStatusFilter: (status: string) => void
  active: string
}


const Menu = ({ setStatusFilter, active }: MenuProps) => {

  const {setPage} = useBookingPaginationStore()

  const options = [
    { label: 'All', value: 'all' },
    { label: 'Pending Approve', value: 'pending' },
    { label: 'Upcoming', value: 'confirmed' },
    { label: 'Done Shooting', value: 'shooting_done' },
    { label: 'Completed', value: 'completed' },
  ]

  return (


    <div className="my-4 w-full">
      
      <div>
      <div className="lg:hidden bg-white w-1/3 px-4 py-2 rounded-lg shadow-sm">
       
          <Drawer>
        <DrawerTrigger> 
          <div className="w-full text-center py-2 cursor-pointer flex flex-row justify-between ">
          <SlidersHorizontal className="my-auto"/>
          <p className="my-auto ml-4">Filter</p>
           
           
          </div>
        </DrawerTrigger>
        <DrawerContent className="h-[60%]">
          <DrawerHeader>
            <DrawerTitle className="text-start text-3xl mb-4">Booking Status</DrawerTitle>
            {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
          </DrawerHeader>
         <DrawerClose>
          {options.map(({ label, value }) => (


              <button
              key={value}
              onClick={() => {
                setStatusFilter(value); 
                setPage(1)}}

              className={`
                ${active === value ? 'border-1 border-gray-500':''}
                w-full text-xl text-start cursor-pointer rounded-lg px-3 py-2 `}
              >
                <div className="flex flex-row ">

                  <div 
                  className={`w-5 h-5 rounded-full border-2 my-auto flex items-center justify-center 
                  ${active === value ? 'border-gray-500' : 'border-gray-300'}`}>
                          
                          {active === value && (
                              <div className="w-2.5 h-2.5 rounded-full bg-gray-500" />
                          )}
                   </div>
                  
                  <p className="ml-4">{label}</p>

                </div>
                
            </button>

            
          ))}
          </DrawerClose>
     

        </DrawerContent>
      </Drawer>
      
      </div>

        <p className="p-2 mt-4 font-bold lg:hidden">
            {options.find(option => option.value === active)?.label}
        </p>
        
      </div>
  
      <div className="hidden lg:flex flex-row gap-3 justify-evenly bg-white px-4 py-2 rounded-lg">
        {options.map(({ label, value }) => {

          return(
            <button
              key={value}
              onClick={() => {setStatusFilter(value); setPage(1);}}
              className="relative z-10 px-4 py-1 cursor-pointer transition-colors duration-300 rounded-lg"
            >

            {active === value && (
            
            <motion.div
              layoutId='active-pill'
              className="absolute inset-0 bg-blue-200 rounded-lg"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            
            )}
            <span className="relative z-20">{label}</span>
          </button>
          )
})}
      </div>
    </div>
  )



}

export default Menu