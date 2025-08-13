import { useQuery } from '@tanstack/react-query';
import { fetchAllBookings, fetchBookingsByStatusPaginated, fetchLatestBookingsByStatus, getLast12MonthsCompletedTotals, getLast12MonthsServiceTotals, getMonthlyBookingStats } from '@/lib/api/booking';
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
 

 export const useBookingsByStatusPaginated = (
  status: string,
  page: number,
  pageSize: number
) => {
  return useQuery({
    queryKey: ['bookings', status, page, pageSize], // key 要包含依赖条件
    queryFn: () => fetchBookingsByStatusPaginated(status, page, pageSize),
    staleTime: 1000 * 60, // 1 分钟内不重新请求
  });
};
