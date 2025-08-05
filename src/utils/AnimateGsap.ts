import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

export const moveUpGsap =(target:string , animationProps={},scrollProps={}) =>{

    gsap.fromTo(target, 
        {
          opacity: 0,
          scale: 1,
          y: 200
        }, 
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 3,
          ease: 'power4',
          ...animationProps,
          scrollTrigger: {
            trigger: target,
            start: 'top 80%',
            ...scrollProps,
          }
        });
}

export const gsapGroup1 =(
    ref: React.RefObject<HTMLElement| null>, target:string ,  animationProps={},scrollProps={}) =>{

        if (!ref.current) return;

    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: ref.current
            ,
            start: "top 30%",
            once: true,
          
            ...scrollProps,
        }
    })

    tl.fromTo(target,{
            opacity: 0,
            scale: 1,
            x: 200},
        {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 3,
            ease: 'power4',
            ...animationProps,  
        },
    0)
    }

    export const gsapGroup2 =(ref: React.RefObject<HTMLElement| null>, target:string , target2: string, target3: string, animationProps={},scrollProps={}) =>{

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: ref.current,
                start: "top 30%",
                once: true,
               
                ...scrollProps,
            }
        })
    
        tl.fromTo(target,{
                opacity: 0,
                scale: 1,
                y: 200},
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 3,
                ease: 'power4',
                ...animationProps,  
            },
        0)
    
            .fromTo(target2,{
                opacity: 0,
                scale: 1,
                x: -200},
            {
                opacity: 1,
                scale: 1,
                x: 0,
                duration: 3,
                ease: 'power4',
                ...animationProps,  
            },0)
    
            .fromTo(target3,{
                opacity: 0,
                scale: 1,
                x: 200},
            {
                opacity: 1,
                scale: 1,
                x: 0,
                duration: 3,
                ease: 'power4',
                ...animationProps,  
            },0)
    
    }