import { ArrowDown } from 'lucide-react';
import { useEffect } from 'react';
import { moveUpGsap } from '../../../utils/AnimateGsap';

const Introduction = () => {

 useEffect(() => {

  moveUpGsap('.yo')

  }, []); 

  return (
    <section id='' className='scroll-mt-5'>
       <div className='relative w-screen h-screen overflow-hidden'>

          <img
          src='/images/sybackground.webp'
          alt='bg image'
          className='w-full object-cover h-full opacity-60'
          />

        
          <div  className='absolute flex my-auto flex-col z-10 inset-0  w-full justify-center gap-2 mx-auto md:flex-row md:items-center '>
              <div id="yo" className='yo opacity-100 mx-auto md:w-2/5 '>
                <img
                src='/images/seiyu.webp'
                alt="seiyu"
                className='hover:scale-105 trnasition-transform duration-300 mx-auto my-auto object-cover shrink-0 w-[200px] h-[200px] rounded-full md:w-[300px] md:h-[300px] '
                loading="lazy"
                />
              </div>
              
              
              <div className=' mt-5 md:mt-0 w-4/5 mx-auto md:w-2/5'>
              
                      <p className='font-mono text-center md:text-start   text-black opacity-70 md:opacity-80 font-semibold'>
                        <span className='text-2xl md:text-3xl font-semibold'>你好 ! 我是摄影师<br/> CHIA SEI YU</span>
                        <span className='font-semibold text-xl md:text-2xl'>
                        <br/>
                        {/* I CAN CATCH BEST MOMENTS OF LIFE <br/> */}
                        我不是按下快门，而是按下记忆的暂停键<br/>
                        </span>
                        <span className='text-sm text-start flex-wrap'>
                        <br/>
                        {/* Whether it’s a quiet portrait, a lively event, or a detailed product shoot,
                        I aim to tell stories through my lens. With a background in both natural light and studio setups, I bring creativity, precision, and a chill vibe to every shoot. */}
                        我喜欢捕捉自然的表情、真实的氛围，不做作、不刻意。照片可以是热闹的现场，也可以是一束光、一双眼神。用镜头讲故事，用画面留住那些让人心动的瞬间，就是我的拍摄哲学。
                        </span>
                        </p>

                        <div className='w-full h-[50px] mt-10 flex flex-row justify-evenly md:justify-start md:gap-14 '>

                            <a 
                              href="#contact"
                              className="hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 p-6 rounded-lg bg-blue-500 pointer-events-auto opacity-90 cursor-pointer text-white"
                            >
                              View Services
                            </a>

                            <a 
                              href="#services"
                              className="hover:bg-gray-300 flex items-center justify-center transition-colors duration-300 p-6 rounded-lg bg-white pointer-events-auto opacity-90 cursor-pointer text-blue-500"
                            >
                              View Services
                            </a>
                      </div>

              </div>

          </div>


              <div className='md:flex hidden absolute z-10 bottom-8 mx-auto items-center w-full  justify-center'>


              <div 
                  className="  bg-gray-800 rounded-full p-2 transform flex cursor-pointer animate-bounce">
                 
                    <a href="#portfolio">
                    <ArrowDown className="w-6 h-6  text-white" />
                    </a>
                </div>
              </div>

       </div>

    </section>
  //   <section id='about' className='scroll-mt-5'>
  //   <div className='relative w-screen h-screen overflow-hidden'>
  
  //    {/* <Navbar/> */}
     

  //      <img
  //      src='/images/sybackground.webp'
  //      alt='bg image'
  //      className='w-full object-cover h-full opacity-60'
  //      />


  //      <div  className='absolute z-10 inset-0 w-full md:justify-center gap-2 mx-auto mb-5 mt-20 md:mt-10 md:flex md:items-center '>
  //        <div id="yo" className='yo  mt-4 opacity-100 md:w-2/5 '>
  //          <img
  //          src='/images/seiyu.webp'
  //          alt="seiyu"
  //          className='hover:scale-105 mx-auto transition-transform duration-300 object-cover shrink-0 w-[180px] h-[180px] rounded-full md:w-[250px] md:h-[250px] '
  //          loading="lazy"
  //          />
  //        </div>

  //        <div className=' mt-5 md:mt-0 w-4/5 mx-auto md:w-2/5'>
  //        <p className='font-mono text-center md:text-start   text-black opacity-70 md:opacity-80 font-semibold'>
  //          <span className='text-2xl md:text-4xl font-semibold'>你好 ! 我是摄影师<br/> CHIA SEI YU</span>
  //          <span className='font-semibold text-xl md:text-3xl'>
  //          <br/>
  //          {/* I CAN CATCH BEST MOMENTS OF LIFE <br/> */}
  //          我不是按下快门，而是按下记忆的暂停键<br/>
  //          </span>
  //          <span className='text-sm text-start flex-wrap'>
  //          <br/>
  //          {/* Whether it’s a quiet portrait, a lively event, or a detailed product shoot,
  //          I aim to tell stories through my lens. With a background in both natural light and studio setups, I bring creativity, precision, and a chill vibe to every shoot. */}
  //          我喜欢捕捉自然的表情、真实的氛围，不做作、不刻意。照片可以是热闹的现场，也可以是一束光、一双眼神。用镜头讲故事，用画面留住那些让人心动的瞬间，就是我的拍摄哲学。
  //          </span>
  //          </p>

           

          //  <div className='w-full h-[50px] mt-5 flex flex-row justify-evenly '>
          //         <button 
          //         type='button'
          //         className=' px-6 text-center bg-blue-500 pointer-events-auto opacity-60 cursor-pointer rounded text-white'>
          //           Get In Touch</button>

          //           <button 
          //         type='button'
          //         className=' px-6 text-center bg-white pointer-events-auto opacity-60 cursor-pointer rounded text-blue-500'>
          //           View Services</button>
          //     </div>

           


        //     <div className='absolute z-10 bottom-8 mx-auto items-center w-full flex justify-center'>


        //       <div 
        //           className="  bg-gray-800 rounded-full p-2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        //         >
        //           <a href="#portfolio">
        //           <ArrowDown className="w-6 h-6  text-white" />
        //           </a>
        //         </div>
        //     </div>

        //  </div>
  //      </div>
       
  // </div>
  // </section>
  )
}

export default Introduction