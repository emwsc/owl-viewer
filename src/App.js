import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import firebase from 'firebase';

import { firebaseConfig } from './firebase/config';

import {
  StyledRoot, StyledAppWrapper, StyledGlobalStyle, StyledTopMenuWrapper, YearFilterWrapper,
} from './theme/globalStyle';
import { TopMenu } from './ducks/TopMenu/index';
import { ScheduleByTeam } from './ducks/ScheduleByTeam/index';
import { YearFilter } from './ducks/YearFilter';
import { Schedule } from './ducks/Schedule';

// import { StyledPopupWrapper } from './theme/globalStyle'
// import { SearchVODPopup } from './ducks/SearchVODPopup'

firebase.initializeApp(firebaseConfig);

const App = () => {

  const [selectedYear, setSelectedYear] = useState(2018);

 

  return (
    <React.Fragment>
      <StyledGlobalStyle />
      <StyledRoot>
        <StyledAppWrapper>
          <StyledTopMenuWrapper>
            <TopMenu />
          </StyledTopMenuWrapper>
          <YearFilterWrapper>
            <YearFilter
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
            />
          </YearFilterWrapper>
          <Route
            path="/"
            exact
            render={() =>
              <Schedule
                firebase={firebase}
                selectedYear={selectedYear}
              />
            }
          />
          <Route
            path="/teams"
            render={() => (
              <ScheduleByTeam
                firebase={firebase}
                selectedYear={selectedYear}
              />
            )}
          />
        </StyledAppWrapper>
      </StyledRoot>
    </React.Fragment>
  );
};

export default App;
