import AboutMe from "../components/AboutMe"
import Contacts from "../components/Contacts"
import Introduction from "../components/Introduction"
import MyWork from "../components/MyWork"
import Navbar from "../components/Navbar"
import Services from "../components/Services"

const Home = () => {
  return (
    <div className='flex flex-col w-screen scroll-smooth justify-center  relative bg-gray-100'>
    <Navbar/>
    <Introduction/>
    <AboutMe/>
    <MyWork/>
    <Services/>
    <Contacts/>
  </div>
  )
}

export default Home