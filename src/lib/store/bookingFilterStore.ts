// src/store/bookingFilterStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface BookingFilterState {
  statusFilter: string
  setStatusFilter: (status: string) => void
}

export const useBookingFilterStore = create<BookingFilterState>()(
  persist(
    (set) => ({
      statusFilter: 'all',
      setStatusFilter: (status) => set({ statusFilter: status }),
    }),
    { name: 'booking-filter' } // localStorage key
  )
)
