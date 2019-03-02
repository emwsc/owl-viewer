import React from "react";

export const DEFAULT_LANGUAGE = window.navigator.language
  ? window.navigator.language
  : "en";

const LanguageContext = React.createContext(DEFAULT_LANGUAGE);
export const LanguageProvider = LanguageContext.Provider;
export const LanguageConsumer = LanguageContext.Consumer;
