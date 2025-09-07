import { SiInstagram } from "react-icons/si";
import { SiXiaohongshu } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const Footer = () => {


  return (
    <>
      <div className="h-[1px] bg-gray-300 w-4/5 mt-10 mx-auto rounded"/>
      
    <div className="w-full flex bg-gray-100  items-center justify-center">
        
    <div className="sm:flex w-4/5 mt-10 justify-center ">
                        <div className="flex flex-col gap-5 sm:w-1/2">
                              <div className="flex flex-row gap-5">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                <Mail className="text-blue-500"/>
                                </div>
                                <p className="font-semibold">Email <br/>
                                  <span className="font-normal">demo@gmail.com</span>
                                </p>
                              </div>

                              <div className="flex flex-row gap-5">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                <Phone className="text-blue-500"/>
                                </div>
                                <p className="font-semibold">Phone <br/>
                                  <span className="font-normal">013-456 7890</span>
                                </p>
                              </div>

                              <div className="flex flex-row gap-5">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                <MapPin className="text-blue-500"/>
                                </div>
                                <p className="font-semibold">Location <br/>
                                  <span className="font-normal">Cheras, Kuala Lumpur</span>
                                </p>
                              </div>


                        </div>


                        <div className="flex flex-col sm:w-1/2 mt-10 sm:mt-0">
                          <p className="font-semibold">Follow Me</p>

                          <div className="flex flex-row gap-2 mt-2">

                          <a href=''  
                              target="_blank" className='text-black bg-white  cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300  rounded-lg p-3  border-1 '>
                            <SiInstagram   className='my-auto size-5'/>
                           </a>

                           <a href=''  
                              target="_blank" className='text-black bg-white  cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded-lg p-3  border-1 '>
                             <SiXiaohongshu  className='my-auto size-5'/>
                            
                          </a>

                          <a href=''  
                              target="_blank" className='text-black bg-white cursor-pointer hover:bg-blue-500 hover:text-white transition-colors  duration-300 rounded-lg p-3 border-1'>
                              <FaWhatsapp className='my-auto size-5'/>
                         
                          </a>

                          </div>

                          {/* <Select
                            value={formData.service}
                            onValueChange={(val) => setFormData((prev) => ({ ...prev, service: val }))}
                          >
                            <SelectTrigger className="w-full py-6 font-bold mb-2">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((srv, index) => (
                                <SelectItem key={index} value={srv.service}>
                                  {srv.title} — {srv.price}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select> */}
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