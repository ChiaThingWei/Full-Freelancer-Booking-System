
import AboutMe from "../components/AboutMe"
import Contacts from "../components/Contacts"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import MyWork from "../components/MyWork"
import Navbar from "../components/Navbar"
import Services from "../components/Services"
import { AppProvider } from "../components/AppProvider"


const Home = () => {
  return (
    <AppProvider>
    <div className='flex flex-col w-screen scroll-smooth justify-center  relative bg-gray-100'>
    <Navbar/>
    <HeroSection/>
    <AboutMe/>
    <MyWork/>
    <Services/>
    <Contacts/>
    <Footer/>
  </div>
  </AppProvider>
  )
}

export default Home