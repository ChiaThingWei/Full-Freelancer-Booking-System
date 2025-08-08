
import { CircleUserRound } from "lucide-react"
import { useConfirmedBookingByLimit } from '@/lib/hooks/useBookingQuery'

const UpcomingBookingCard = () => {


    const{data, isLoading, error} = useConfirmedBookingByLimit('confirmed',3)

    console.log(data)
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong</p>;

  return (
    <>
    {data?.map((data,index)=>(
        
    <div 
        key={index}
        className='bg-white px-2 mb-4 rounded flex w-full sm:w-2/3 flex-row border-2 border-gray-500'>
          
            <div className='flex flex-row p-2 justify-center w-1/2 sm:w-1/3 my-auto'>
            <CircleUserRound strokeWidth={1.5}/>
            
            <p className='ml-2'>{data.name}
            </p>
            </div>

            <div className='flex flex-col justify-center my-2'>
                <p className='text-xs mb-2'>Booking #{data.id}</p>
                <p className="text-xs">{data.phone}</p>
                <p className="text-xs">{data.date} {data.time}</p>
                <p className="text-xs mb-2">{data.service}</p>
                <p className='text-xs'>Remarks: 
                    <span> {data.remarks}</span></p>
            </div>
    </div>
      
    ))}
    
    </>
  )
}

export default UpcomingBookingCard