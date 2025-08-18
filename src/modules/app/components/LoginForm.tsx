import React from 'react'
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useNavigate } from "react-router-dom";
import { getProfile } from "@/lib/api/login";
import toast from "react-hot-toast";

const LoginForm = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(error)
        console.log(email,password)
        try {
          const { data: authData, error: loginError } = await supabase.auth.signInWithPassword({
            email,
            password,
          });
            
          if (loginError) throw loginError;
          if (!authData.user) throw new Error("User not found");
      
          const profile = await getProfile(authData.user.id);
        
          if (profile.role === "client") navigate("/client/home");
          else if (profile.role === "admin"){ navigate("/admin")
            toast.success("Login successful ! Welcome back")
          }
          else if (profile.role === "provider") navigate("/provider/dashboard");
        } catch (err: unknown) {
          if (err instanceof Error) setError(err.message);
          else setError("Unexpected error");
        }
      };
      

  return (
    <form onSubmit={handleLogin} className="absolute inset-0 bg-white h-[450px] p-6 w-4/5 sm:w-3/5 lg:w-2/5 my-auto mx-auto rounded-lg shadow-sm">
    <div className="w-full flex justify-between">
        
        <div className="pt-2">
        <p className="font-semibold">Login to your account</p>
        <p className="text-sm text-gray-500">Enter your email below to login to your account</p>
        </div>

        <img
        src="/images/authentication.webp"
        className="h-30 "
        />
        
    </div>
    <div className="">
        <label className="">Email</label>
        <input 
            type="email" 
            name='email'
            autoComplete='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="m@example.com" 
            className="w-full p-3 border-2 border-gray-300 rounded mb-4 mt-2"
        />
        <div className="flex justify-between">
            <p>Password</p>
            <button
            className="cursor-pointer transition-colors duration-300 hover:text-blue-500"
            >Forgot your password?</button>
        </div>
        <input 
            type="password" 
            name="user-password"
            autoComplete="new-password"
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded mt-2"
        />

    </div>
    <div>
        <button
        type="submit"
        disabled={!email || !password}
        className="bg-blue-500 w-full mt-6 p-3 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors duration-300"
        >Login</button>
    </div>

</form>
  )
}

export default LoginForm