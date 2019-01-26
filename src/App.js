import React from "react";
// import { Route } from "react-router-dom";

import { StyledGlobalStyle } from "./theme/globalStyle";
import { TopMenu } from "./ducks/TopMenu/index";
import Schedule from "./ducks/Schedule";

const App = () => {
  return (
    <React.Fragment>
      <StyledGlobalStyle />
      <TopMenu />
      {/* <Route path="/" exact component={Schedule} />
      <Route path="/?match=:id" exact component={Schedule} /> */}
      <Schedule />
    </React.Fragment>
  );
};

export default App;
