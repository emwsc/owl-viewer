import React, { useState } from "react";
import { Route } from "react-router-dom";
import firebase from "firebase";

import { firebaseConfig } from "./firebase/config";

import {
  StyledRoot,
  StyledAppWrapper,
  StyledGlobalStyle,
  StyledTopMenuWrapper,
  YearFilterWrapper
} from "./theme/globalStyle";
import { TopMenu } from "./ducks/TopMenu/index";
import { ScheduleByTeam } from "./ducks/ScheduleByTeam/index";
import { YearFilter } from "./ducks/YearFilter";
import { Schedule } from "./ducks/Schedule";

import { StyledPopupWrapper } from "./theme/globalStyle";
import { SearchVODPopup } from "./ducks/SearchVODPopup";

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence();

const App = () => {
  // const [selectedYear, setSelectedYear] = useState(2019);

  const [searchWindowVisibile, setSearchWindowVisible] = useState(false);
  const [searchWindowText, setSearchWindowText] = useState("");
  const [selectedVideos, setSelectedVideos] = useState(null);

  const handleUpdateSearchWindow = params => {
    setSearchWindowVisible(params.isVisible);
    setSearchWindowText(params.text);
    setSelectedVideos(params.selectedVideos);
  };

  return (
    <React.Fragment>
      <StyledGlobalStyle />
      <TopMenu />
      <Route
        path="/"
        exact
        render={() => (
          <Schedule
            firebase={firebase}
            handleUpdateSearchWindow={handleUpdateSearchWindow}
          />
        )}
      />
      {/* <Route
        path="/teams"
        render={() => (
          <ScheduleByTeam
            firebase={firebase}
            handleUpdateSearchWindow={handleUpdateSearchWindow}
          />
        )}
      /> */}
      {searchWindowVisibile && (
        <StyledPopupWrapper id="popup">
          <SearchVODPopup
            text={searchWindowText}
            selectedVideos={selectedVideos}
          />
        </StyledPopupWrapper>
      )}
    </React.Fragment>
  );
};

export default App;
