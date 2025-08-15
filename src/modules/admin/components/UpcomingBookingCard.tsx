
import { CircleUserRound } from "lucide-react"
import { useBookingByStatus, useBookingsByStatuses, useConfirmedBookingByLimit } from '@/lib/hooks/useBookingQuery'
import { eachDayOfInterval, startOfMonth, endOfMonth, format } from 'date-fns'
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";




const UpcomingBookingCard = () => {

  // const today = new Date()
  // const days = eachDayOfInterval({
  //   start: startOfMonth(today),
  //   end: endOfMonth(today)
  // })

  const [selectedDay, setSelectedDay] = useState<Date>();;
  
  // 模拟预约数据
  // const appointments = {
  //   "2025-08-14": [
  //     { time: "9:30 AM", name: "Bubu" }
  //   ],
  //   "2025-08-16": [
  //     { time: "10:00 AM", name: "Alice" },
  //     { time: "2:00 PM", name: "Bob" }
  //   ],
  //   "2025-08-20": [
  //     { time: "9:30 AM", name: "Charlie" }
  //   ]
  // };

  // const bookedDays = [
  //   new Date(2025, 7, 14), // 8月14日
  //   new Date(2025, 7, 16), // 8月16日
  //   new Date(2025, 7, 20), // 8月20日
  // ];

  // 有预约的日期
  // const bookedDays = Object.keys(appointments).map(dateStr => new Date(dateStr));

    // const{data, isLoading, error} = useConfirmedBookingByLimit('confirmed',5)
    // const { data: bookings, isLoading ,error} = useBookingByStatus('confirmed')

    const { data: bookings, isLoading, error } = useBookingByStatus('confirmed');


    const confirmedDays = bookings?.map(b => new Date(b.date))

    const appointments = bookings?.reduce((acc, b) => {
      const dateKey = format(new Date(b.date), 'yyyy-MM-dd')
      if (!acc[dateKey]) acc[dateKey] = []
      acc[dateKey].push({ time: b.time, name: b.name })
      return acc
    }, {} as Record<string, { time: string; name: string }[]>) || {}

   
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong</p>;

  return (
    <>
{/* <div className="grid grid-cols-7 gap-2">
      {days.map((day) => {
        const dateString = format(day, 'yyyy-MM-dd')
        const hasAppointment = appointments.includes(dateString)

        return (
          <div
            key={dateString}
            className="p-2 text-center bg-red-200 border rounded relative"
          >
            {format(day, 'd')}
            {hasAppointment && (
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </div>
        )
      })}
    </div> */}

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

      {/* {selectedDay && (
        <div className="mt-4 p-3 border rounded">
          你选择的日期是：{selectedDay.toDateString()}
        </div>
      )} */}
      <div className="flex-1 bg-white shadow-md  rounded-xl p-6 mx-auto w-full sm:w-auto">
        {selectedDay ? (
          <>
            <h2 className="text-lg font-semibold mb-2">
              {format(selectedDay, "yyyy-MM-dd")}'s Appointments
            </h2>
            <ul className="space-y-2">
              {appointments[format(selectedDay, "yyyy-MM-dd")]?.map((appt, i) => (
                <li
                  key={i}
                  className="p-4 shadow-sm rounded-xl border-2 border-slate-900 transition-transform duration-300 hover:scale-105 bg-white"
                >
                  <strong>{appt.time}</strong> - {appt.name}
                </li>
              )) || <p>No Appointment</p>}
            </ul>
          </>
        ) : (
          <p>点击一个日期查看预约</p>
        )}
      </div>
    </div>
{/* <div className="flex gap-8">
   
      <DayPicker
        mode="single"
        selected={selectedDay}
        onSelect={setSelectedDay}
        modifiers={{
          booked: bookedDays
        }}
        modifiersClassNames={{
          booked: "relative booked-day"
        }}
      />
      

    
      <div className="flex-1">
        {selectedDay ? (
          <>
            <h2 className="text-lg font-semibold mb-2">
              {format(selectedDay, "yyyy-MM-dd")} 的预约
            </h2>
            <ul className="space-y-2">
              {appointments[format(selectedDay, "yyyy-MM-dd")]?.map((appt, i) => (
                <li
                  key={i}
                  className="p-2 border rounded bg-gray-50"
                >
                  <strong>{appt.time}</strong> - {appt.name}
                </li>
              )) || <p>没有预约</p>}
            </ul>
          </>
        ) : (
          <p>点击一个日期查看预约</p>
        )}
      </div>



    
      <style>
        {`
        .booked-day::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background-color: red;
          border-radius: 50%;
        }
        `}
      </style>
    </div> */}




    {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
    {data?.map((data,index)=>( */}
        
    
    {/* // <div    key={index}
    //     className='bg-white px-2 mb-4 rounded flex w-full sm:w-2/3 flex-row border-2 border-gray-500'>
          
    //         <div className='flex flex-row p-2 justify-center w-1/2 sm:w-1/3 my-auto'>
    //         <CircleUserRound strokeWidth={1.5}/>
            
    //         <p className='ml-2'>{data.name}
    //         </p>
    //         </div> */}

    {/* //         <div className='flex flex-col justify-center my-2'>
    //             <p className='text-xs mb-2'>Booking #{data.id}</p>
    //             <p className="text-xs">{data.phone}</p>
    //             <p className="text-xs">{data.date} {data.time}</p>
    //             <p className="text-xs mb-2">{data.service}</p>
    //             <p className='text-xs'>Remarks: 
    //                 <span> {data.remarks}</span></p>
    //         </div>
    // </div> */}

{/* 
    // <div key={index} className="border-1 border-gray-300 shadow-sm flex flex-col bg-slate-800  transition-transform duration-300 hover:scale-105 rounded-xl p-4">
        
    //     <div className="flex flex-row justify-between text-white">
    //      <p className="font-semibold text-lg">{data.name}</p>
    //      <p className="font-semibold text-sm my-auto">{data.date}</p>
    //     </div>
        
    //     <p className="text-sm text-gray-400">{data.remarks}</p>

    // </div>
      
    // ))}
    // </div> */}
    </>
  )
}

export default UpcomingBookingCard