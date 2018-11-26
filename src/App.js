import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import firebase from 'firebase';

import { firebaseConfig } from './firebase/config';

import {
  StyledRoot, StyledAppWrapper, StyledGlobalStyle, StyledPopupWrapper, StyledTopMenuWrapper,
} from './theme/globalStyle';
import { TopMenu } from './ducks/TopMenu/index';
import SearchVODPopup from './ducks/SearchVODPopup/index';
import { ScheduleByTeam } from './ducks/ScheduleByTeam/index';

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [searchWindowVisibile, setSearchWindowVisible] = useState(false);
  const [searchWindowText, setSearchWindowText] = useState('');
  const [selectedVideos, setSelectedVideos] = useState(null);


  function handleUpdateSearchWindow(params) {
    setSearchWindowVisible(params.isVisible);
    setSearchWindowText(params.text);
    setSelectedVideos(params.selectedVideos);
  }

  return (
    <React.Fragment>
      <StyledGlobalStyle />
      <StyledRoot>
        <StyledAppWrapper>
          <StyledTopMenuWrapper>
            <TopMenu />
          </StyledTopMenuWrapper>
          <Route
            path="/teams"
            render={() => (
              <ScheduleByTeam
                firebase={firebase}
                setSearchWindowVisible={setSearchWindowVisible}
                setSearchWindowText={setSearchWindowText}
                setSelectedVideos={setSelectedVideos}
                handleUpdateSearchWindow={handleUpdateSearchWindow}
              />
            )}
          />
        </StyledAppWrapper>
        {searchWindowVisibile
          && (
            <StyledPopupWrapper>
              <SearchVODPopup
                text={searchWindowText}
                selectedVideos={selectedVideos}
              />
            </StyledPopupWrapper>
          )
        }

      </StyledRoot>
    </React.Fragment>
  );
};

export default App;
