// components/AppProvider.tsx
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useClientStore } from "@/lib/store/clientStore";
import { loadTranslations } from "@/lib/api/language";
import { loadClientContent } from "@/lib/api/userContent";
import { loadServices } from "@/lib/api/userContent";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { language, setClientData, setServices } = useClientStore();
  const { i18n } = useTranslation();
 

  useEffect(() => {
    async function fetchData() {
      const translations = await loadTranslations(2, language);
      if (Object.keys(translations).length > 0) {
        i18n.addResourceBundle(language, "translation", translations, true, true);
        i18n.changeLanguage(language);
      }

      const clientData = await loadClientContent(2);
      setClientData(clientData);
      console.log("Client Data:", clientData);

      const servicesData = await loadServices(2, language);
      setServices(servicesData);
      console.log("Services Data:", servicesData);
    }
    fetchData();
  }, [language, i18n,setClientData,setServices]);

  return <>{children}</>;
}
