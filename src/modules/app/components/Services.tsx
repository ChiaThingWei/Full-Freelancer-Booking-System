
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useClientStore } from "@/lib/store/clientStore";
import type { Service } from "@/lib/api/userContent";

const Services = () => {

  const { t } = useTranslation()
  const {services,clientData} = useClientStore()
  const [selectedService, setSelectedService] = useState<Service | null>(null)


  return (
//     <section id='services' className=''>
     

//   <div className='relative w-screen  bg-gray-50 flex items-center overflow-hidden'>
 

//   <img
//     src={clientData?.hero_img_url.service_bgImg}
//     alt="Background"
//     className="w-full h-full object-cover"
//   />

// <div className="absolute inset-0 bg-blue-500 opacity-40"></div>

//   <div className='absolute inset-0 flex flex-col mt-10 lg:mt-0 mx-auto md:w-5/6 justify-center items-center'>
//             <h1 className=' text-2xl lg:text-4xl mx-auto font-semibold text-white'>{t("myServices_title")}</h1>

//             <p className='my-10 px-10 lg:text-lg text-gray-100 text-center'>{t("myServices_description")}</p>


//         <div className="grid mb-10 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 md:px-4">

      
//           {(services || []).map((ser, index) => (
//   <div
//     key={index}
//     onClick={() => setSelectedService(ser)}
//     className="group relative overflow-hidden p-8 bg-white border-2 border-gray-200 
//                transition-all duration-300 rounded-lg
//                hover:-translate-y-2 hover:shadow-lg cursor-pointer"
//   >
//     <p className="text-xl font-semibold text-center">{ser.title}</p>
//     <p className="text-center my-2 text-gray-500">{ser.description}</p>
//     <p className="text-center pt-2 text-blue-500 font-semibold">{ser.price}</p>
//   </div>
// ))}

// {selectedService && (
//   <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//     <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-11/12 mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">{selectedService.title}</h2>
//       <p className="mb-4 text-gray-500">{selectedService.description}</p>

//       <ul className="mt-4">
//         {selectedService.details.map((item:string, idx:number) => (
//           <li key={idx} className="text-sm mb-1">• {item}</li>
//         ))}
//       </ul>

//       <div className="w-full flex flex-row justify-evenly mt-4">
//         <button
//           onClick={() => setSelectedService(null)}
//           className="mt-4 px-4 py-2 bg-gray-300 text-white rounded cursor-pointer hover:text-black transition-colors duration-300"
//         >
//           {t("serviceCardClose")}
//         </button>

//         <a 
//           href="#contact"
//           className="mt-4 px-4 py-2 flex items-center justify-center rounded bg-blue-500 hover:text-black transition-colors duration-300 text-white"
//         >
//            {t("serviceCardBooking")}
//         </a>
//       </div>
//     </div>
//   </div>
// )}

    
//         </div>

//         </div>

//     </div>
 

// </section>
<section id="services" className="relative w-screen bg-gray-50">

  <div className="relative w-full min-h-[60vh] lg:min-h-screen overflow-hidden flex justify-center items-start lg:items-center">
    <img
      src={clientData?.hero_img_url.service_bgImg}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-blue-500 opacity-40"></div>


    <div className="relative z-10 flex flex-col items-center w-full md:w-5/6 mt-10 lg:mt-0 px-4 lg:px-0">
      <h1 className="text-2xl lg:text-4xl font-semibold text-white text-center">
        {t("myServices_title")}
      </h1>
      <p className="my-10 text-gray-100 text-center lg:text-lg px-4 lg:px-0">
        {t("myServices_description")}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 w-full">
        {(services || []).map((ser, index) => (
          <div
            key={index}
            onClick={() => setSelectedService(ser)}
            className="group relative overflow-hidden p-6 bg-white border-2 border-gray-200 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
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
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-auto">
        <h2 className="text-2xl font-semibold mb-4">{selectedService.title}</h2>
        <p className="mb-4 text-gray-500">{selectedService.description}</p>

        <ul className="mt-4">
          {selectedService.details.map((item: string, idx: number) => (
            <li key={idx} className="text-sm mb-1">• {item}</li>
          ))}
        </ul>

        <div className="flex justify-evenly mt-4 w-full">
          <button
            onClick={() => setSelectedService(null)}
            className="px-4 py-2 bg-gray-300 text-white rounded cursor-pointer hover:text-black transition-colors duration-300"
          >
            {t("serviceCardClose")}
          </button>
          <a
            href="#contact"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:text-black transition-colors duration-300 flex items-center justify-center"
          >
            {t("serviceCardBooking")}
          </a>
        </div>
      </div>
    </div>
  )}
</section>
  )
}

export default Services