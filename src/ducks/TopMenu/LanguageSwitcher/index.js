import React from "react";
import { LanguageConsumer } from "../../../common/LanguageContenxt";

const LanguageSwitcher = () => (
  <LanguageConsumer>{lang => <div>{lang}</div>}</LanguageConsumer>
);

export default LanguageSwitcher;