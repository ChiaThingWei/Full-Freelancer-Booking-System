
import dayjs from 'dayjs'
import { CircleUserRound } from "lucide-react"
import { Calendar1 } from "lucide-react"
import { Clock8 } from "lucide-react"
import { ClipboardClock } from "lucide-react"
import { Mail } from "lucide-react"
import { Phone } from "lucide-react"
import { CalendarArrowUp } from 'lucide-react'
import { Check } from "lucide-react"
import { X } from "lucide-react"


interface BookingCardProps {
    bookings: Booking[]; // 直接接收数据
  }

  export interface Booking {
    id: number;
    name: string;
    date: string;
    time: string;
    status: 'pending' | 'confirmed' | 'shooting_done' | 'delivered' | string;
    email: string;
    phone: string;
    remarks?: string;
    created_at: string;
  }

const BookingCard = ({ bookings }: BookingCardProps) => {
 
    // const [statusFilter, setStatusFilter] = useState('all')
    // const { data: allBookings, isLoading: isAllLoading, error: allError } = useBookingQuery()
    // const { data: filteredBookings, isLoading: isFilteredLoading, error: filteredError } = useBookingByStatus(statusFilter)
  
    // const bookingsToShow = statusFilter === 'all' ? allBookings : filteredBookings;
  
    // const isLoading = statusFilter === 'all' ? isAllLoading : isFilteredLoading;
    // const error = statusFilter === 'all' ? allError : filteredError;
  
    if (!bookings ) return <p>Loading...</p>
    if (bookings.length === 0 ) return <p>Something went wrong</p>

  return (
    <div>
        <ul className="space-y-2 w-full">
        {bookings?.map((booking)=>(
          <li key={booking.id} 
         
          className="p-4 bg-white border-1 hover:bg-gray-100 my-5 transition-colors duration-300 border-gray-300 rounded shadow">

            <div className="w-full">

                <div className="flex flex-row">
                <CircleUserRound className="text-gray-400 size-10 my-auto"/>
                <p className="ml-4">
                    <span className="font-semibold my-auto">
                      {booking.name}<br/>
                    </span>

                    <span  className=" text-sm">
                      Booking #{booking.id}
                    </span>
                </p>
                </div>

              <div className="w-full overflow-hidden flex flex-row md:font-semibold gap-20 md:gap-40 my-4 ">

                <div className="flex flex-col gap-3 w-1/2 px-1">

                  <div className="flex flex-row ">
                    <Calendar1 className="size-5 my-auto text-gray-400" /> 
                    <p className="ml-4 text-sm md:text-md my-auto">{booking.date}</p>
                    </div>

                    <div className="flex flex-row">
                    <Clock8 className="size-5 my-auto text-gray-400" /> 
                    <p className="ml-4 text-sm md:text-md my-auto">{booking.time}</p>
                    </div>

                    <div className="flex flex-row">
                    <ClipboardClock className="size-5 my-auto text-gray-400" /> 
                    <p className="ml-4 text-sm md:text-md my-auto">{booking.status}</p>
                    </div>
                 
                </div>

                <div className="flex flex-col justify-start w-1/2 px-4 md:px-2">
                  <div className="flex flex-col gap-3 ">

                      <div className="flex flex-row hover:text-blue-400 transition-colors duration-300">
                        <Mail  className="size-5 my-auto text-gray-400" /> 
                        <a href={`mailto:${booking.email}`} className="ml-4 text-sm md:text-md my-auto truncate w-full">{booking.email}</a>
                        </div>

                        <div className="flex flex-row hover:text-blue-400 transition-colors duration-300">
                        <Phone className="size-5 my-auto text-gray-400 " /> 
                        <a href={`https://wa.me/6${booking.phone}`} target="_blank" className="ml-4 text-sm md:text-md my-auto">{booking.phone}</a>
                        </div>

                        <div className="flex flex-row">
                        <CalendarArrowUp className="size-5 my-auto text-gray-400" /> 
                        <p className="ml-4 text-sm md:text-md my-auto">{dayjs(booking.created_at).format('YYYY-MM-DD HH:mm:ss')}</p>
                        </div>

                      </div>
                  </div>

              </div>

              <div className="my-2 rounded p-4 w-full bg-blue-100">
                <p className="font-medium">Remarks:</p>
                <p className="text-sm my-2">{booking.remarks}</p>
              </div>  

              {booking.status === 'pending' && (
                <div className="flex flex-row justify-end gap-3">
                  <button className="bg-green-300 flex flex-row gap-2 justify-center hover:bg-green-400 transition-colors duration-300 cursor-pointer font-semibold py-2 px-6 w-1/2 sm:w-1/5 rounded">
                    Confirm <Check />
                  </button>
                  <button className="bg-red-300 flex my-auto flex-row gap-2 justify-center hover:bg-red-400 transition-colors duration-300 cursor-pointer font-semibold py-2 px-6 w-1/2 sm:w-1/5 rounded">
                    Cancel <X  className="my-auto"/>
                  </button>
                </div>
              )}

              {booking.status === 'confirmed' && (
                <div className="flex flex-row justify-end gap-3">

                  <button className="bg-green-300 flex flex-row gap-2 justify-center hover:bg-green-400 transition-colors duration-300 cursor-pointer font-semibold py-2 px-6 w-1/2 sm:w-1/5 rounded">
                   Done <Check />
                  </button>
                  <button className="bg-red-300 flex my-auto flex-row gap-2 justify-center hover:bg-red-400 transition-colors duration-300 cursor-pointer font-semibold py-2 px-6 w-1/2 sm:w-1/5 rounded">
                    Cancel <X  className="my-auto"/>
                  </button>
                </div>
              )}

              {booking.status === 'shooting_done' && (
                <div className="flex flex-row justify-end gap-3">
                  <button className="bg-purple-300 hover:bg-purple-400 transition-colors duration-300 cursor-pointer font-semibold py-2 px-6 sm:w-2/5 rounded">
                    Delivered
                  </button>
                </div>
              )}

                </div>

          </li>
        ))}
        </ul>
    </div>
  )
}

export default BookingCard