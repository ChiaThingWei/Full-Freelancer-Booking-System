import {  useRef,useEffect } from 'react';

const Navbar = () => {

    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      let lastScrollY = window.scrollY;
      const handleScroll = () => {
        const navbar = navbarRef.current;
    
       
        if (!navbar) return;
    
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          navbar.style.transform = "translateY(-100%)";
        } else {
          navbar.style.transform = "translateY(0)";
        }
    
        lastScrollY = window.scrollY;
      };
    
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div ref={navbarRef} className="transition-transform duration-300 fixed  z-20 w-full bg-white opacity-70 top-0 pt-4 pb-2 shadow-md">
                  <div className="w-full flex flex-row justify-evenly pb-4">
                    {/* <a href="#about" className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">About Me</a>
                    <a href="#portfolio"  className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">Portfolio</a>
                    <a href="#services" className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">Services</a>
                    <a href="#contact" className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">Contacts</a> */}
                      <a href="#about" className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">
                      关于我</a>
                    <a href="#portfolio"  className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">
                    我的作品</a>
                    <a href="#services" className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">
                    摄影项目</a>
                    <a href="#contact" className="text-gray-700 hover:text-black hover:scale-105 cursor-pointer transition-transform duration-300">
                    联系我</a>
                    </div>
              </div>
  )
}

export default Navbar