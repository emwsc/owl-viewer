import React from 'react';
import { StyledOpenWindowButton } from './styling';
import { onOpenVideosClick } from './utils';

const SearchVODPopup = React.memo(({ text, selectedVideos, primaryColor }) => (
  <div>
    <div>{text}</div>
    {selectedVideos && selectedVideos.length > 0
      && (
        <StyledOpenWindowButton
          primaryColor={primaryColor}
          onClick={() => { onOpenVideosClick(selectedVideos); }}
        >
          Click to open VODs
                </StyledOpenWindowButton>
      )
    }
  </div>
));

export { SearchVODPopup };
