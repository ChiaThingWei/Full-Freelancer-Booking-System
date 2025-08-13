
import dayjs from "dayjs";
import { FilePenLine } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BookingCardProps {
  bookings: Booking[]; // 直接接收数据
  tablePage: number
  tablePageSize: number
}

export interface Booking {
  id: number
  name: string
  date: string
  time: string
  service: string
  status: 'pending' | 'confirmed' | 'shooting_done' | 'delivered' | string;
  email: string
  phone: string
  remarks?: string
  created_at: string
  confirmedFee: number
}

const DataTable = ({ bookings,tablePage,tablePageSize }: BookingCardProps ) => {

  const navigate = useNavigate()

  const handleEdit = (bookingId: number)=> {
    navigate(`${bookingId}/edit`, { state: bookingId });
}

  if (!bookings ) return <p>Loading...</p>
    if (bookings.length === 0 ) return <p></p>

   


  return (
    <div className="mt-6 lg:block ">
        <table className="w-full bg-white  rounded-xl">
            <thead className="border-b-1 border-gray-300">
                <tr className="">
                    <th className='p-3 font-semibold'>No.</th>
                    <th className='p-3 font-semibold'>Name</th>
                    {/* <th className="p-3">Booking ID</th> */}
                    <th className='p-3 font-semibold'>Phone / Email</th>
                    {/* <th className='p-3'>Email</th> */}
                    <th className='p-3 font-semibold'>Service</th>
                    <th className='p-3 font-semibold'>Appointment<br/> Date</th>
                    <th className='p-3 font-semibold'>Submitted<br/> Date</th>
                    <th className='p-3 font-semibold'>Total Fee (RM)</th>
                    <th className='p-3 font-semibold'>Status</th>
                    <th className='p-3 font-semibold'>Edit</th>

                </tr>
            </thead>
            <tbody className="">
           
                {bookings.map((booking,index)=>(

                  <tr key={booking.id} className="border-b-1 ">

                    <th className="px-3 py-5 text-sm font-normal">{(tablePage - 1) * tablePageSize + index + 1}.</th>
                    <th  className="px-3 py-5 font-normal"><span className="text-blue-500 text-xs">#{booking.id}<br/></span>{booking.name}</th>
                    <th className="px-3 py-5 text-sm font-normal" >{booking.phone}<br/>{booking.email}</th>
                    {/* <th className="p-3 text-sm"></th> */}
                    <th className="px-3 py-5 text-sm font-normal">{booking.service}</th>
                    <th className="px-3 py-5 text-sm font-normal">{booking.date}<br/>{booking.time}</th>
                    <th className="px-3 py-5 text-sm font-normal">{dayjs(booking.created_at).format('YYYY-MM-DD')}<br/>{dayjs(booking.created_at).format('HH:mm:ss')}</th>
                    <th className="px-3 py-5 text-sm font-normal">{booking.confirmedFee}</th>
                    <th className="px-3 py-5 text-sm font-normal">{booking.status}</th>
                    <th className="px-3 py-5 text-sm font-normal">
                      <FilePenLine 
                      onClick={()=>handleEdit(booking.id)}
                      strokeWidth={2} className="cursor-pointer transition-colors duration-300 hover:text-blue-500 size-5" />
                      </th>
                  </tr>


                ))}
            

            </tbody>
        </table>
    </div>
  )
}

export default DataTable