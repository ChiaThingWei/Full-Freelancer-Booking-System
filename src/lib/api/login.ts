import { supabase } from "../supabaseClient";

export type Profile = {
  id: string;
  role: "client" | "admin" | "provider";
  provider_type: string | null;
  name: string;
  email: string;
};

export const getProfile = async (userId: string): Promise<Profile> => {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, role, provider_type, name, email")
    .eq("id", userId)
    .single();

    console.log('hi' )

  if (error) throw error;
  return data as Profile;
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