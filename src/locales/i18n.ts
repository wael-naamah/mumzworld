import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translations/en.json';
import arTranslation from './translations/ar.json';
import { I18nManager } from 'react-native';

const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export const switchLanguage = (lang: string) => {
  i18n.changeLanguage(lang);
  I18nManager.forceRTL(lang === 'ar');
  I18nManager.allowRTL(lang === 'ar');
};

export default i18n;
