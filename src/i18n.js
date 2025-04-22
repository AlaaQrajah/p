import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // استخدام i18next-http-backend لتحميل ملفات الترجمة
  .use(Backend)
  // اكتشاف لغة المتصفح
  .use(LanguageDetector)
  // تمرير i18n إلى react-i18next
  .use(initReactI18next)
  // تهيئة i18next
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // لا حاجة للهروب من HTML في React
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;