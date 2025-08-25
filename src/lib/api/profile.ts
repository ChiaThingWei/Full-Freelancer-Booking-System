// lib/user.ts
import { supabase } from "@/lib/supabaseClient";
import type { User } from "@supabase/supabase-js";

type Profile= {
    id: string;
    name: string;
    email: string;
    business_name?: string;
}

type UserProfileResult = {
  user: User | null
  profile: Profile | null 
  error: string ;
}

export const getCurrentUserProfile = async (): Promise<UserProfileResult> => {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) return { user: null, profile: null, error: userError?.message || "No user found" };

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("auth_id", user.id)
    .single();

  if (profileError) return { user, profile: null, error: profileError.message };

  return { user, profile, error: 'undefined' };
};




export const updateProfile = async (updates: {
    name?: string;
    business_name?: string;
  }): Promise<{ profile?: Profile; error?: string }> => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) return { error: userError?.message || "No user found" };
  
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .update(updates)
      .eq("auth_id", user.id)
      .select("*")
      .single();
  
    if (profileError) return { error: profileError.message };
    return { profile };
  }

  
  
  export const updatePassword = async (newPassword?: string): Promise<{ success: boolean; error?: string }> => {
    const {  error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) return { success: false, error: error.message };
   
    

    return { success: true };
  };

  export const verifyOldPassword = async (email: string, oldPassword: string) => {
    const {  error } = await supabase.auth.signInWithPassword({
      email,
      password: oldPassword,
    });
  
    
    if (error) return { success: false, error: error.message };
    return { success: true };
  };

  export const getCurrentClientId = async () => {
    // 必须 await
    const { data, error } = await supabase.auth.getUser(); 
  
    if (error || !data.user) return null
    const userId = data.user.id
  
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('client_id')
      .eq('auth_id', userId)
      .single();
  
    if (profileError) throw new Error(profileError.message);
    return profile?.client_id ?? null;
  };
  