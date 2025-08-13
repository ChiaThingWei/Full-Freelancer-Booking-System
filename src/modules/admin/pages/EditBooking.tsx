import { useBookingById, useUpdateBooking } from '@/lib/hooks/useBookingQuery'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import DatePicker from 'react-datepicker'

const EditBooking = () => {

  const {bookingId} = useParams()
  const idNum = Number(bookingId)
  const {data:booking, isLoading, error} = useBookingById(idNum)
  const updateBookingMutation = useUpdateBooking()

  // const handleSubmit = () => {
  //   console.log('here')
  //   updateBookingMutation.mutate({
  //     id: idNum,
  //     updates: { status: "confirmed" }
  //   })

    
  // }

  const handleSubmit = () => {
    updateBookingMutation.mutate(
      {
        id: idNum,
        updates: { 
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          date: formData.date,
          time: formData.time,
          status: formData.status,
          confirmedFee: formData.confirmedFee,
         }
      },
      {
        onSuccess: () => {
          setFormData((prev) => ({
            ...prev,
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            date: formData.date,
            time: formData.time,
            status: formData.status,
            confirmedFee: formData.confirmedFee,
          }));
          toast.success('Update Data Successfully')
        }
      }
    )
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    status: "",
    confirmedFee: 0
  })

  useEffect(() => {
    if (booking) {
      setFormData({
        name: booking.name || "",
        email: booking.email || "",
        phone: booking.phone || "",
        date: booking.date || "",
        time: booking.time || "",
        status: booking.status || "",
        confirmedFee: booking.confirmedFee || "",
      })
    }
  }, [booking])



  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
       <h1 className='p-2 font-semibold text-xl mb-4 md:text-3xl'>Edit Booking</h1>

        <div className='sm:w-3/4 md:w-1/2 bg-blue-100 rounded border-2 border-blue-200 p-2 flex flex-col justify-center'>
       <div>
         <p className='p-2 font-semibold text-lg'>Booking ID #{booking.id}</p>
       </div>
       

       <form className='grid gap-3 grid-cols-2'>

        <div className='flex flex-col'>
          <label className='p-2'>Name</label>
          <input
            type="text"
            value={formData.name}
            className='border-2 rounded p-2 bg-white'
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className='flex flex-col'>
          <label className='p-2'>Phone</label>
          <input
            type="text"
            value={formData.phone}
            className='border-2 rounded p-2 bg-white'
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div className='flex flex-col'>
          <label className='p-2'>Email</label>
          <input
            type="email"
            value={formData.email}
            className='border-2 rounded p-2 bg-white'
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className='flex flex-col'>
          <label className='p-2'>Date</label>
          {/* <input
            type="email"
            value={booking.date}
            className='border-2 rounded p-2 bg-white'
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          /> */}
          {/* <DatePicker
            selected={formData.date ? new Date(formData.date) : null}
            onChange={(date: Date | null) => {
              setFormData({
                ...formData,
                date: date ? date.toISOString() : ""
              });
            }}
            dateFormat="yyyy-MM-dd"
            className='bg-white p-2 rounded border-gray-200 border-2'
          /> */}
          <DatePicker
              selected={formData.date ? new Date(formData.date) : null}
              onChange={(date: Date | null) => {
                if (date) {
                  console.log(date) // 这里就能看到选中的新日期
                  setFormData({ ...formData,  date: date.toISOString().split("T")[0] });
                }
              }}
               className='bg-white p-2 rounded w-full border-gray-200 border-2'
              dateFormat="yyyy-MM-dd"
            />
        </div>

        <div className='flex flex-col'>
          <label className='p-2'>Time</label>
          <input
            type=""
            value={formData.time}
            className='border-2 rounded p-2 bg-white'
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          />
        </div>

        <div className='flex flex-col'>
          <label className='p-2'>Status</label>
          <select
            value={formData.status}
            className='border-2 rounded p-2 bg-white'
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="shooting_done">Shooting Done</option>
            <option value="cancelled">Cancelled</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className='flex flex-col'>
          <label className='p-2'>Confirmed Fee (RM)</label>
          <input
            type=""
            value={formData.confirmedFee}
            className='border-2 rounded p-2 bg-white'
            onChange={(e) => setFormData({ ...formData, confirmedFee: Number(e.target.value) })}
          />
        </div>
        
        </form>
        <button
          type="button"
          onClick={handleSubmit}
          className='cursor-pointer mt-6 bg-blue-400 p-3 rounded text-white transition-colors duration-300 hover:bg-blue-500'
        >
          Update
        </button>
        </div>
        
    </div>
  )
}

export default EditBooking