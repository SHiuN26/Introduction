import React, { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const TranslateContext = createContext("zh_TW");

export const TranslateProvider = ({ children }) => {
  const [lang, setLang] = useState("zh_TW");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    console.log("lang", lang);
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <TranslateContext.Provider value={{ lang, setLang, translate: t }}>
      {children}
    </TranslateContext.Provider>
  );
};
