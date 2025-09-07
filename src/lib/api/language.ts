import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { supabase } from "../supabaseClient"

// 初始化空的 i18n
i18n.use(initReactI18next).init({
  resources: {},
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
})

export async function loadTranslations(client_id: number, lang: string) {
  const { data, error } = await supabase
    .from("client_contents")
    .select("content")
    .eq("client_id", client_id)
    .eq("lang", lang)
    .single()

  if (error) throw error

  return data?.content || {};

//   const translations = data?.content || {}

//   i18n.addResourceBundle(lang, "translation", translations, true, true)

//   i18n.changeLanguage(lang)
}
