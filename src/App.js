import React, { useState } from "react";
import { Route } from "react-router-dom";

import { StyledGlobalStyle } from "./theme/globalStyle";
import { TopMenu } from "./ducks/TopMenu/index";
import Schedule from "./ducks/Schedule";

import { StyledPopupWrapper } from "./theme/globalStyle";
import { SearchVODPopup } from "./ducks/SearchVODPopup";
import { AppContextProvider } from "./AppContext";

const App = () => {
  const [searchWindowVisibile, setSearchWindowVisible] = useState(false);
  const [searchWindowText, setSearchWindowText] = useState("");
  const [selectedVideos, setSelectedVideos] = useState(null);

  const handleUpdateSearchWindow = params => {
    setSearchWindowVisible(params.isVisible);
    setSearchWindowText(params.text);
    setSelectedVideos(params.selectedVideos);
  };

  /*
  {render={() => (
          <Schedule
            firebase={firebase}
            handleUpdateSearchWindow={handleUpdateSearchWindow}
          />
        )} }
      { <Route
        path="/teams"
        render={() => (
          <ScheduleByTeam
            firebase={firebase}
            handleUpdateSearchWindow={handleUpdateSearchWindow}
          />
        )}
      /> }

*/

  const contextValue = {
    handleUpdateSearchWindow: handleUpdateSearchWindow
  };

  return (
    <AppContextProvider value={contextValue}>
      <StyledGlobalStyle />
      <TopMenu />
      <Route path="/" exact component={Schedule} />
      {searchWindowVisibile && (
        <StyledPopupWrapper id="popup">
          <SearchVODPopup
            text={searchWindowText}
            selectedVideos={selectedVideos}
          />
        </StyledPopupWrapper>
      )}
    </AppContextProvider>
  );
};

export default App;
