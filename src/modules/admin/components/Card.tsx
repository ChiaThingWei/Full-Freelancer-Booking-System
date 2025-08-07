import type { ReactNode } from 'react';

type CardProps = {
  title: string;
  data: number;
  data1?: number;
  icon?: ReactNode;
  subtitle?: string;
  subtitle1?: string;
  subtitle2?: string;
  bordercolor?: string; 
};

 const Card = ({title,data,subtitle,subtitle1,data1, subtitle2, bordercolor = ''}: CardProps) => {
  return (
    <div className={` ${bordercolor} text-black flex justify-between hover:scale-105 transition-transform duration-300 bg-blue-200 flex-col  p-3  rounded-xl overflow-hidden `}>
 
     
        <div className='flex flex-col'>
         <p className=' text-lg md:text-2xl font-semibold'>{title}</p>
        <p className='text-xs text-gray-500'>{subtitle}</p>
        </div>
   
        <div className='flex flex-col'>

            <div className='flex flex-row justify-between mt-4 '>
                <p className='text-sm my-2 font-semibold'>{subtitle1}</p>
                <p className=' my-2  text-sm'> {data}</p>
            </div>

            <div className='flex flex-row justify-between'>
                <p className='text-sm  font-semibold'>{subtitle2}</p>
                <p className='  text-sm'>{data1}</p>
            </div>

        </div>
       

       
        
        <p className=''></p>
    
  </div>
  )
}

export default Card

