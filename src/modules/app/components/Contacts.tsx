import { services } from "../../../utils/Utils"
import { useState, useEffect } from "react";
import BookingDatePicker from "../components/ReactDatepicker";
import { supabase } from '../../../lib/supabaseClient';
import toast from 'react-hot-toast';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Contacts = () => {

  // const [selectedDate] = useState<Date | null>(null);
   const [bookedSlots, setBookedSlots] = useState<string[]>([])
   const [loading, setLoading] = useState(false);
     const slots = ['9:00', '12:00', '15:00','18:00','21:00'];
    //  const [selectedSlot, setSelectedSlot] = useState('');

     const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      remarks: "",
      service: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
    
    useEffect(() => {
      const fetchBookedSlots = async () => {
        if (!formData.date) return;
    
        const { data, error } = await supabase
          .from("bookings")
          .select("time")
          .eq("date", formData.date);
    
        if (error) {
          console.error("获取已预约 slot 失败:", error);
        } else {
          const slots = data.map((row) => row.time);
          setBookedSlots(slots);
        }
      };
    
      fetchBookedSlots();
    }, [formData.date]);

          const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault(); 
            const { name, phone, email, service, date, time, remarks } = formData;
          
            console.log(formData)
            if (!name || !phone || !email || !service || !date || !time) {
              toast.error("请填写完整的表格内容");
              return;
            }
          

            const dateString = date 
          
            setLoading(true);
          
            const { error } = await supabase.from("bookings").insert([
              {
                name,
                phone,
                email,
                service,
                time,
                date: dateString,
                remarks,
              },
            ]);
          
            setLoading(false);
          
            if (error) {
              toast.error("提交失败，请稍后重试");
              console.error(error.message);
            } else {
              toast.success("预约成功！我们会尽快与您联系");
          
              // 清空表单
              setFormData({
                name: "",
                phone: "",
                email: "",
                date: "",
                time: "",
                remarks: "",
                service: "",
              });
            }
          };
          

  return (
    <section id='contact' className=' h-auto '>


              <div className=' w-screen h-auto bg-gray-100 flex items-center overflow-hidden'>

                <div className='flex flex-col mx-auto w-4/5  justify-center items-center'>
                  <h1 className=' text-2xl lg:text-4xl mt-10  mx-auto font-semibold'>Ready to Get Started ?</h1>
                  <p className="text-gray-500 mt-2">Let’s connect and plan your next step.</p>

                 

                    <form 
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row mt-10 gap-6 rounded-lg bg-white shadow-sm p-6 w-full">
                      <div className="md:w-1/2">
                        <input 
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Name" 
                          className="w-full p-3 border-2 border-gray-300 rounded mb-4 mt-2"
                        />

                        <input      
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number" 
                          className="w-full p-3 border-2 border-gray-300 rounded mb-4 mt-2"
                        />

                        <input      
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email" 
                          className="w-full p-3 border-2 border-gray-300 rounded mb-4 mt-2"
                        />

                        <Select
                          value={formData.service}
                          onValueChange={(val) => setFormData((prev) => ({ ...prev, service: val }))}
                        >
                          <SelectTrigger className="w-full py-6 font-bold mb-2">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((srv, index) => (
                              <SelectItem key={index} value={srv.service}>
                                {srv.title} — {srv.price}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <textarea
                          name="remarks"
                          value={formData.remarks}
                          onChange={handleChange}
                          placeholder="Remarks"
                          className="w-full mt-4 h-24 p-3 border-2 border-gray-300 rounded"
                        />
                      </div>

                      <div className="md:w-1/2 flex flex-col">
                        <div className="pb-1 mt-2">
                          <BookingDatePicker
                           selectedDate={formData.date ? new Date(formData.date) : null}
                           setSelectedDate={(date) =>
                             setFormData((prev) => ({ ...prev, date: date ? date.toISOString().split("T")[0] : "" }))
                           }
                          />
                        </div>

                        <p className="text-gray-500 font-semibold py-2">Select a slot</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                          {slots.map((slot) => {
                            const isBooked = bookedSlots.includes(slot)

                            return (
                              <button
                                key={slot}
                                type="button"
                                
                                onClick={() => !isBooked && setFormData((prev) => ({ ...prev, time: slot }))}
                                disabled={isBooked}
                                className={`p-4 rounded transition-colors duration-300 border-2
                                  ${formData.time === slot ? "bg-blue-200 border-blue-400" : 
                                    isBooked ? "bg-gray-300 cursor-not-allowed" : "bg-white hover:bg-blue-200 cursor-pointer"}
                                `}
                              >
                                <p className="text-center">{slot}</p>
                              </button>
                            )
                          })}
                        </div>

                        <p className="text-gray-500 text-sm my-4">
                          After submitting the reservation, we will contact you within 1-2 working
                          days to confirm the information, date and shooting content. Please wait
                          patiently for us to contact you 😊
                        </p>

                        <button
                          type="submit"
                          className={`bg-blue-500 w-1/2 mx-auto p-3 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors duration-300
                            ${
                              loading ? 'opacity-50 cursor-not-allowed' : ''
                          } `}>
                          Submit
                        </button>
                      </div>
                    </form>

                 
                    


                 </div>
              </div>
            
                </section>
  )
}

export default Contacts