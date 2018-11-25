import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import firebase from 'firebase'

import { firebaseConfig } from './firebase/config'

import { Root, AppWrapper, GlobalStyle, StagesWrapper, PopupWrapper, TopMenuWrapper } from './theme/globalStyle'
import { TopMenu } from './ducks/TopMenu/index'
import SearchVODPopup from './ducks/SearchVODPopup/index';
import { ScheduleByTeam } from './ducks/ScheduleByTeam/index'

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

  debugger;

  return (
    <React.Fragment>
      <GlobalStyle />
      <Root>
        <AppWrapper>
          <TopMenuWrapper>
            <TopMenu />
          </TopMenuWrapper>
          <Route
            path="/teams"
            render={() =>
              <ScheduleByTeam
                firebase={firebase}
                setSearchWindowVisible={setSearchWindowVisible}
                setSearchWindowText={setSearchWindowText}
                setSelectedVideos={setSelectedVideos}
                handleUpdateSearchWindow={handleUpdateSearchWindow}
              />
            }
          />
        </AppWrapper>
        {searchWindowVisibile &&
          <PopupWrapper>
            <SearchVODPopup
              text={searchWindowText}
              selectedVideos={selectedVideos}
            />
          </PopupWrapper>
        }

      </Root>
    </React.Fragment>
  );
}

export default App;