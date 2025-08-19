import { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import toast from "react-hot-toast";
import { useUpdatePassword, useUpdateProfile, useUserProfile } from "@/lib/hooks/useProfileQuery";

// type Profile= {
//     id: string;
//     name: string;
//     email: string;
// }

const Setting = () => {

    const { data, isLoading, error } = useUserProfile();
    const updateProfile = useUpdateProfile();
    const updatePassword = useUpdatePassword();
    const navigate = useNavigate();
    // const [newPassword, setNewPassword] = useState("");
    const [name, setName] = useState("")

    const [formData, setFormData] = useState({
        name: "",
        businessName: "",
        email: ""

      });

      useEffect(() => {
        if (data?.profile) {
          setFormData({
            name: data.profile.name || "",
            businessName: data.profile.business_name || "",
            email: data.profile.email || ""
          });
        }
      }, [data]);

      const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.error("Logout error:", error.message);
          return;
        }
        // 登出后跳转到 login 页面
        navigate("/admin/login");
        toast.success("Logout successful! See you again soon");
      };

      const handleUpdateAll = async () => {
        await updateProfile.mutateAsync({ name });
        await updatePassword.mutateAsync(password);
      };

      if (isLoading) return <p>Loading...</p>;
        if (error) return <p>Error: {String(error)}</p>;


  return (
    <div className="w-full lg:flex justify-between">
    
    
    <form className="bg-white p-6  mb-6 lg:w-3/5 lg:mb-0 rounded-lg shadow-sm">
    <h1 className="font-semibold text-xl mb-6">Account Setting</h1>
    <div className="flex flex-col">
        <label className="py-2">Name</label>
        <input
        type="text"
        placeholder={data?.profile?.name || ""}
        value={formData.name}
        onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })}
         className='border-2 rounded p-2 bg-white'
        />
    </div>
      
    <div className="flex flex-col">
        <label className="py-2">Business Name</label>
        <input
        type="text"
        placeholder={data?.profile?.business_name || ""}
        value={formData.businessName}
        onChange={(e) =>
            setFormData({ ...formData, businessName: e.target.value })}
         className='border-2 rounded p-2 bg-white'
        />
    </div>

    <div className="flex flex-col ">
        <label className="py-2">Email</label>
        <input
        type="text"
        placeholder={data?.user?.email || ""}
        disabled
        value={formData.email}
        // onChange={(e) =>
        //     setFormData({ ...formData, email: e.target.value })}
         className='border-2 rounded p-2 bg-white disabled:bg-gray-200'
        />
    </div>

            <div className="w-full flex justify-center">
            <button 
            onClick={handleLogout}
            className="bg-blue-500 mt-6 shadow-sm text-white hover:bg-blue-600 transition-colors cursor-pointer duration-300 py-3 px-10 rounded-lg ">
                Update Profile</button> 
                </div>

        </form>

        <div className="lg:w-1/4 mx-auto ">

            <div className="bg-white p-6 flex flex-col shadow-sm rounded-lg">

            <button
            className="py-3 bg-white mb-6 border-2 rounded-xl  cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >Update Email</button>

            <button
            className="py-3 bg-white mb-6 border-2 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >Update Password</button>

            <button 
            onClick={handleLogout}
            className="bg-red-500 shadow-sm text-white hover:bg-red-600 transition-colors cursor-pointer duration-300 py-3 rounded-lg ">
                Log out</button> 
                </div>
        </div>

       
    </div>
  )
}


export default Setting