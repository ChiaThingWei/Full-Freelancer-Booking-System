import { useRef, useEffect } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { gsapGroup1, gsapGroup2 } from '../../../utils/AnimateGsap';

const Portfolio = () => {

  const grp1Ref = useRef<HTMLDivElement>(null);
  const grp2Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {

    gsapGroup1(grp1Ref,'.text')
    gsapGroup2(grp2Ref,'.sying','.shop','.moutain')

  }, []); 

  return (
    <section id='portfolio' className=' '>
    <div id='group1'  className='group1 my-10 md:flex items-center justify-center overflow-hidden mx-auto '>

      <div id="pic" className='pic will-change-transform mx-auto  flex md:my-auto flex-row justify-center md:w-2/5'>
        <div className=''>
            <img
            src='/images/kampung.webp'
            alt='kampung'
            className=' object-cover w-[180px] h-[400px] md:w-[250px] md:h-[540px]'
            loading='lazy'
            />
        </div>

        <div className='ml-2 flex flex-col gap-2'>
          <img
            src='/images/js-graduate.webp'
            alt='js'
            className=' object-cover w-[180px] h-[196px] md:w-[250px] md:h-[266px]'
             loading='lazy'
            />
            <img
            src='/images/lrt.webp'
            alt='lrt'
            className=' object-cover w-[180px] h-[196px]  md:w-[250px] md:h-[266px]'
             loading='lazy'
            />

        </div>
      </div>


      {/* <div className='mt-6 py-auto md:w-2/5 mx-auto justify-center my-auto '>

        <p className='p-6 md:p-0  md:pt-32 font-bold font-mono text-3xl md:text-4xl  text-black text-center md:text-start'>
        My Photography Approach                 
        </p>
        <p className='p-6 md:p-0 md:pt-6 text-black font-mono text-center md:text-start'>
        I believe that the best photographs come from real, unfiltered moments. My style is a blend of natural light, candid emotions, and thoughtful composition — 
        <span className='text-green-500 text-lg font-semibold'> aiming to capture not just how things look, but how they feel. </span>
         Whether it's a quiet glance, a shared laugh, or a fleeting moment of stillness, I strive to tell honest stories through my lens with warmth and intention.
        </p>

      </div> */}
       <div ref={grp1Ref} id='text' className='text mt-6 py-auto md:w-2/5 mx-auto justify-center my-auto '>

        <p className='p-6 md:p-0  md:pt-32 font-bold font-mono text-3xl md:text-4xl  text-black text-center md:text-start'>
        我的摄影美学
        
        </p>
        <p className='p-6 md:p-0 md:pt-6 text-black font-mono text-center md:text-start'>
        我始终相信，真正动人的画面，源自那些未经雕饰的瞬间。用自然的光影作笔、以情感为墨，
        <span className='text-green-500 text-lg font-semibold'> 我试图捕捉的不仅是形象，更是情绪与温度。</span>
        轻轻的一瞥、悄然的一笑，或是流转之间的沉静时光，皆是我镜头下的诗篇。
        摄影于我，不只是记录，而是用光与影，书写生活的低语与温柔。
        </p>
      

        </div>

    </div>
    


    <div className='left-0 my-10 md:mt-0 md:mb-10 w-3/5 h-[100px] bg-green-500'></div>

    <div ref={grp2Ref} id=".group2" className='group2 w-10/12 md:h-[600px] md:flex flex-col items-center justify-center overflow-hidden mx-auto mb-10'>

       <div className='w-full md:flex flex-row md:h-1/2 mb-4 overflow-hidden'>

        {/* <div className='flex flex-col md:w-1/2 '>
          <p className='md:p-4 font-bold font-mono text-3xl md:text-4xl  text-black text-center md:text-start'>
          Every Frame Has a Story               
            </p>
            <p className=' text-black p-4 font-mono text-center md:text-start'>
            Some memories aren’t loud.  
          They linger in quiet smiles, the way light falls through a window, or the way two hands find each other in a crowd.  
            </p>
        </div> */}

      <div className='flex flex-col md:w-1/2 '>
          <p className='md:p-4 font-bold font-mono text-3xl md:text-4xl  text-black text-center md:text-start'>
          我从2020年开始拿起相机            
            </p>
            <p className=' text-black p-4 font-mono text-center md:text-start'>
            起初只是想为生活留下些片段，没想到从此一头栽进了光影的世界。那些看似平凡的日常，在镜头下仿佛有了新的呼吸。
            我喜欢拍风景，也热爱捕捉人间烟火气——天光云影、街头巷尾、熟悉的笑脸和陌生的背影。摄影于我，是一次次注视生活的练习，是在快门间感受世界的方式。
            我不追求刻意的摆拍，更偏爱自然流露的情感与氛围。愿我的照片里，有风、有光、有故事，也有你共鸣的片刻温柔。
            </p>
        </div>
        

            <img
            src='/images/scene1.webp'
            alt='moutain'
            className='moutain md:w-1/2 w-full h-[250px] md:h-full object-cover md:ml-4 '
           
            />

       </div>

       <div className='md:h-1/2 w-full md:flex flex-row overflow-hidden'>
       <img
            src='/images/building1.webp'
            alt='building'
            className='shop md:w-1/2 w-full h-[250px] md:h-full object-cover '
         
            />
              <img
            src='/images/szeying2.webp'
            alt='sy'
            className='sying w-1/4 object-cover md:ml-2 hidden md:block'
         
            />

       </div>
    </div>

     
     

      <div className='ml-auto w-3/5 h-[100px] bg-blue-300 mb-10'></div>

      <div className='md:flex flex-row w-full justify-between my-10'>

        <div className='md:w-1/4'>
          {/* <p className='text-black font-serif  text-2xl p-6 md:mt-20 lg:ml-40'>Love isn’t just seen</p> */}

          <p className='text-black font-serif  text-2xl p-6 md:mt-20 lg:ml-40'>为你记录<br/>
            <span className='font-semibold text-3xl'>专属的光景</span></p>              
            
              </div>

        <div className='md:w-1/3 mx-auto' style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed url="https://www.instagram.com/p/DJrsxiJyEUY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
      </div>

        <div className='md:w-1/3'>
              {/* <p className='text-black font-serif ml-6 md:ml-0 md:mt-60 text-2xl mr-20'>it’s felt, captured in the quiet glances and fleeting touches."</p> */}
              <p className='text-black font-serif  ml-6 md:ml-0 md:mt-60 text-xl mr-20'>
              我喜欢用镜头记录属于每个人的独特时刻，无论是海边的风、街角的光，还是生活里不经意的温柔。
              也常在社交媒体上分享这些片段，希望和你一起，把美好留住。
              </p>
            </div>
      </div>

      </section>
  )
}

export default Portfolio