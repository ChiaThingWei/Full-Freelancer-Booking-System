import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiXiaohongshu } from "react-icons/si";

const Contacts = () => {
  return (
    <section id='contact' className='min-h-screen mt-32 md:scroll-mt-20 scroll-mt-10'>

                <div 
                style={{}}
                className='w-5/6 md:w-3/5 md:flex mx-auto shadow-xl border border-black bg-gray-500 my-auto  rounded-lg'>

                
                <div className='p-6 w-full md:w-1/2 flex-col flex items-center justify-center'>
                  <p className='text-white text-3xl font-bold text-center '>联系我</p>
                  <p className='text-white mt-4 text-center'>如果你喜欢我的拍摄风格，也正在寻找一位摄影师，欢迎和我聊聊，说不定我们可以一起完成一场很美的拍摄😆</p>
                </div>
                
                <div className='flex md:w-1/2 flex-col w-full gap-3 md:items-start my-7 '>
                  <a href='mailto:sychia306@gmail.com' className='text-black w-2/3 bg-green-400 cursor-pointer hover:scale-105 transition-transform duration-300 hover:text-black rounded-full px-4 py-2 mx-auto border-1 flex flex-row'>
                    <MdOutlineEmail className='my-auto size-5'/>
                    <p className='ml-3 '>sychia306@gmail.com</p>
                  </a>


                  <a href='tel: +60166981240' className='text-black  bg-yellow-100 cursor-pointer hover:scale-105 transition-transform duration-300 hover:text-black w-2/3 rounded-full px-4 py-2 mx-auto border-1 flex flex-row'>
                <MdOutlinePhone className='my-auto size-5'/>
                <p className='ml-3 '>016-698 1240</p>
               </a>

              
              <a href='https://wa.me/60166981240'  target="_blank" className='text-black bg-green-400 cursor-pointer hover:scale-105 transition-transform duration-300 hover:text-black rounded-full px-4 py-2 w-2/3 mx-auto border-1 flex flex-row'>
                <FaWhatsapp className='my-auto size-5'/>
                <p className='ml-3 '>Whatsapp Me</p>
              </a>

              <a href='https://www.instagram.com/y_memoriesworld/'  target="_blank" className='text-black bg-red-300 cursor-pointer hover:scale-105 transition-transform duration-300 hover:text-black rounded-full px-4 py-2 mx-auto w-2/3  border-1 flex flex-row'>
                <FaInstagram className='my-auto size-5'/>
                <p className='ml-3'>y_memoriesworld</p>
              </a>

              <a href='https://www.facebook.com/seiyu.chia'  target="_blank" className='text-black bg-blue-300 w-2/3 cursor-pointer hover:scale-105 transition-transform duration-300 hover:text-black rounded-full px-4 py-2 mx-auto border-1 flex flex-row'>
                <FaFacebook  className='my-auto size-5'/>
                <p className='ml-3'>Sei Yu Chia</p>
              </a>

              <a href=''  target="_blank" className='text-black bg-red-400 w-2/3 cursor-pointer hover:scale-105 transition-transform duration-300 hover:text-black rounded-full px-4 py-2 mx-auto border-1 flex flex-row'>
                <SiXiaohongshu  className='my-auto size-5'/>
                <p className='ml-3'>Sei Yu Chia</p>
              </a>

               </div>

             

                </div>

                <div className='mt-10 md:mt-20'>
                <p className='text-center text-black font-mono'>Sei Yu Photograph Studio</p>
                <div  className='h-[2px] bg-gray-800 '/>
                </div>
               
                </section>
  )
}

export default Contacts