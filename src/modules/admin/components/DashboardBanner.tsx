import { useUserProfile } from '@/lib/hooks/useProfileQuery';
import React from 'react'

const Banner = () => {

  const { data } = useUserProfile();

  return (
    <div className=" relative flex shadow-sm w-full rounded-xl lg:h-[200px] mb-6 bg-white overflow-hidden">
  {/* 左边文字 */}
  <div className="flex-1 flex items-center px-6">
    <h1 className="hover:scale-120 transition-transform duration-300 z-10 font-semibold lg:pl-20 text-xl lg:text-3xl">
      Welcome,
      <span className="block font-normal lg:text-4xl text-blue-500 ml-10">{data?.profile?.name}</span>
    </h1>
  </div>

  {/* 右边图片 */}
  <div className="flex flex-row w-1/2 h-full  my-auto ">
    <img
      src="/images/team.webp"
      alt="banner"
      className="w-1/2 h-full object-cover my-auto "
      loading="lazy"
    />
     <img
      src="/images/photographer2.webp"
      alt="banner"
      className="w-1/2 h-full object-cover "
      loading="lazy"
    />
  </div>
</div>
  )
}

export default Banner