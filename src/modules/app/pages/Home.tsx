import Contacts from "../components/Contacts"
import Introduction from "../components/Introduction"
import Navbar from "../components/Navbar"
import Portfolio from "../components/Portfolio"
import Services from "../components/Services"

const Home = () => {
  return (
    <div className='flex flex-col w-screen scroll-smooth justify-center  relative bg-gray-100'>
    <Navbar/>
    <Introduction/>
    <Portfolio/>
    <Services/>
    <Contacts/>
  </div>
  )
}

export default Home