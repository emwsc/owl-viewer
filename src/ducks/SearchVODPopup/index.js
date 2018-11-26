import React from 'react';
import { OpenWindowButton } from './styling';
import { onOpenVideosClick } from './utils';

const SearchVODPopup = React.memo(({ text, selectedVideos, primaryColor }) => (
  <div>
    <div>{text}</div>
    {selectedVideos && selectedVideos.length > 0
                && (
                <OpenWindowButton
                  primaryColor={primaryColor}
                  onClick={() => { onOpenVideosClick(selectedVideos); }}
                >
                    Click to open VODs
                </OpenWindowButton>
                )
            }
  </div>
));

export default SearchVODPopup;
