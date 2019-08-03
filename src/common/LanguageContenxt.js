import React from "react";

export const DEFAULT_LANGUAGE = window.localStorage.getItem("owlv-lang")
  ? window.localStorage.getItem("owlv-lang")
  : "en";

const LanguageContext = React.createContext(DEFAULT_LANGUAGE);
export const LanguageProvider = LanguageContext.Provider;
export const LanguageConsumer = LanguageContext.Consumer;
export { LanguageContext };
