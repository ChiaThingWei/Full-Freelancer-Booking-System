import { SiInstagram } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { useClientStore } from "@/lib/store/clientStore";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SiFacebook } from "react-icons/si";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



const Footer = () => {

  const {language, setLanguage, clientData} = useClientStore()
  const { t } = useTranslation()

  return (
    <>
      <div className="h-[1px] bg-gray-300 w-4/5 mt-10 mx-auto rounded"/>
      
    <div className="w-full flex bg-gray-100  items-center justify-center">
        
    <div className="md:grid-cols-3 md:grid w-4/5 mt-10 justify-center ">
                        <div className="flex flex-col gap-5">
                              <div className="flex flex-row gap-5">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                <Mail className="text-blue-500"/>
                                </div>
                                <p className="font-semibold">{t("email")} <br/>
                                  <span className="font-normal">{clientData?.email}</span>
                                </p>
                              </div>

                              <div className="flex flex-row gap-5">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                <Phone className="text-blue-500"/>
                                </div>
                                <p className="font-semibold">{t("phone")} <br/>
                                  <span className="font-normal">{clientData?.phone}</span>
                                </p>
                              </div>

                              <div className="flex flex-row gap-5">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                <MapPin className="text-blue-500"/>
                                </div>
                                <p className="font-semibold">{t("location")} <br/>
                                  <span className="font-normal">{clientData?.location}</span>
                                </p>
                              </div>


                        </div>


                        <div className="flex flex-col  mt-10 md:mt-0">
                          <p className="font-semibold">{t("follow")}</p>

                          <div className="flex flex-row gap-2 mt-2">

                          <a href={clientData?.instagram}  
                              target="_blank" className='text-black bg-white  cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300  rounded-lg p-3  border-1 '>
                            <SiInstagram   className='my-auto size-5'/>
                           </a>

                           <a href={clientData?.facebook} 
                              target="_blank" className='text-black bg-white  cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded-lg p-3  border-1 '>
                             <SiFacebook  className='my-auto size-5'/>
                            
                          </a>

                          <a href={clientData?.whatsapp}  
                              target="_blank" className='text-black bg-white cursor-pointer hover:bg-blue-500 hover:text-white transition-colors  duration-300 rounded-lg p-3 border-1'>
                              <FaWhatsapp className='my-auto size-5'/>
                         
                          </a>

                          </div>

                         
                        </div>

                        <div className="flex flex-col mt-10 md:mt-0">
                          <Select
                          value={language}
                          onValueChange={(val) => setLanguage(val as "en" | "zh")}
                        >
                          <SelectTrigger className="w-full bg-white py-6 font-bold mb-2 cursor-pointer">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent >
                              <SelectItem className="cursor-pointer" value="en"><Globe/>English</SelectItem>
                              <SelectItem className="cursor-pointer" value="zh"><Globe/>中文</SelectItem>
                             
                            </SelectContent>
                        </Select>                          
                        </div>

                  </div>
                  </div>

                  <div className="h-[1px] bg-gray-300 w-4/5 my-5 mx-auto rounded"/>

                   
                    <p className="text-gray-500 text-sm mb-5 text-center">© 2025 All rights reserved | Created by Chia Thing Wei</p>
                   
                  <div className="h-[1px] bg-gray-300 w-4/5 mb-5 mx-auto rounded"/>

                  
                  </>
  )
}

export default Footer