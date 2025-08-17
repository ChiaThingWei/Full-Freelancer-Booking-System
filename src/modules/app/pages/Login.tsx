import LoginBackground from "../components/LoginBackground"

const AdminLogin = () => {
  return (
    <div className="relative  w-full h-screen pt-30">

 <LoginBackground />
      

        {/* Form */}
        <div className="absolute inset-0 bg-white h-[450px] p-6 w-4/5 sm:w-3/5 lg:w-2/5 my-auto mx-auto rounded-lg shadow-sm">
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
                    placeholder="Password" 
                    className="w-full p-3 border-2 border-gray-300 rounded mt-2"
                />

            </div>
            <div>
                <button
                className="bg-blue-500 w-full mt-6 p-3 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors duration-300"
                >Login</button>
            </div>

        </div>
        
  </div>
  )
}

export default AdminLogin