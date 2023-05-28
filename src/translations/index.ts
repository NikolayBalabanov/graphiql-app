export const translations = {
  header: {
    en: () => import('./header/en.json'),
    ru: () => import('./header/ru.json'),
  },
  signIn: {
    en: () => import('./signIn/en.json'),
    ru: () => import('./signIn/ru.json'),
  },
  footer: {
    en: () => import('./footer/en.json'),
    ru: () => import('./footer/ru.json'),
  },
  about: {
    en: () => import('./about/en.json'),
    ru: () => import('./about/ru.json'),
  },
};
export const DEFAULT_LANGUAGE = 'en';
