import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { StyledGlobalStyle } from "./theme/globalStyle";
import { TopMenu } from "./ducks/TopMenu/index";
import Schedule from "./ducks/Schedule";
import About from "./ducks/About";

const LazyAbout = React.lazy(() => import("./ducks/About"));

const SuspendedAbout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyAbout />
    </Suspense>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <StyledGlobalStyle />
      <Router>
        <React.Fragment>
          <TopMenu />
          <Route path="/" exact component={Schedule} />
          <Route path="/about" exact component={SuspendedAbout} />
        </React.Fragment>
      </Router>
    </React.Fragment>
  );
};

export default App;
