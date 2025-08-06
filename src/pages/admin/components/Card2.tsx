import type { ReactNode } from 'react'

type CardProps = {
  title: string;
  data: number;
  data1?: number;
  icon?: ReactNode;
  subtitle?: string;
  subtitle1?: string;
  subtitle2?: string;
  bordercolor?: string; 
}

const Card2 = ({title,data,subtitle, bordercolor = ''}: CardProps) => {
    return (
      <div className={` ${bordercolor} text-gray-800 flex justify-between hover:scale-105 transition-transform duration-300 bg-gray-300 flex-col  p-3 rounded-xl overflow-hidden `}>
   
       
          <div className='flex flex-col h-1/2'>
           <p className=' text-lg md:text-2xl font-semibold'>{title}</p>
          <p className='text-xs text-gray-500'>{subtitle}</p>
          </div>
     
          <div className='flex flex-col h-1/2'>
  
                  <p className='text-end mt-auto text-4xl pb-0 pt-6'> {data}</p>
            
          </div>
         
  
          <p className=''></p>
      
    </div>
    )
  }

export default Card2