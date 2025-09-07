// components/AppProvider.tsx
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/lib/store/languageStore";
import { loadTranslations } from "@/lib/api/language";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguageStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      const translations = await loadTranslations(2, language);
      if (Object.keys(translations).length > 0) {
        i18n.addResourceBundle(language, "translation", translations, true, true);
        i18n.changeLanguage(language);
      }
    }
    fetchData();
  }, [language, i18n]);

  return <>{children}</>;
}
