import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationsEN from './translationsEN';
import translationsHU from './translationsHU';

i18n.use(initReactI18next).init({
  // we init with resources
  resources: {
    en: {
      translations: translationsEN
    },
    hu: {
      translations: translationsHU
    }
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
