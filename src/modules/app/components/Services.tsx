
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useClientStore } from "@/lib/store/clientStore";
import type { Service } from "@/lib/api/userContent";


const Services = () => {

  const { t } = useTranslation()
  const {services,clientData, language} = useClientStore()
  const [selectedService, setSelectedService] = useState<Service | null>(null)


  return (
<section id="services" className="relative w-screen  bg-gray-50">

  <div className="relative w-full min-h-screen overflow-hidden flex justify-center items-center lg:items-center">
    <img
      src={clientData?.hero_img_url.service_bgImg}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-blue-500 opacity-40"></div>


    <div className="relative z-10 flex flex-col items-center w-full md:w-5/6 mt-10 px-4 lg:px-0">
      <h1 className={` ${language === 'en'? 'text-3xl':'text-2xl'} cormorant-garamond  lg:text-4xl font-semibold text-white text-center`}>
        {t("myServices_title")}
      </h1>
      <p className="my-10 text-gray-100 text-center lg:text-lg px-4 lg:px-0">
        {t("myServices_description")}
      </p>

     

      <div className="flex lg:grid overflow-x-auto scrollbar-hide lg:overflow-visible lg:grid-cols-4 gap-6 mb-10 w-full">

        {(services || []).map((ser, index) => (
          <div
            key={index}
            onClick={() => setSelectedService(ser)}
            className="w-[250px] lg:w-auto flex-shrink-0 lg:min-w-0 group relative overflow-hidden p-6 bg-white border-2 border-gray-200 
                 transition-all duration-300 rounded-lg
                 lg:hover:-translate-y-2 hover:shadow-lg cursor-pointer"
          >
            <p className="text-xl font-semibold text-center">{ser.title}</p>
            <p className="text-center my-2 text-gray-500">{ser.description}</p>
            <p className="text-center pt-2 text-blue-500 font-semibold">{ser.price}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Modal */}
  {selectedService && (
    <div 
    onClick={() => setSelectedService(null)}
    className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white lg:flex lg:justify-evenly h-auto gap-5 px-10 pt-10 pb-6 rounded-lg shadow-lg max-w-4/5 md:max-w-3/5 mx-auto">


        <div>
          <img
          src={selectedService.image_url}
          alt="Service"
          className="w-50 h-60 lg:w-80 lg:h-100 object-cover mx-auto mb-4"
          />
        </div>

        <div className="md:flex md:flex-col md:justify-between">
          <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">{selectedService.title}</h2>
        <p className="mb-4 text-gray-500 text-center">{selectedService.description}</p>

        <ul className="mt-6 text-start md:ml-4">
          {selectedService.details.map((item: string, idx: number) => (
            <li key={idx} className="text-md mb-1">• {item}</li>
          ))}
        </ul>
        </div>

        <div className="flex justify-evenly mt-10 w-full">
          <button
            onClick={() => setSelectedService(null)}
            className="px-4 py-2 bg-gray-300 text-white rounded cursor-pointer hover:text-black transition-colors duration-300"
          >
            {t("serviceCardClose")}
          </button>
          <a
            href="#contact"
            onClick={() => setSelectedService(null)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:text-black transition-colors duration-300 flex items-center justify-center"
          >
            {t("serviceCardBooking")}
          </a>
          </div>
        </div>
      </div>
    </div>
  )}
</section>
  )
}

export default Services