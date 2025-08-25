import { useEffect } from "react"
import LoginBackground from "../components/LoginBackground"
import LoginForm from "../components/LoginForm"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/lib/hooks/useAuth"
import { getCurrentClientId } from "@/lib/api/profile"
import { useBookingStore } from "@/lib/store/bookingFilterStore"


const AdminLogin = () => {

  const session = useAuth();
  const navigate = useNavigate();
  const {setCurrentClientId} = useBookingStore()
 
  


  useEffect(() => {
    if (session === undefined) return; // ⏳ 等 session

    if (session) {
      const fetchClientId = async () => {
        const clientId = await getCurrentClientId();
        if (clientId) setCurrentClientId(clientId);
        navigate("/admin");
      };
      fetchClientId()
    }
  }, [session, navigate, setCurrentClientId]);

  return (
    <div className="relative  w-full h-screen pt-30">

    <LoginBackground />
      
    <LoginForm />
        {/* Form */}
      
        
  </div>
  )
}

export default AdminLogin