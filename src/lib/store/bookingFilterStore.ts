// src/store/bookingFilterStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface BookingFilterState {
  statusFilter: string
  setStatusFilter: (status: string) => void
}

// zustand use to hold the condition
export const useBookingFilterStore = create<BookingFilterState>()(
  persist(
    (set) => ({
      statusFilter: 'all',
      setStatusFilter: (status) => set({ statusFilter: status }),
    }),
    { name: 'booking-filter' } // localStorage key
  )
)

interface BookingPaginationState {
  page: number;
  limit: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
}

export const useBookingPaginationStore = create<BookingPaginationState>()(
  persist(
    (set) => ({
      page: 1,
      limit: 10,
      setPage: (page) => set({ page }),
      setLimit: (limit) => set({ limit }),
    }),
    { name: 'booking-pagination' } // localStorage key
  )
);

interface BookingSearchStore{
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchInput: string;
  setSearchInput: (input: string) => void;
}

export const useBookingSearchStore = create<BookingSearchStore>()(
  persist(  
    (set) => ({
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
      searchInput: '',
      setSearchInput: (input) => set({ searchInput: input }), 
    }),
    { name: 'booking-search' } // localStorage key
  )
)