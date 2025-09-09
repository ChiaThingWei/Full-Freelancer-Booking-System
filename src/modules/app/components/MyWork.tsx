import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  import Autoplay from "embla-carousel-autoplay"
    import { useTranslation } from "react-i18next"
    import { useClientStore } from "@/lib/store/clientStore"

  
const MyWork = () => {

 const { t } = useTranslation()
 const {portfolioData, language} = useClientStore()

  return (
    <section id='portfolio' className=' '>
      <div className=' w-screen h-screen bg-gray-100 flex items-center overflow-hidden'>

      <div className='flex flex-col mx-auto md:w-4/5 justify-center items-center'>
      <h1 className={` ${language === 'en'? 'text-3xl':'text-2xl'} cormorant-garamond text-2xl lg:text-4xl mx-auto font-semibold`}>{t("myWork_title")}</h1>

        <p className="text-center mt-4 mb-10 px-6 text-gray-500">
        {t("myWork_description")}
        </p>
      <div className="relative w-2/3 md:w-full ">
            <Carousel
             plugins={[
              Autoplay({
                delay: 3000, // 每 3 秒滚动一次
              }),
            ]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {portfolioData?.map((item, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                   
                        <div className="relative group overflow-hidden">
                          <img
                            src={item.image_url}
                            alt={item.title}
                            className="w-full h-100 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-lg font-semibold text-foreground mb-1">
                                {item.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                    
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="cursor-pointer" />
              <CarouselNext className="cursor-pointer" />
            </Carousel>
          </div>


      </div>

        </div>
        </section>

  )
}

export default MyWork