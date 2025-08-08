// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

import {
  Drawer,

  DrawerContent,
 DrawerClose,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { SlidersHorizontal } from "lucide-react"

interface MenuProps {
  setStatusFilter: (status: string) => void
  active: string
}


const Menu = ({ setStatusFilter, active }: MenuProps) => {

  const options = [
    { label: 'All', value: 'all' },
    { label: 'Pending Approve', value: 'pending' },
    { label: 'Upcoming', value: 'confirmed' },
    { label: 'Done Shooting', value: 'shooting_done' },
    { label: 'Completed', value: 'completed' },
  ]

  // return (
  //   <div className='flex flex-row gap-3 justify-evenly my-4 mx-2 bg-white px-4 py-2 rounded-l shadow-sm w-full'>

  //       {options.map(({ label, value })=>(

  //               <button key={value} 
  //               onClick={()=>setStatusFilter(value)}
  //               className={`hover:bg-blue-200 px-4 py-1 transition-colors duration-300 rounded-lg
  //               ${active === value ? 'bg-blue-200':'bg-white'}
  //               `}>
  //                   {label}
  //               </button>

  //       )

  //       )}
  //   </div>
  // )

  return (
    <div className="my-4 w-full">
      

      <div className="sm:hidden bg-white w-1/3 px-4 py-2 rounded-lg shadow-sm">
       

          <Drawer>
        <DrawerTrigger> 
          <div className="w-full text-center py-2 cursor-pointer flex flex-row justify-between ">
          <SlidersHorizontal className="my-auto"/>
          <p className="my-auto ml-4">Filter</p>
           
           
          </div>
        </DrawerTrigger>
        <DrawerContent className="h-[60%]">
          <DrawerHeader>
            <DrawerTitle className="text-start text-3xl mb-4">Status</DrawerTitle>
            {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
          </DrawerHeader>
         <DrawerClose>
          {options.map(({ label, value }) => (


              <button
              key={value}
              onClick={() => setStatusFilter(value)}
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
  
      <div className="hidden sm:flex flex-row gap-3 justify-evenly bg-white px-4 py-2 rounded-lg shadow-sm">
        {options.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setStatusFilter(value)}
            className={`hover:bg-blue-200 px-4 py-1 transition-colors duration-300 rounded-lg
            ${active === value ? 'bg-blue-200' : 'bg-white'}
            `}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )



}

export default Menu