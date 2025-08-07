import Menu from "../components/Menu"
import { useQuery } from "@tanstack/react-query"
import { fetchAllBookings } from "@/lib/api/booking"
import { useBookingStore } from "@/lib/store/bookingStore"

const ManageBooking = () => {

  const {data: bookings, isLoading, error} = useQuery({
    queryKey: ['bookings'],
    queryFn: fetchAllBookings,
  });

  const setSelectedBooking = useBookingStore((state) => state.setSelectedBookingId);

  if (isLoading) return <p>Loading...</p>
  if(error) return <p>Error:{error.message}</p>

  return (
    <div>
       <h1 className='p-2 font-semibold text-xl mb-4'>Manage Booking</h1>
      <Menu/>

      <div className="mt-4">
      <ul className="space-y-2">
        {bookings?.map((booking)=>(
          <li key={booking.id} 
          onClick={()=> setSelectedBooking(booking)}
          className="p-4 bg-gray-400 rounded shadow">
            <p><strong>Name:</strong>{booking.name}</p>
            <p><strong>Email:</strong>{booking.email}</p>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default ManageBooking