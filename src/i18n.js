// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/Language/en.json";
import zh_TW from "@/Language/zh_TW.json";

// 语言资源
const resources = {
  en: {
    translation: en,
  },
  zh_TW: {
    translation: zh_TW,
  },
};

// 从localStorage获取用户的语言选择
const savedLanguage = localStorage.getItem("language") || "zh_TW";

i18n
  .use(initReactI18next) // 传递 i18n 实例给 react-i18next
  .init({
    resources,
    // lng: "zh_TW", // 默认语言
    lng: savedLanguage, // 使用从localStorage中获取的语言
    interpolation: {
      escapeValue: false, // react 已经对 xss 进行保护
    },
  });

export default i18n;
