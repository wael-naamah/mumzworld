import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translations/en.json';
import arTranslation from './translations/ar.json';
import { I18nManager } from 'react-native';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';

const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};
export const DEFAULT_LANGUAGE = 'en';

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export const toggleLanguage = async () => {
  const currentLanguage = i18n.language;
  const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
  i18n.changeLanguage(newLanguage);
  I18nManager.forceRTL(newLanguage === 'ar');
  await AsyncStorage.setItem('lang', newLanguage);
  await Updates.reloadAsync();
};

export const getCurrentLanguage = async () => {
  const lang = await AsyncStorage.getItem('lang');
  return lang || DEFAULT_LANGUAGE;
};

export const setInitialLanguage = async () => {
  const lang = await getCurrentLanguage();
  i18n.changeLanguage(lang);
  I18nManager.forceRTL(lang === 'ar');
};

export default i18n;
