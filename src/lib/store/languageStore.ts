// store/languageStore.ts
import { create } from "zustand";

type Language = "en" | "zh" | "ms";

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "en",
  setLanguage: (lang) => set({ language: lang }),
}));
