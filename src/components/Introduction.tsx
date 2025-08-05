import { ArrowDown } from 'lucide-react';
import { useEffect } from 'react';
import { moveUpGsap } from '../utils/AnimateGsap';

const Introduction = () => {

 useEffect(() => {

  moveUpGsap('.yo')

  }, []); 

  return (
    <section id='about' className='scroll-mt-5'>
    <div className='relative w-screen h-[100vh] overflow-hidden'>
  
     {/* <Navbar/> */}
     

       <img
       src='/images/sybackground.webp'
       alt='bg image'
       className='w-full object-cover h-full opacity-60'
       />


       <div  className='absolute z-10 inset-0 w-full md:justify-center gap-2 mx-auto mb-5 mt-20 md:mt-10 md:flex md:items-center '>
         <div id="yo" className='yo  mt-4 opacity-100 md:w-2/5 '>
           <img
           src='/images/seiyu.webp'
           alt="seiyu"
           className='hover:scale-105 mx-auto transition-transform duration-300 object-cover shrink-0 w-[220px] h-[220px] rounded-full md:w-[250px] md:h-[250px] '
           loading="lazy"
           />
         </div>

         <div className='mt-10 md:mt-0 md:w-2/5'>
         <p className='font-mono text-center md:text-start  text-black opacity-70 md:opacity-80 font-semibold'>
           <span className='text-3xl md:text-4xl font-semibold'>你好 ! 我是摄影师 CHIA SEI YU</span>
           <span className='font-semibold text-xl md:text-3xl'>
           <br/>
           {/* I CAN CATCH BEST MOMENTS OF LIFE <br/> */}
           我不是按下快门，而是按下记忆的暂停键<br/>
           </span>
           <span className='text-sm text-start p-6'>
           <br/>
           {/* Whether it’s a quiet portrait, a lively event, or a detailed product shoot,
           I aim to tell stories through my lens. With a background in both natural light and studio setups, I bring creativity, precision, and a chill vibe to every shoot. */}
           我喜欢捕捉自然的表情、真实的氛围，不做作、不刻意。照片可以是热闹的现场，也可以是一束光、一双眼神。用镜头讲故事，用画面留住那些让人心动的瞬间，就是我的拍摄哲学。
           </span>
           </p>


        <div className='absolute z-10 inset-0 w-full flex justify-center'>
           <div 
               className="absolute bottom-8 bg-gray-800  rounded-full p-2  mx-auto transform -translate-x-1/2 cursor-pointer animate-bounce"
             
             >
               <a href="#portfolio">
               <ArrowDown className="w-6 h-6 text-white" />
               </a>
             </div>
             </div>

         </div>
       </div>
       
  </div>
  </section>
  )
}

export default Introduction