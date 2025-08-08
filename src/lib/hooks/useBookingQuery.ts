import { useQuery } from '@tanstack/react-query';
import { fetchAllBookings, fetchLatestBookingsByStatus } from '@/lib/api/booking';
import { fetchBookingsByStatus } from '@/lib/api/booking';

export const useBookingQuery = () => {
  return useQuery({
    queryKey: ['bookings'],
    queryFn: fetchAllBookings,
    staleTime: 1000 * 60 * 5, 
  })
}

export const useBookingByStatus  = (status:string) => {
  return useQuery({
    queryKey: ['bookings', status], 
    queryFn: () => fetchBookingsByStatus(status),
    staleTime: 1000 * 60 * 5,
  })
}

export const useConfirmedBookingByLimit = (status:string , limit:number)=>{

  return useQuery({
    queryKey:['booking',status, limit],
    queryFn: ()=> fetchLatestBookingsByStatus(status,limit),
    staleTime: 1000 * 60 * 5,
  })


}