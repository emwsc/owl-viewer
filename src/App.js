import React from "react";
import { Route } from "react-router-dom";

import { StyledGlobalStyle } from "./theme/globalStyle";
import { TopMenu } from "./ducks/TopMenu/index";
import Schedule from "./ducks/Schedule";

const App = () => {
  return (
    <React.Fragment>
      <StyledGlobalStyle />
      <TopMenu />
      <Route path="/" exact component={Schedule} />
    </React.Fragment>
  );
};

export default App;
