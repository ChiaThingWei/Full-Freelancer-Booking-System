import { useBookingFilterStore } from "@/lib/store/bookingFilterStore"
import BookingCard from "../components/BookingCard"
import Menu from "../components/Menu"
import { useBookingQuery, useBookingByStatus } from "@/lib/hooks/useBookingQuery"



const ManageBooking = () => {

  const {statusFilter, setStatusFilter} = useBookingFilterStore()
  const { data: allBookings, isLoading: isAllLoading, error: allError } = useBookingQuery();
  const { data: filteredBookings, isLoading: isFilteredLoading, error: filteredError } =
    useBookingByStatus(statusFilter);

    const bookingsToShow = statusFilter === "all" ? allBookings : filteredBookings;
    const isLoading = statusFilter === "all" ? isAllLoading : isFilteredLoading;
    const error = statusFilter === "all" ? allError : filteredError;
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong</p>;

 

  return (
    <div className="w-full">
       <h1 className='p-2 font-semibold text-xl mb-4'>Manage Booking</h1>
       
        <div className="">
          <Menu setStatusFilter={setStatusFilter} active={statusFilter} />
        </div>

      <div className="mt-4 w-full">
        <BookingCard bookings={bookingsToShow || []}/>
      </div>
    </div>
  )
}

export default ManageBooking