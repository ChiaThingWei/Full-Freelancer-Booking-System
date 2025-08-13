
type CardProps = {
  title: string;
  data1: number;
  data2?: number;
  data3?: number;
  data4?: number;
  subtitle?: string;
  subtitle1?: string;
  subtitle2?: string;
  subtitle3?: string;
  subtitle4?: string;
  bgColor?: string; 
};



 const Card = ({title,data4,data1,data2,data3, subtitle, subtitle1,subtitle2, subtitle3,subtitle4, bgColor = ''}: CardProps) => {
  return (
    <div className={` ${bgColor} text-black flex justify-between hover:scale-105 transition-transform duration-300 flex-col  p-3  rounded-xl overflow-hidden `}>
 
     
        <div className='flex flex-col'>
         <p className=' text-lg md:text-2xl font-semibold'>{title}</p>
        <p className='text-xs text-gray-500'>{subtitle}</p>
        </div>
   
        <div className='flex flex-col'>

            <div className='flex flex-row justify-between mt-4 '>
                <p className='text-sm my-2 font-semibold'>{subtitle1}</p>
                <p className=' my-2  text-sm'> {data1}</p>
            </div>

            <div className='flex flex-row justify-between'>
                <p className='text-sm font-semibold'>{subtitle2}</p>
                <p className=' text-sm'>{data2}</p>
            </div>

            <div className='flex flex-row justify-between'>
                <p className='text-sm my-2 font-semibold'>{subtitle3}</p>
                <p className=' my-2 text-sm'>{data3}</p>
            </div>

            <div className='flex flex-row justify-between'>
                <p className='text-sm font-semibold'>{subtitle4}</p>
                <p className=' text-sm'>{data4}</p>
            </div>

        </div>
       

       
        
        <p className=''></p>
    
  </div>
  )
}

export default Card

