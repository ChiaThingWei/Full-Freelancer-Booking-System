import { ArrowDown } from 'lucide-react';
import { useEffect } from 'react';
import { moveUpGsap } from '../../../utils/AnimateGsap';
import { useTranslation } from 'react-i18next';


const Introduction = () => {

  const { t } = useTranslation()


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
              
                      <p className=' text-center md:text-start   text-black opacity-70 md:opacity-80 font-semibold'>
                        <span className='text-2xl md:text-3xl font-semibold'>{t("hero_title")}</span>
                        <span className='font-semibold text-lg  md:text-2xl'>
                        <br/>
                       
                          {/* {t("hero_title2")}<br/> */}
                        </span>
                        <span className='text-md text-start flex-wrap'>
                        <br/>
                       
                        {t("hero_description")}
                        </span>
                        </p>

                        <div className='w-full h-[50px] mt-10 flex flex-row justify-evenly md:justify-start md:gap-14 '>

                            <a 
                              href="#contact"
                              className="hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 p-6 rounded-lg bg-blue-500 pointer-events-auto opacity-90 cursor-pointer text-white"
                            >
                             {t("booking")}
                            </a>

                            <a 
                              href="#services"
                              className="hover:bg-gray-300 flex items-center justify-center transition-colors duration-300 p-6 rounded-lg bg-white pointer-events-auto opacity-90 cursor-pointer text-blue-500"
                            >
                             {t("view_services")}
                            </a>
                      </div>

              </div>

          </div>


              <div className='md:flex hidden absolute z-10 bottom-8 mx-auto items-center w-full  justify-center'>


              <div 
                  className="  bg-gray-800 rounded-full p-2 transform flex cursor-pointer animate-bounce">
                 
                    <a href="#about">
                    <ArrowDown className="w-6 h-6  text-white" />
                    </a>
                </div>
              </div>

       </div>

    </section>
  
  )
}

export default Introduction