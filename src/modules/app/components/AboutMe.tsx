import { useTranslation } from "react-i18next"
import photographer from "@/animation/photographer.json"
import Lottie from "lottie-react"

const AboutMe = () => {

      const { t } = useTranslation()

  return (
    <section id='about' className=' '>
      <div className='relative w-screen h-screen flex items-center overflow-hidden'>
        
        <div className="absolute hidden md:block left-10 bottom-0 w-80 h-80 z-0 pointer-events-none">
                <Lottie
                animationData={photographer}
                loop={true}
                autoplay={true}
                />
            </div>

         <div className=' flex flex-col mx-auto z-10 md:w-3/5 justify-center items-center'>
            <h1 className=' text-2xl lg:text-4xl mx-auto font-semibold'>{t("aboutMe_title")}</h1>

            <p className='my-10 px-10 text-center'>{t("aboutMe_description")}</p>


            



            <div className='grid md:grid-cols-3 gap-6'>


                <div className='bg-white rounded-md border-2 px-12 py-6  text-center'>
                    <p className='text-blue-500 font-bold text-xl'>{t("aboutMe_cardNumber1")}</p>
                    <p>{t("aboutMe_cardTitle1")}</p>
                </div>

                <div className='bg-white rounded-md border-2 px-12 py-6  text-center'>
                    <p className='text-blue-500 font-bold text-xl'>{t("aboutMe_cardNumber2")}</p>
                    <p>{t("aboutMe_cardTitle2")}</p>
                </div>

                <div className='bg-white rounded-md border-2 px-12 py-6  text-center'>
                    <p className='text-blue-500 font-bold text-xl'>{t("aboutMe_cardNumber3")}</p>
                    <p>{t("aboutMe_cardTitle3")}</p>
                </div>

            </div>
            
            </div>     

        </div>
       
            <div className="h-[1px] hidden md:flex bg-gray-300 w-4/5 mx-auto"/>
    </section>
  )
}

export default AboutMe