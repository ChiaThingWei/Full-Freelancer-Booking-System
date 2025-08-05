import { services } from "../utils/Utils"
import { customers } from "../utils/Utils"
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section id='services' className=' scroll-mt-10'>
<div  className='w-11/12 mx-auto mb-4 '>
  <p className='text-sky-600 text-center font-mono text-3xl'>
  摄影项目
    </p>
    <p className='text-black text-center text-lg my-4'>
    风景、情绪、人与人之间的温度，我都愿意为你拍下
    </p>

  {/* <div className='grid grid-cols-2 mt-8 gap-4 md:grid-cols-4 '> */}
  <div  className='flex scrollbar-hide p-4 overflow-x-auto gap-4 '>
  {services.map((ser,index)=>(

    // <div key={index} className='mx-auto bg-white shadow-lg border-2 hover:scale-105 transition-transform duration-300 rounded-lg'>
    <div
    key={index}
    className='flex-shrink-0 w-[75%] min-w-[250px] max-w-[300px] mx-auto bg-white shadow-lg border-2 border-gray-200 hover:scale-105 transition-transform duration-300 rounded-lg'
  >
      <div className=' my-4 mx-auto flex flex-col justify-between  '>
        <img
        src={ser.img}
        className='w-[200px] md:w-[250px]  md:h-[300px] h-[200px] rounded-xl object-cover mx-auto p-2'
        loading="lazy"
        />

         <div className="flex flex-col flex-1 gap-5 justify-between">
          <div className='flex-1'>
            <p className="text-black text-center text-xl font-semibold font-mono">{ser.title}</p>
            <p className="text-black text-center text-sm px-2 mt-1">{ser.desc}</p>
            <ul className='mt-6 text-center'>
              {ser.details.map((item, index) => (
                <li key={index} className='text-black text-sm mb-1 font-mono'>• {item}</li>
              ))}
            </ul>
          </div>

          <p className="text-center text-black font-bold ">{ser.price}</p>
      
        
        </div>
      </div>
     
      </div>
  ))}
  </div>

</div>


<div className='mt-16 flex flex-col'>
    <p className='text-sky-600 text-center font-mono  text-3xl'>
         顾客反馈
    </p>

    <p className='text-black text-center text-lg my-4'>
         每一张照片背后，都是一段故事。这些顾客的回馈，是我们继续前进的最大动力。
    </p>

<div className="my-10">
<Marquee
  gradient={false} // 关闭渐变阴影
  speed={60}
  pauseOnHover={true}
>
  {customers.map((customer, index) => (
    <div
      key={index}
      className="flex-shrink-0 bg-gray-800 border-2 border-gray-300 opacity-80 text-white h-[260px] shadow-xl p-6 rounded-xl mx-4 w-[200px] md:w-[400px]"
    >
      <h3 className="text-start font-semibold mt-2">{customer.name}</h3>
      <div className="flex w-full justify-start mt-1">
        {[...Array(customer.rating)].map((_, i) => (
          <img
            key={i}
            src={customer.image}
            alt="star"
            className="w-4 h-4 mx-0.5 object-cover"
          />
        ))}
      </div>
      <p className="text-sm text-start mt-10 mb-5">{customer.feedback}</p>
      <p className="font-semibold">{customer.date}</p>
    </div>
  ))}
</Marquee>
 </div>

    <Link 
      to="/booking"
      className="mx-auto mt-4 px-16 py-2 text-gray-500 hover:text-white hover:bg-green-500 border-2 hover:border-green-500 border-gray-300 text-xl transition-colors duration-300 cursor-pointer opacity-80 rounded-full bg-white"
    >
      马上预约
    </Link>

 </div>

 

</section>
  )
}

export default Services