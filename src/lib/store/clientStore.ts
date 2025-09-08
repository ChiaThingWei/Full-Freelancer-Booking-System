// store/languageStore.ts
import { create } from "zustand";
import type { Service } from "../api/userContent";

type Language = "en" | "zh" | "ms";

interface ClientAssets {
  hero_bgImg: string;
  profileImg?: string;
  service_bgImg: string;
}

export interface ClientData {
  id: number
  name: string
  hero_img_url: ClientAssets; 
  domain?: string
}

interface ClientStore {
  clientData: ClientData | null;
  language: Language;
  setClientData: (data: ClientData) => void;
  setLanguage: (lang: Language) => void;
  services?: Service[];
  setServices: (data: Service[]) => void
}

export const useClientStore  = create<ClientStore>((set) => ({
  clientData: null,
  setClientData: (data) => set({ clientData: data }),
  language: "en",
  setLanguage: (lang) => set({ language: lang }),
  services: [], 
  setServices: (data) => set({ services: data }),
}));
