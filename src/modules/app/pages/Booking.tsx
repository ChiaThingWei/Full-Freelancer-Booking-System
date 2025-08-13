import { services } from '../../../utils/Utils'
import { useState,useEffect } from 'react';
import BookingDatePicker from '../components/ReactDatepicker';
import { supabase } from '../../../lib/supabaseClient'; // 按路径调整
import { format } from 'date-fns'
import toast from 'react-hot-toast';

const Booking = () => {

  
    const slots = ['9:00', '12:00', '15:00','18:00','21:00'];

    const [selectedSlot, setSelectedSlot] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('');
    const [remarks, setRemarks] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [loading, setLoading] = useState(false);

    //check available slot
    const [bookedSlots, setBookedSlots] = useState<string[]>([])

    useEffect(() => {
        const fetchBookedSlots = async () => {
          if (!selectedDate) return
      
          const formattedDate = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ''

          const { data, error } = await supabase
            .from('bookings')
            .select('time')
            .eq('date', formattedDate)
      
          if (error) {
            console.error('获取已预约 slot 失败:', error)
          } else {
            const slots = data.map((row) => row.time)
            setBookedSlots(slots)
          }
        }
      
        fetchBookedSlots()
      }, [selectedDate])

    const handleSubmit = async () => {
        if (!name || !phone || !email || !service || !selectedSlot || !selectedDate) {
            toast.error('请填写完整的表格内容'); 
          return;
        }
    
        const dateString = selectedDate.toISOString().split('T')[0];
    
        setLoading(true);
    
        const { error } = await supabase.from('bookings').insert([
          {
            name,
            phone,
            email,
            service,
            time: selectedSlot,
            date: dateString,
            remarks,
          },
        ]);
    
        setLoading(false);
    
        if (error) {
          alert('提交失败，请稍后重试');
          console.error(error.message);
        } else {
          alert('✅ 预约成功！我们会尽快与您联系');
          // 清空表单
          setName('');
          setPhone('');
          setEmail('');
          setService('');
          setSelectedSlot('');
          setRemarks('');
          setSelectedDate(null);
        }
      };
    

  return (
    <div className='flex flex-col w-screen scroll-smooth justify-center  relative bg-gray-100'>


    <div className='w-full flex justify-center items-center py-4'>
        <img
        src='/images/kampung.webp'
        alt='build'
        className='rounded relative object-cover w-4/5 h-[200px] md:h-[300px]'
        />
        <p className='absolute w-3/5 text-center '> 
            <span className='text-green-300 text-lg  md:text-3xl font-bold '>预约摄影时段 <br/></span>
            <span className='md:block hidden'><br/></span>
            <span className='text-white text-xs md:text-sm '>每一个瞬间都值得被铭记。<br />
            立即预约，让我们用镜头定格你的人生故事。 </span>

        </p>
        
    </div>

    <div className='flex flex-col w-full py-4'>

    <p className='font-bold mb-10 w-4/5 mx-auto'>📌 目前摄影服务仅限 KL 与 Klang Valley 区域，
    其他地区暂时未能提供上门拍摄，敬请见谅 🙏</p>

    <div className='md:flex gap-5 w-4/5 mb-4 mx-auto'>

         <div className="w-full mb-4">
            <label htmlFor="name" className="block text-sm font-bold text-green-600 mb-1">
            姓名
              </label>
        <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="请输入你的名字"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            required
        />
        </div>

        <div className='w-full mb-4'>
            <label htmlFor="phone" className="block text-sm font-bold text-green-600 mb-1">
            电话号码
            </label>
            <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="例如：0123456789"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            required
            />
        </div>

        <div className='w-full mb-4'>
            <label htmlFor="email" className="block text-sm font-bold text-green-600 mb-1">
            电子邮箱
            </label>
            <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="请输入你的邮箱地址"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            required
            />
        </div>

        <div className='w-full mb-4'>
        <label htmlFor="remarks" className="block text-sm font-bold text-green-600 mb-1">
                备注（选填）
            </label>
            <textarea
                id="remarks"
                name="remarks"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="如果你选择毕业照，请填写学校地址。若有特殊需求也可以说明。"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows={3}
            />
            </div>
    </div>

        <div className='flex flex-col w-4/5 mx-auto'>
            <p className='text-green-600 font-semibold pb-4'>选择项目</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5'>
                {services.map((srv,index)=>(
       
                    <div
                    key={index}
                    onClick={() => setService(srv.service)}
                    className={`flex flex-row justify-between border-2 border-gray-300 items-center bg-white rounded p-6 cursor-pointer hover:scale-105 transition-transform duration-300 ${
                      service === srv.title ? 'ring-2 ring-green-300' : ''
                    }`}
                  >

                        <div className='flex flex-col'>
                        <p className='text-sm'>{srv.title}</p>
                        <p className='text-sm'>{srv.price}</p>
                        </div>
        

                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        service === srv.title ? 'border-green-500' : 'border-gray-300'
                        }`}>
                        {service === srv.title && (
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        )}
                        </div>


                    </div>
                   
                ))}
            </div>

        </div>


        <div className='flex flex-col justify-center w-4/5 mx-auto py-4'>
            <p className='text-green-600 pt-6 font-semibold'>选择日期</p>
            <div className='pt-2 pb-6'>
                <BookingDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                </div>

            <p className='text-green-600 font-semibold py-4'>选择时间</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:w-1/2 md:gap-5'>
                {slots.map((slot)=>{
          
                  const isBooked = bookedSlots.includes(slot)
                 
                  return(
                    <button 
                    key={slot} 
                    onClick={() => !isBooked && setSelectedSlot(slot)}
                    disabled={isBooked}
                    className={`p-4 rounded bg-green-0  transition-transform duration-300 border-2 border-gray-300
                        ${
                            selectedSlot === slot ? 'bg-green-300' : ''
                            }
                      ${
                                isBooked
                                  ? 'bg-gray-300 cursor-not-allowed'
                                  : 'bg-green-200 hover:bg-green-300 cursor-pointer hover:scale-105'
                              }

                    `}>
                        <p className='text-center'>{slot}</p>
                    </button>
) } )}
            </div>

        </div>


        <div className='py-4 w-4/5 mx-auto mb-8 mt-4'>
        <p className="text-md text-gray-600 mb-4">
            提交预约后，摄影师会在 1-2 个工作日内联络你，确认资料、日期和拍摄内容～请耐心等我们联系噢 😊
            </p>
            <button onClick={handleSubmit} className={`border-2 cursor-pointer hover:bg-green-500 hover:text-white transition-colors duration-300 bg-green-300 border-green-500 p-4 px-8 rounded-full ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}>
                马上预约
                </button>
        </div>
      
    </div>

    </div>
  )
}

export default Booking