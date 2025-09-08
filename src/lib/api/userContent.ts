import type { ClientData } from "../store/clientStore";
import { supabase } from "../supabaseClient";

export async function loadClientContent(client_id: number) {
    
    const { data, error } = await supabase
    .from("clients")
    .select("id,name,hero_img_url,domain")
    .eq("id", client_id)
    .single();

    if (error) throw error

    return data as ClientData || {};

}

export interface Service {
    id: number
    client_id: number
    language: "en" | "zh" 
    title: string
    description: string
    details: string[]   // jsonb 存的是 array
    price: string
    duration: number
  }

  export async function loadServices(client_id: number, language: "en" | "zh" | "ms"): Promise<Service[]> {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .eq("client_id", client_id)
      .eq("language", language)
  
    if (error) {
      console.error("Error loading services:", error.message)
      throw error
    }
  
    return data as Service[]
  }