import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { fetchAllBookings, fetchBookingById, fetchBookingsByStatuses, fetchBookingsByStatusPaginated, fetchBookingsCounts, fetchLatestBookingsByStatus, getLast12MonthsCompletedTotals, getLast12MonthsServiceTotals, getMonthlyBookingStats, updateBooking } from '@/lib/api/booking';
import { fetchBookingsByStatus } from '@/lib/api/booking'
import { useMutation,useQueryClient } from '@tanstack/react-query'
import Booking from '@/modules/app/pages/Register';

// type Booking = {
//   id: number
//   name: string
//   phone: string
//   email: string
//   date: string
//   time: string
//   status: string
//   confirmedFee: number
// }

export const useBookingQuery = () => {
  return useQuery({
    queryKey: ['bookings'],
    queryFn: fetchAllBookings,
    staleTime: 1000 * 60 * 5, 
  })
}

// Fetch bookings by status
export const useBookingByStatus  = (status:string) => {
  return useQuery({
    queryKey: ['bookings', status], 
    queryFn: () => fetchBookingsByStatus(status),
    staleTime: 1000 * 60 * 5,
  })
}

// Fetch bookings by multiple statuses
export const useBookingsByStatuses = (statuses: string[]) => {
  return useQuery({
    queryKey: ['bookings', statuses],
    queryFn: () => fetchBookingsByStatuses(statuses),
    staleTime: 1000 * 60 * 5,
  });
};

export const useBookingById  = (id:number) => {
  return useQuery({
    queryKey: ['bookings', id], 
    queryFn: () => fetchBookingById(id),
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


export const useBookingsCounts = () => {

  return useQuery({
    queryKey:['bookingsCounts'],
    queryFn: ()=> fetchBookingsCounts(),
    staleTime: 1000 * 60 * 5,
  })

 
};

// export const useBookingTotalByStatus = (status:string , limit:number)=>{

//   return useQuery({
//     queryKey:['booking',status, limit],
//     queryFn: ()=> fetchLatestBookingsByStatus(status,limit),
//     staleTime: 1000 * 60 * 5,
//   })

// }

//use to show this month booking
export const useMonthlyBookingStats = () => {
  return useQuery({
    queryKey: ['monthlyBookingStats'],
    queryFn: getMonthlyBookingStats,
    staleTime: 1000 * 60 * 5
  });
};

// use to show the total for each service in last 12 months
export function YearlyServiceTotal() {
 return useQuery({
    queryKey: ['yearlyServiceStats'],
    queryFn: getLast12MonthsServiceTotals,
  })
}

// use to show total booking for last 12 months
export function YearlyCompletedTotal() {
  return useQuery({
     queryKey: ['yearlyCompletedStats'],
     queryFn: getLast12MonthsCompletedTotals,
   })
 }


//manage booking page show data

export const useBookingsByStatusPaginated = (
  status: string,
  page: number,
  pageSize: number,
  searchQuery?: string
) => {
  return useQuery({
    queryKey: ['bookings', status, page, pageSize, searchQuery],
    queryFn: () => fetchBookingsByStatusPaginated(status, page, pageSize, searchQuery),
    staleTime: 1000 * 60,
    placeholderData: keepPreviousData,
  })
}


//edit/update booking data
export const useUpdateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updates }: { id: number; updates: Partial<typeof Booking> }) =>
      updateBooking(id, updates),
    onSuccess: (_,{id}) => {
    
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["booking",id] });
    },
  });
};