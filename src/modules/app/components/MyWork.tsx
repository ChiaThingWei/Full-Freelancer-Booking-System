import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  import Autoplay from "embla-carousel-autoplay"

    import portfolio1 from '/images/js-graduate.webp'
    import portfolio2 from '/images/szeying2.webp'
    import portfolio3 from '/images/pro1.webp'
    import portfolio4 from '/images/fam.webp'
    import portfolio5 from '/images/outdoor.webp'
    import { useTranslation } from "react-i18next"

  const portfolioItems = [
    {
      image: portfolio1,
      title: "Graduation Photoshoot",
      description: "Capture your academic achievements with style"
    },
    {
      image: portfolio2,
      title: "OOTD Photoshoot",
      description: "Showcase your fashion sense and personality"
    },
    {
      image: portfolio3,
      title: "Professional Headshots",
      description: "Clean and polished portraits for your career"
    },
    {
      image: portfolio4,
      title: "Family Portraits",
      description: "Cherish moments with your loved ones"
    },
    {
      image: portfolio5,
      title: "Outdoor Lifestyle Shoot",
      description: "Natural and candid moments in beautiful settings"
    }
  ];

const MyWork = () => {

 const { t } = useTranslation()

  return (
    <section id='portfolio' className=' '>
      <div className=' w-screen h-screen bg-gray-100 flex items-center overflow-hidden'>

      <div className='flex flex-col mx-auto md:w-4/5 justify-center items-center'>
      <h1 className=' text-2xl lg:text-4xl mx-auto font-semibold'>{t("myWork_title")}</h1>

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
                {portfolioItems.map((item, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                   
                        <div className="relative group overflow-hidden">
                          <img
                            src={item.image}
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