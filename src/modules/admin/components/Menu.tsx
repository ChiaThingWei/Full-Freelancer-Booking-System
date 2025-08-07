import React, { useState } from 'react'


const type = [
   {name:'All'},
   {name:'Pending Approve'},
   {name:'Upcoming Booking'},
   {name:'Completed'}

]

const Menu = () => {

    const [isSelected, setIsSelected] = useState(0)

  return (
    <div className='flex flex-row gap-3 justify-evenly my-4 mx-2 bg-white px-4 py-2 rounded-l shadow-sm'>

        {type.map((tp,index)=>(

                <button key={index} 
                onClick={()=>setIsSelected(index)}
                className={`hover:bg-blue-200 px-4 py-1 transition-colors duration-300 rounded-lg
                ${isSelected === index? 'bg-blue-200':'bg-white'}
                `}>

                    {tp.name}
                </button>

        )

        )}
    </div>
  )
}

export default Menu