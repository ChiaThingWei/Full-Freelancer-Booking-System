
import { useBookingByStatus } from '@/lib/hooks/useBookingQuery'
import { useBookingStore } from '@/lib/store/bookingFilterStore';
import {  format } from 'date-fns'
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useNavigate } from "react-router-dom";

type Appointment = {
  id: number;
  time: string;
  name: string;
  remarks: string;
  service: string;
};

const EventCalender = () => {

    const {currentClientId} = useBookingStore()
    const { data: bookings, isLoading, error } = useBookingByStatus('confirmed',currentClientId??0);


    const confirmedDays = bookings?.map(b => new Date(b.date))

    const appointments: Record<string, Appointment[]> =
    (bookings ?? []).reduce<Record<string, Appointment[]>>((acc, b) => {
      const dateKey = format(new Date(b.date), 'yyyy-MM-dd');
      (acc[dateKey] ??= []).push({
        id: b.id,
        time: b.time,
        name: b.name,
        remarks: b.remarks,
        service: b.service,
      });
      return acc;
    }, {});

    // const [selectedDay, setSelectedDay] = useState<Date>()
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date())


    
  const navigate = useNavigate()

  const handleEdit = (bookingId: number)=> {
    navigate(`managebooking/${bookingId}/edit`, { state: bookingId });
}

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong</p>;

  return (
    <>


<div className="md:flex gap-4 py-4 ">

    
      <DayPicker
        mode="single"
        selected={selectedDay}
        onSelect={setSelectedDay}
        modifiers={{
          confirmed: confirmedDays,
        }}

        className="bg-white h-full p-4 w-full sm:w-3/5 md:w-auto mx-auto mb-6 md:mb-0 rounded-xl shadow-md"
        modifiersClassNames={{
          confirmed:
          "relative after:content-[''] after:absolute after:bottom-1 after:left-[24%] after:w-1/2 after:h-1.5 after:bg-green-500 after:rounded-full",
       
        }}
      />

      <div className="flex-1 bg-white shadow-md  rounded-xl p-6 mx-auto w-full sm:w-auto">
        {selectedDay ? (
          <>
            <h2 className="text-lg font-semibold mb-2">
              {format(selectedDay, "yyyy-MM-dd")}'s Appointments
            </h2>

            <ul className="space-y-2 grid grid-cols-2">
              {appointments[format(selectedDay, "yyyy-MM-dd")]?.map((appt, i) => (
                <li
                  key={i}
                  onClick={()=>handleEdit(appt.id)}
                  className="p-4 cursor-pointer shadow-sm rounded-xl border-3 border-blue-500 transition-transform duration-300 hover:scale-105 bg-white"
                >
                  <strong>{appt.time}</strong> - {appt.name}
                  <br/>( {appt.service} )
                  <br/> <span className="whitespace-pre-line">{appt.remarks}</span>
                  
                  
                </li>
              )) || <p>No Appointment</p>}
            </ul>
          </>
        ) : (
          <p>点击一个日期查看预约</p>
        )}
      </div>
    </div>



    </>
  )
}

export default EventCalender