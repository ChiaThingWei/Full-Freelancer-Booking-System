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

