import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface BookingStoreState {
  // Filter
  statusFilter: string
  setStatusFilter: (status: string) => void
  currentClientId?: number;
  setCurrentClientId: (id: number) => void

  // Pagination
  page: number;
  limit: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;

  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchInput: string;
  setSearchInput: (input: string) => void;

  //Counts
  bookingCounts: Record<'all'|'pending'|'confirmed'|'cancelled'|'shooting_done'|'completed', number>
  setBookingCounts: (counts: BookingStoreState['bookingCounts']) => void
}

export const useBookingStore = create<BookingStoreState>()(
  persist(
    (set) => ({
      // Filter
      statusFilter: 'all',
      setStatusFilter: (status) => set({ statusFilter: status }),
      currentClientId: undefined,
      setCurrentClientId: (id) => set({ currentClientId: id }),

      // Pagination
      page: 1,
      limit: 10,
      setPage: (page) => set({ page }),
      setLimit: (limit) => set({ limit }),

      // Search
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
      searchInput: '',
      setSearchInput: (input) => set({ searchInput: input }),

      //Counts
      bookingCounts: { pending: 0, confirmed: 0, completed: 0, all: 0, cancelled: 0, shooting_done: 0 },
      setBookingCounts: (counts) => set({ bookingCounts: counts }),
    }),
    { name: 'booking-store' }
  )
)
