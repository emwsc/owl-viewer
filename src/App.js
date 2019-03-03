import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StyledGlobalStyle } from "./theme/globalStyle";
import { TopMenu } from "./ducks/TopMenu/index";
import Match from "./ducks/Match";
import Main from "./ducks/Main";
import { LanguageProvider, DEFAULT_LANGUAGE } from "./common/LanguageContenxt";

const LazyAbout = React.lazy(() => import("./ducks/About"));
const LazySchedule = React.lazy(() => import("./ducks/Schedule"));

const SuspendedAbout = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyAbout />
  </Suspense>
);

const SuspendedSchedule = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazySchedule />
  </Suspense>
);

const App = () => {
  const [lang, changeLang] = useState(DEFAULT_LANGUAGE);

  const setLang = code => {
    changeLang(code);
    window.localStorage.setItem("owlv-lang", code);
  };

  return (
    <LanguageProvider value={{ lang, setLang }}>
      <StyledGlobalStyle />
      <Router>
        <React.Fragment>
          <TopMenu />
          <Route path="/" exact component={Main} />
          <Route path="/schedule" exact component={SuspendedSchedule} />
          <Route path="/matches/:matchId" exact component={Match} />
          <Route path="/about" exact component={SuspendedAbout} />
        </React.Fragment>
      </Router>
    </LanguageProvider>
  );
};

export default App;
