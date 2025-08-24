import { useEffect } from "react"
import LoginBackground from "../components/LoginBackground"
import LoginForm from "../components/LoginForm"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/lib/hooks/useAuth"


const AdminLogin = () => {

  const session = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    if (session === undefined) return; // ⏳ 等 session
    if (session) {
      navigate("/admin");
    }
  }, [session, navigate]);

  return (
    <div className="relative  w-full h-screen pt-30">

    <LoginBackground />
      
    <LoginForm />
        {/* Form */}
      
        
  </div>
  )
}

export default AdminLogin