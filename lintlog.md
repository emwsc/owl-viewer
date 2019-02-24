
C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\App.js
  7:8  error  'About' is defined but never used  no-unused-vars

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\About\index.js
   7:77  error  HTML entities must be escaped                                                                                               react/no-unescaped-entities
  20:5   error  Emojis should be wrapped in <span>, have role="img", and have an accessible description with aria-label or aria-labelledby  jsx-a11y/accessible-emoji

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\Match\index.js
  1:27  error  'useEffect' is defined but never used          no-unused-vars
  8:23  error  Must use destructuring props assignment        react/destructuring-assignment
  8:29  error  'match' is missing in props validation         react/prop-types
  8:35  error  'match.params' is missing in props validation  react/prop-types

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\Schedule\Filters\index.js
  11:5   error  'firebase' is missing in props validation          react/prop-types
  12:5   error  'selectedYear' is missing in props validation      react/prop-types
  13:5   error  'selectedStage' is missing in props validation     react/prop-types
  14:5   error  'selectedTeams' is missing in props validation     react/prop-types
  15:5   error  'setSelectedTeams' is missing in props validation  react/prop-types
  16:5   error  'setSelectedYear' is missing in props validation   react/prop-types
  17:5   error  'setSelectedStage' is missing in props validation  react/prop-types
  23:14  error  'teams' is already declared in the upper scope     no-shadow
  28:14  error  'teams' is already declared in the upper scope     no-shadow

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\Schedule\Filters\Seasons\index.js
  5:31  error  'selectedYear' is missing in props validation     react/prop-types
  5:45  error  'setSelectedYear' is missing in props validation  react/prop-types

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\Schedule\Filters\Stages\index.js
  6:30  error  'selectedStage' is missing in props validation     react/prop-types
  6:45  error  'setSelectedStage' is missing in props validation  react/prop-types

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\Schedule\Filters\Teams\index.js
  5:29  error  'teams' is missing in props validation             react/prop-types
  5:36  error  'selectedTeams' is missing in props validation     react/prop-types
  5:51  error  'setSelectedTeams' is missing in props validation  react/prop-types

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\Schedule\Filters\Teams\Team\index.js
  4:28  error  'team' is missing in props validation         react/prop-types
  4:34  error  'isSelected' is missing in props validation   react/prop-types
  4:46  error  'onTeamClick' is missing in props validation  react/prop-types

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\Schedule\index.js
   19:5   error  'selectedStage' is missing in props validation      react/prop-types
   19:20  error  'stages' is missing in props validation             react/prop-types
   19:28  error  'selectedTeams' is missing in props validation      react/prop-types
   19:43  error  'setSelectedGameId' is missing in props validation  react/prop-types
   21:29  error  'stage' is already declared in the upper scope      no-shadow
   36:19  error  'props' is defined but never used                   no-unused-vars
   54:5   error  'setSelectedYear' was used before it was defined    no-use-before-define
  117:19  error  'props' is already declared in the upper scope      no-shadow

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\Schedule\Stage\index.js
  6:29  error  'stage' is missing in props validation              react/prop-types
  6:36  error  'selectedTeams' is missing in props validation      react/prop-types
  6:51  error  'setSelectedGameId' is missing in props validation  react/prop-types

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\Schedule\Stage\Week\index.js
  14:5   error  'week' is missing in props validation               react/prop-types
  14:11  error  'isPlayoffStage' is missing in props validation     react/prop-types
  14:27  error  'selectedTeams' is missing in props validation      react/prop-types
  14:42  error  'setSelectedGameId' is missing in props validation  react/prop-types

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\Schedule\utils.js
  68:1   error  Line 68 exceeds the maximum line length of 100  max-len
  79:7   error  'getVods' was used before it was defined        no-use-before-define
  90:32  error  'reject' is defined but never used              no-unused-vars

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\SideScreenVideos\index.js
  12:3   error  'style' is missing in props validation      react/prop-types
  12:10  error  'vods' is missing in props validation       react/prop-types
  12:16  error  'clearVods' is missing in props validation  react/prop-types
  12:27  error  'matchId' is missing in props validation    react/prop-types

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\SideScreenVideos\styled.js
  2:10  error  'NICE_BLACK' is defined but never used  no-unused-vars
  2:22  error  'FONT' is defined but never used        no-unused-vars

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\SmallGameCard\index.js
   22:3   error  'changeScoreVisibility' is missing in props validation                                          react/prop-types
   23:3   error  'isScoreVisible' is missing in props validation                                                 react/prop-types
   24:3   error  'onSelectGameClick' is missing in props validation                                              react/prop-types
   28:7   error  Visible, non-interactive elements with click handlers must have at least one keyboard listener  jsx-a11y/click-events-have-key-events
   28:7   error  Static HTML elements with event handlers require a role                                         jsx-a11y/no-static-element-interactions
   52:18  error  'game' is missing in props validation                                                           react/prop-types
   52:24  error  'teamOneProps' is missing in props validation                                                   react/prop-types
   52:38  error  'teamTwoProps' is missing in props validation                                                   react/prop-types
   71:5   error  'game' is missing in props validation                                                           react/prop-types
   71:11  error  'isTeamsHidden' is missing in props validation                                                  react/prop-types
   71:26  error  'selectedTeams' is missing in props validation                                                  react/prop-types
   71:41  error  'setSelectedGameId' is missing in props validation                                              react/prop-types
  107:5   error  'onSelectGameClick' was used before it was defined                                              no-use-before-define

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\SmallGameCard\styled.js
  2:10  error  'NICE_BLACK' is defined but never used  no-unused-vars

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\Videos\BigVideo\index.js
  8:3   error  'id' is missing in props validation         react/prop-types
  8:7   error  'title' is missing in props validation      react/prop-types
  8:14  error  'thumbnail' is missing in props validation  react/prop-types
  8:25  error  'label' is missing in props validation      react/prop-types
  8:32  error  'type' is missing in props validation       react/prop-types
  8:38  error  'url' is missing in props validation        react/prop-types
  8:43  error  'langCode' is missing in props validation   react/prop-types

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\Videos\index.js
  17:3   error  'setIsExpanded' is missing in props validation   react/prop-types
  17:18  error  'isExpanded' is missing in props validation      react/prop-types
  17:30  error  'vods' is missing in props validation            react/prop-types
  17:36  error  'fullMatchVideo' is missing in props validation  react/prop-types
  47:22  error  'vods' is missing in props validation            react/prop-types
  47:28  error  'fullMatchVideo' is missing in props validation  react/prop-types
  63:22  error  'fullMatchVideo' is missing in props validation  react/prop-types
  77:19  error  'vods' is missing in props validation            react/prop-types
  77:25  error  'matchId' is missing in props validation         react/prop-types

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\Videos\MatchInfo\index.js
  6:11  error  'startDate' is missing in props validation    react/prop-types
  6:22  error  'competitors' is missing in props validation  react/prop-types
  6:35  error  'bracket' is missing in props validation      react/prop-types

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\ducks\Videos\styled.js
  13:17  error  'props' is defined but never used  no-unused-vars

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\theme\globalStyle.js
  2:16  error  'PLUMP_PURPLE' is defined but never used  no-unused-vars

C:\Users\emwsc\Documents\Projects\owl\owl-viewer\src\utils\db.js
  13:12  error  'key' is defined but never used  no-unused-vars

✖ 86 problems (86 errors, 0 warnings)

