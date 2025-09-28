import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationAZ from './locales/az/translation.json';
import translationRU from './locales/ru/translation.json';

const resources = {
  en: { translation: translationEN },
  az: { translation: translationAZ },
  ru: { translation: translationRU }
};

// Əgər localStorage-də dil yoxdursa, 'az' yaz
if (!localStorage.getItem('i18nextLng')) {
  localStorage.setItem('i18nextLng', 'az');
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'az',
    detection: {
      order: ['localStorage'], // yalnız localStorage-a bax
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
