import { supabase } from '@/lib/supabaseClient'

type Booking = {
  id: number
  name: string
  phone: string
  email: string
  date: string
  time: string
  status: string
  confirmedFee: number
}


//Show all booking without any status
export const fetchAllBookings = async () => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}

// edit page use id call back data
export const fetchBookingById = async (id: number) => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('id', id) 
    .single()

  if (error) throw new Error(error.message);
  return data;
};

//Dashboard use to show latest upcoming appointment with limit
export const fetchLatestBookingsByStatus = async (status: string, limit: number) => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('status', status)
    .gte("date", new Date().toISOString())
    .order('date', { ascending: true })
    .limit(limit);

  if (error) throw new Error(error.message);
  return data;
}

// use to show booking with status
export const fetchBookingsByStatus = async (status: string) => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('status', status)
    .order('created_at', { ascending: false })

  if (error) throw new Error(error.message)
  return data
}

// use to show booking with page and limit
// export const fetchBookingsByStatusPaginated = async (
//   status: string,
//   page: number,
//   pageSize: number
// ) => {
//   const from = (page - 1) * pageSize;
//   const to = from + pageSize - 1;

//   const { data, error } = await supabase
//     .from('bookings')
//     .select('*')
//     .eq('status', status)
//     .order('created_at', { ascending: false })
//     .range(from, to);

//   if (error) throw new Error(error.message);
//   return data;
// }

export const fetchBookingsByStatusPaginated = async (
  status: string,
  page: number,
  pageSize: number
) => {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false })
    .range(from, to);

  // 只有 status 不是 all 时才加过滤条件
  if (status !== 'all') {
    query = query.eq('status', status);
  }

  const { data, error } = await query;

  if (error) throw new Error(error.message);
  return data;
};



//statistic used////// ////////////////////////////////////////////////////////

//dashboard use to show this month statistic help client manage booking more easily
export async function getMonthlyBookingStats() {

  const now = new Date();
  const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString()
  const endOfMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
    23,
    59,
    59,
    999
  ).toISOString();

  const { data, error } = await supabase
    .from('bookings')
    .select('status, confirmedFee')
    .gte('created_at', startOfMonth)
    .lte('created_at', endOfMonth)

  if (error) throw error;

  // 统计不同 status 的数量
  const byStatus: Record<string, number> = {};
  data?.forEach((b) => {
    byStatus[b.status] = (byStatus[b.status] || 0) + 1
  })

  const totalRevenue = data
    .filter(b => ['completed'].includes(b.status))
    .reduce((sum, b) => sum + (Number(b.confirmedFee) || 0), 0);

    const estimatedRevenue = data?.reduce(
      (sum, b) => sum + (Number(b.confirmedFee) || 0),
      0
    );

  return {
    total: data?.length || 0,
    byStatus,
    totalPending: byStatus['pending'] || 0,
    totalConfirmed: byStatus['confirmed'] || 0,
    totalShootingDone: byStatus['shooting_done'] || 0,
    totalCancelled: byStatus['cancelled'] || 0,
    totalCompleted: byStatus['completed'] || 0,
    totalRevenue,
    estimatedRevenue
  }
}

// use to show latest 12 months total booking for each service
export async function getLast12MonthsServiceTotals() {
  const now = new Date();

  const startDate = new Date(now.getFullYear(), now.getMonth() - 11, 1).toISOString();
  const endDate = now.toISOString();

  const { data, error } = await supabase
    .from('bookings')
    .select('status, service, created_at') 
    .gte('created_at', startDate)
    .lte('created_at', endDate);

  if (error) throw error;

  const completedBookings = data.filter((b) => b.status === 'completed');

  const serviceTotalsObj: Record<string, number> = {};
  data?.forEach((b) => {
    serviceTotalsObj[b.service] = (serviceTotalsObj[b.service] || 0) + 1;
  });

  const serviceTotalsArr = Object.entries(serviceTotalsObj).map(([name, value]) => ({
    name,
    value
  }));

  console.log(startDate)
  console.log(completedBookings)

  return {
    totalCompleted: completedBookings.length,
    serviceTotals: serviceTotalsArr,
    startDate
  };
}

// use to show total booking for each month in latest 12 months
export async function getLast12MonthsCompletedTotals() {
  const now = new Date();
  const startDate = new Date(now.getFullYear(), now.getMonth() - 11, 1).toISOString();

  const { data, error } = await supabase
    .from('bookings')
    .select('created_at, status, confirmedFee')
    .gte('created_at', startDate)
    .lte('created_at', now.toISOString());

  if (error) throw error;

  // 初始化每个月 total
  const monthlyTotals: Record<string, { total: number; totalConfirmedFee: number }> = {};
  for (let i = 0; i < 12; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = `${d.getFullYear()}-${d.getMonth()}`; // 内部 key
    monthlyTotals[key] = { total: 0, totalConfirmedFee: 0 };
  }

  // 累加 completed bookings
  data
    .filter((b) => b.status === 'completed')
    .forEach((b) => {
      const date = new Date(b.created_at);
      const key = `${date.getFullYear()}-${date.getMonth()}`;
      if (monthlyTotals[key] !== undefined) {
        monthlyTotals[key].total += 1;
        monthlyTotals[key].totalConfirmedFee += b.confirmedFee || 0;
      }
    });

  // 转成数组并格式化月份
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const result = Object.entries(monthlyTotals)
    .map(([key, values]) => {
      const [year, month] = key.split("-").map(Number);
      return {
        month: `${monthNames[month]} ${year}`, // "Sep 2024" 格式
        total: values.total,
        totalConfirmedFee: values.totalConfirmedFee
      };
    })
    .sort((a, b) => {
      // 先按年份，再按月份排序
      const [aYear, aMonth] = a.month.split(" ");
      const [bYear, bMonth] = b.month.split(" ");
      return (
        parseInt(aYear) - parseInt(bYear) ||
        monthNames.indexOf(aMonth) - monthNames.indexOf(bMonth)
      );
    });

    console.log(result.reverse())

  return result
}

//////////edit, update data

export const updateBooking = async (id: number, updates: Partial<Booking>) => {
  const { data, error } = await supabase
    .from("bookings")
    .update(updates)
    .eq("id", id)
    .select();

      console.log('success')
  if (error) throw new Error(error.message);
  return data;
};