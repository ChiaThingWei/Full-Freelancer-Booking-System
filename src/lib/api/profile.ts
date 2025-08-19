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
    .eq("id", user.id)
    .single();

  if (profileError) return { user, profile: null, error: profileError.message };

  return { user, profile, error: 'undefined' };
};




export const updateProfile = async (updates: {
    name?: string;
    business_name?: string;
  }): Promise<{ profile?: Profile; error?: string }> => {
    // 先拿当前用户 ID
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) return { error: userError?.message || "No user found" };
  
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .update(updates)
      .eq("id", user.id)
      .select("*")
      .single();
  
    if (profileError) return { error: profileError.message };
    return { profile };
  };
  
  /**
   * 更新登录密码
   */
  export const updatePassword = async (newPassword: string): Promise<{ success: boolean; error?: string }> => {
    const { data, error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) return { success: false, error: error.message };
    console.log(data)
    return { success: true };
  };