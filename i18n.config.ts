import ru from "./locales/ru.json";
import uz from "./locales/uz.json";

export default defineI18nConfig(() => ({
  legacy: false,
  lazy:true,
  langDir: "./locales",
  locale: "uz",
  // strategy: 'prefix_except_default',
  defaultLocale: "uz",
  messages: { ru, uz },
  locales: [
    {
      code: "ru",
      iso: "ru-Ru",
    },
    {
      code: "uz",
      iso: "uz-Uz",
    },
  ],
  vueI18n: {
    fallbackLocale: "uz",
  }
}));