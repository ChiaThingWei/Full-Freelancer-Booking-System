// store/languageStore.ts
import { create } from "zustand";
import type { ClientWork, Service } from "../api/userContent";
import { persist } from "zustand/middleware";

type Language = "en" | "zh" | "ms";

interface ClientAssets {
  hero_bgImg: string;
  profile_img?: string;
  service_bgImg: string;
}

export interface ClientData {
  id: number
  name: string
  hero_img_url: ClientAssets; 
  domain?: string
  hero_text_color?: string
  email?: string
  phone?: string
  location?: string
  facebook?: string
  instagram?: string
  whatsapp?: string
}

interface ClientStore {
  clientData: ClientData | null;
  language: Language;
  setClientData: (data: ClientData) => void;
  setLanguage: (lang: Language) => void;
  services?: Service[];
  setServices: (data: Service[]) => void
  portfolioData?: ClientWork[]
  setPortfolioData: (data: ClientWork[]) => void
}

export const useClientStore  = create<ClientStore>()(
  persist(
    (set) => ({
  clientData: null,
  setClientData: (data) => set({ clientData: data }),
  language: "en",
  setLanguage: (lang) => set({ language: lang }),
  services: [], 
  setServices: (data) => set({ services: data }),
  portfolioData: [],
  setPortfolioData: (data) => set({ portfolioData: data }),
}),{ name: "client-storage" } // 会存到 localStorage
  ) 
);
