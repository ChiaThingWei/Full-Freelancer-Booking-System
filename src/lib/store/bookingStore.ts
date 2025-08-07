// src/lib/store/bookingStore.ts
import { create } from 'zustand';

type Booking = {
    id: string
    name: string
    email: string
}

interface BookingStore {
  selectedBookingId: Booking | null;
  setSelectedBookingId: (booking: Booking | null) => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  selectedBookingId: null,
  setSelectedBookingId: (booking) => set({ selectedBookingId: booking }),
}));
