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
import {  useBookingStore } from '@/lib/store/bookingFilterStore'
import { useBookingsCounts } from '@/lib/hooks/useBookingQuery'

interface MenuProps {
  setStatusFilter: (status: string) => void
  active: string
}


const Menu = ({ setStatusFilter, active }: MenuProps) => {

  const {setPage,currentClientId} = useBookingStore()
  const { data: counts } = useBookingsCounts(currentClientId ?? 0) 


  console.log(counts)

  const options = [
    { label: 'All', value: 'all' },
    { label: 'Pending Approve', value: 'pending' },
    { label: 'Upcoming', value: 'confirmed' },
    { label: 'Done Shooting', value: 'shooting_done' },
    { label: 'Completed', value: 'completed' },
    { label: 'Cancelled', value: 'cancelled' },
  ]

  return (


    <div className="my-4 w-full">
      
      <div>
      <div className="lg:hidden bg-white w-1/3 px-4 py-2 rounded-lg ">
       
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
          {options.map(({ label, value }) => {
            
            // let count = 0;
            // if (value === 'pending') count = counts?.pending || 0;
            // if (value === 'confirmed') count = counts?.confirmed || 0;
            // if (value === 'completed') count = counts?.completed || 0;
            // if (value === 'shooting_done') count = counts?.shooting_done || 0;
            // if (value === 'cancelled') count = counts?.cancelled || 0;
            // if (value === 'all') count = counts?.all || 0;


            return(
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
                  
                  <p className="ml-4">{label} ({counts?.[value as 'all'|'pending'|'confirmed'|'cancelled'|'shooting_done'|'completed'] ?? 0})</p>

                </div>
                
            </button>

                        )
})}
          </DrawerClose>
     

        </DrawerContent>
      </Drawer>
      
      </div>

        <p className="p-2 mt-4 font-bold lg:hidden">
            {options.find(option => option.value === active)?.label}
        </p>
        
      </div>
  
      <div className="hidden lg:flex flex-row gap-3 justify-evenly bg-white shadow-sm px-4 py-2 rounded-lg">
        {options.map(({ label, value }) => {

          // let count = 0;
          // if (value === 'pending') count = counts?.pending || 0;
          // if (value === 'confirmed') count = counts?.confirmed || 0;
          // if (value === 'completed') count = counts?.completed || 0;
          // if (value === 'shooting_done') count = counts?.shooting_done || 0;
          // if (value === 'cancelled') count = counts?.cancelled || 0;
          // if (value === 'all') count = counts?.all || 0;

          return(
            <button
              key={value}
              onClick={() => {setStatusFilter(value); setPage(1);}}
              className="relative z-10 px-4 py-2 cursor-pointer transition-colors duration-300 rounded-lg"
            >

            {active === value && (
            
            <motion.div
              layoutId='active-pill'
              className="absolute inset-0 bg-blue-500 rounded-lg"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            
            )}
            <span className={`${active === value ? 'text-white font-semibold':''} relative z-20`}>{label} ({counts?.[value as 'all'|'pending'|'confirmed'|'cancelled'|'shooting_done'|'completed'] ?? 0})</span>
          </button>
          )
})}
      </div>
    </div>
  )



}

export default Menu