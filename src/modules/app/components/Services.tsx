import { services } from "../../../utils/Utils"
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Services = () => {

  const { t } = useTranslation()
  const [selectedService, setSelectedService] = useState<null | typeof services[0]>(null)

  return (
    <section id='services' className=''>
     

  <div className=' w-screen md:h-screen bg-gray-50 flex items-center overflow-hidden'>

  <div className='flex flex-col mt-10 lg:mt-0 mx-auto md:w-5/6 justify-center items-center'>
            <h1 className=' text-2xl lg:text-4xl mx-auto font-semibold'>{t("myServices_title")}</h1>

            <p className='my-10 px-10 text-gray-500 text-center'>{t("myServices_description")}</p>


        <div className="grid mb-10 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 md:px-4">

        {services.map((ser,index)=>(

              <div
              key={index}
              onClick={() => setSelectedService(ser)} 
              className="group relative overflow-hidden p-6 bg-white border-2 border-gray-200 
              transition-all duration-300 rounded-lg
              hover:-translate-y-2 hover:shadow-lg cursor-pointer">

                  <p className="text-xl font-semibold text-center">{ser.title}</p>
                  <p className="text-center my-2 text-gray-500">{ser.desc}</p>

                    <p className="text-center pt-2 text-blue-500 font-semibold">{ser.price}</p>
              
              </div>

        ))}

        {selectedService  && (
          <div>

          <div
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-11/12 mx-auto">
                <h2 className="text-2xl font-semibold mb-4">{selectedService.title}</h2>
                <p className="mb-4 text-gray-500">{selectedService.desc}</p>

                <ul className='mt-4 '>
                    {selectedService.details.map((item, index) => (
                      <li key={index} className='text-sm mb-1'>• {item}</li>
                    ))}
                    </ul>

                    <div className="w-full flex flex-row justify-evenly mt-4">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="mt-4 px-4 py-2 bg-gray-300 transition-colors duration-300 cursor-pointer text-white rounded hover:text-black items-center justify-center"
                    >
                      Close
                    </button>

                    <a 
                      href="#contact"
                      className="mt-4 px-4 py-2 flex items-center justify-center rounded bg-blue-500 hover:text-black transition-colors duration-300 cursor-pointer text-white"
                    >
                      Booking
                    </a>
                  </div>

                
              </div>
            </div>
          </div>)}
    
        </div>

        </div>

    </div>
 

</section>
  )
}

export default Services