import { useTranslation } from "react-i18next"
import photographer from "@/animation/photographer.json"
import Lottie from "lottie-react"
import { useClientStore } from "@/lib/store/clientStore"
import { motion} from "framer-motion"
import { useInView } from "react-intersection-observer";

const AboutMe = () => {

      const { t } = useTranslation()
      const {language} = useClientStore()

      const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 1,   
      });

  return (
    <section id='about' className=' '>
      <div className='relative w-screen min-h-screen flex items-center overflow-hidden'>
        
        <div className="absolute hidden md:block left-10 bottom-0 w-80 h-80 z-0 pointer-events-none">
                <Lottie
                animationData={photographer}
                loop={true}
                autoplay={true}
                />
            </div>

         <div className=' flex flex-col mx-auto z-10 md:w-3/5 justify-center items-center'>
            <h1 className={` ${language === 'en'? 'text-3xl':'text-2xl'} cormorant-garamond  lg:text-4xl mx-auto font-semibold mt-10 lg:mt-0`}>{t("aboutMe_title")}</h1>

            <p className='my-10 px-10 text-center'>{t("aboutMe_description")}</p>


            



            <div className='grid md:grid-cols-3 gap-6'>

            <motion.div
                ref={ref}
                initial={{ y: -200, opacity: 0 }}     // 初始在上方 & 隐藏
                animate={inView ? { y: 0, opacity: 1 } : {}} // 进入视口时掉下来
                transition={{ duration: 2, ease: "easeOut" }}
                className="bg-blue-500 rounded-md border-2 px-12 py-6  text-center"
            >
                  <p className='text-white font-bold text-xl'>{t("aboutMe_cardNumber1")}</p>
                  <p className="text-white">{t("aboutMe_cardTitle1")}</p>

            </motion.div>

            <motion.div
                ref={ref}
                initial={{ y: -200, opacity: 0 }}     // 初始在上方 & 隐藏
                animate={inView ? { y: 0, opacity: 1 } : {}} // 进入视口时掉下来
                transition={{ duration: 2, ease: "easeOut", delay:0.5}}
                className="bg-white rounded-md border-2 px-12 py-6  text-center"
            >
                    <p className='text-blue-500 font-bold text-xl'>{t("aboutMe_cardNumber2")}</p>
                    <p className="text-black">{t("aboutMe_cardTitle2")}</p>

            </motion.div>

            <motion.div
                ref={ref}
                initial={{ y: -200, opacity: 0 }}     // 初始在上方 & 隐藏
                animate={inView ? { y: 0, opacity: 1 } : {}} // 进入视口时掉下来
                transition={{ duration: 2, ease: "easeOut",delay:1 }}
                className="bg-blue-500 rounded-md border-2 px-12 py-6  text-center"
            >
                     <p className='text-white font-bold text-xl'>{t("aboutMe_cardNumber3")}</p>
                     <p className="text-white">{t("aboutMe_cardTitle3")}</p>
            </motion.div>

                {/* <div className='bg-white rounded-md border-2 px-12 py-6  text-center'>
              
                    <p className='text-blue-500 font-bold text-xl'>{t("aboutMe_cardNumber1")}</p>
                    <p>{t("aboutMe_cardTitle1")}</p>
                </div> */}

                {/* <div className='bg-white rounded-md border-2 px-12 py-6  text-center'>
                    <p className='text-blue-500 font-bold text-xl'>{t("aboutMe_cardNumber2")}</p>
                    <p>{t("aboutMe_cardTitle2")}</p>
                </div>

                <div className='bg-white rounded-md border-2 px-12 py-6  text-center'>
                    <p className='text-blue-500 font-bold text-xl'>{t("aboutMe_cardNumber3")}</p>
                    <p>{t("aboutMe_cardTitle3")}</p>
                </div> */}

            </div>
            
            </div>     

        </div>
       
            <div className="h-[2px]  md:flex bg-gray-400 w-4/5 mt-10 mx-auto"/>
    </section>
  )
}

export default AboutMe