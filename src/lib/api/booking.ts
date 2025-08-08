import { supabase } from '@/lib/supabaseClient'

export const fetchAllBookings = async () => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}

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

export const fetchBookingsByStatus = async (status: string) => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('status', status)
    .order('created_at', { ascending: false })

  if (error) throw new Error(error.message)
  return data
}

export const fetchBookingsByStatusPaginated = async (
  status: string,
  page: number,
  pageSize: number
) => {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('status', status)
    .order('created_at', { ascending: false })
    .range(from, to);

  if (error) throw new Error(error.message);
  return data;
}