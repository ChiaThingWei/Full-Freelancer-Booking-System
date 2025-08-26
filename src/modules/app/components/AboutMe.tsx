
const AboutMe = () => {
  return (
    <section id='portfolio' className=' '>
      <div className=' w-screen h-screen flex items-center overflow-hidden'>
        
         <div className='flex flex-col mx-auto md:w-3/5 justify-center items-center'>
            <h1 className=' text-2xl lg:text-4xl mx-auto font-semibold'>About Me</h1>

            <p className='my-10 px-10 text-center'>I’m Chia Sei Yu, a photographer specialized in capturing authentic expressions, natural light, and genuine emotions. Whether it’s a portrait, an event, or a fleeting everyday detail, I aim to turn real moments into timeless stories — creating images that feel personal, natural, and unforgettable.</p>

            <div className='grid md:grid-cols-3 gap-6'>

{/* 这里可以做数量然后map 出来那个card */}
                <div className='bg-white rounded-md border-2 px-12 py-6  text-center'>
                    <p className='text-blue-500 font-bold text-xl'>50+</p>
                    <p>Shooting Completed</p>
                </div>

                <div className='bg-white rounded-md border-2 px-12 py-6  text-center'>
                    <p className='text-blue-500 font-bold text-xl'>50+</p>
                    <p>Shooting Completed</p>
                </div>

                <div className='bg-white rounded-md border-2 px-12 py-6  text-center'>
                    <p className='text-blue-500 font-bold text-xl'>50+</p>
                    <p>Shooting Completed</p>
                </div>

            </div>
            
            </div> 


           

        </div>
        {/* <div className="my-5">
            <Marquee
            gradient={false} // 关闭渐变阴影
            speed={60}
            >
            {demoGallery.map((pic, index) => (
                <div
                key={index}
                className="flex-shrink-0 opacity-80 h-[260px] md:h-[400px]  rounded-xl mx-4 w-[200px] md:w-[400px]"
                >
                <img
                    src={pic.images}
                    alt="gallery"
                    className="w-full h-full object-cover rounded"/>
                </div>
            ))}
            </Marquee>
            </div> */}
            <div className="h-[1px] hidden md:flex bg-gray-300 w-4/5 mx-auto"/>
    </section>
  )
}

export default AboutMe