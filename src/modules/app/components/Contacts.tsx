
import { useState } from "react";
import BookingDatePicker from "../components/ReactDatepicker";
import { supabase } from '../../../lib/supabaseClient';
import toast from 'react-hot-toast';
import { useTranslation } from "react-i18next";
import { useClientStore } from "@/lib/store/clientStore";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Contacts = () => {

  const { t } = useTranslation()
  const {services, language} = useClientStore()
  //  const [bookedSlots, setBookedSlots] = useState<string[]>([])
   const [loading, setLoading] = useState(false);
    //  const slots = ['9:00', '12:00', '15:00','18:00','21:00'];
    

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
    
    // useEffect(() => {
    //   const fetchBookedSlots = async () => {
    //     if (!formData.date) return;
    
    //     const { data, error } = await supabase
    //       .from("bookings")
    //       .select("time")
    //       .eq("date", formData.date);
    
    //     if (error) {
    //       console.error("获取已预约 slot 失败:", error);
    //     } else {
    //       const slots = data.map((row) => row.time);
    //       setBookedSlots(slots);
    //     }
    //   };
    
    //   fetchBookedSlots();
    // }, [formData.date]);

          const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault(); 
            const { name, phone, email, service, date, time, remarks } = formData;
          
            console.log(formData)
            if (!name || !phone || !email || !service || !date ) {
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
                  <h1 className={` ${language === 'en'? 'text-3xl':'text-2xl'} cormorant-garamond  lg:text-4xl mt-10  mx-auto font-semibold`}>{t("booking_title")}</h1>
                  <p className="text-gray-500 mt-2">{t("booking_description")}</p>

                 
                    {/* <form 
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row mt-10 gap-6 rounded-lg bg-white shadow-sm p-6 w-full">
                      <div className="md:w-1/2">
                        <input 
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t("formName")} 
                          className="w-full p-3 border-2 border-gray-300 rounded mb-4 mt-2"
                        />

                        <input      
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t("formPhone")}  
                          className="w-full p-3 border-2 border-gray-300 rounded mb-4 mt-2"
                        />

                        <input      
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("formEmail")} 
                          className="w-full p-3 border-2 border-gray-300 rounded mb-4 mt-2"
                        />

                        <Select
                          value={formData.service}
                          onValueChange={(val) => setFormData((prev) => ({ ...prev, service: val }))}
                        >
                          <SelectTrigger className="w-full py-6 font-bold mb-2">
                            <SelectValue placeholder={t("formService")}  />
                          </SelectTrigger>
                          <SelectContent>
                            {(services || []).map((srv, index) => (
                              <SelectItem key={index} value={srv.title}>
                                {srv.title} — {srv.price}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <textarea
                          name="remarks"
                          value={formData.remarks}
                          onChange={handleChange}
                          placeholder={t("formRemarks")} 
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

                        <p className="text-gray-500 font-semibold py-2">{t("formSlot")} </p>
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
                        {t("formReminder")} 
                        </p>

                        <button
                          type="submit"
                          className={`bg-blue-500 w-1/2 mx-auto p-3 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors duration-300
                            ${
                              loading ? 'opacity-50 cursor-not-allowed' : ''
                          } `}>
                          {t('formSubmit')}
                        </button>
                      </div>
                    </form> */}
                    

                 
                    <form 
  onSubmit={handleSubmit}
  className="flex flex-col mt-10 gap-6 rounded-lg bg-white shadow-sm p-6 w-full"
>
  {/* 左右两边 */}
  <div className="flex flex-col md:flex-row gap-6 w-full">
    {/* 左边 */}
    <div className="md:w-1/2 flex flex-col">
      <input 
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={t("formName")} 
        className="w-full p-3 border-2 border-gray-300 rounded mb-4 mt-2"
      />

      <input      
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder={t("formPhone")}  
        className="w-full p-3 border-2 border-gray-300 rounded mb-4 mt-2"
      />

      <input      
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={t("formEmail")} 
        className="w-full p-3 border-2 border-gray-300 rounded mb-4 mt-2"
      />

      <Select
        value={formData.service}
        onValueChange={(val) => setFormData((prev) => ({ ...prev, service: val }))}
      >
        <SelectTrigger className="w-full py-6 font-bold mb-2">
          <SelectValue placeholder={t("formService")}  />
        </SelectTrigger>
        <SelectContent>
          {(services || []).map((srv, index) => (
            <SelectItem key={index} value={srv.title}>
              {srv.title} — {srv.price}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>

    {/* 右边 */}
    <div className="md:w-1/2 flex flex-col">
      <textarea
        name="remarks"
        value={formData.remarks}
        onChange={handleChange}
        placeholder={t("formRemarks")} 
        className="w-full h-24 p-3 border-2 border-gray-300 rounded mb-4 mt-2"
      />

      <div className="pb-1 mt-2">
        <BookingDatePicker
          selectedDate={formData.date ? new Date(formData.date) : null}
          setSelectedDate={(date) =>
            setFormData((prev) => ({ ...prev, date: date ? date.toISOString().split("T")[0] : "" }))
          }
        />
      </div>

      <p className="text-gray-500 text-sm my-4">
        {t("formReminder")} 
      </p>
    </div>
  </div>

  {/* 提交按钮单独一行 */}
  <div className="w-full flex justify-center ">
    <button
      type="submit"
      className={`bg-blue-500 w-1/2 md:w-1/3 p-3 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors duration-300
        ${loading ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {t('formSubmit')}
    </button>
  </div>
</form>




                 </div>
              </div>
            
                </section>
  )
}

export default Contacts