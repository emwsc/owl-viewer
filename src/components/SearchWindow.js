import React from 'react';
import { OpenWindowButton } from '../theme/searchWindowStyles';

const SearchWindow = React.memo(function SearchWindow({ text, selectedVideos, primaryColor }) {

    function onOpenVideosClick() {
        selectedVideos.forEach(video => {
            window.open(video.url, '_blank');
        })
    }

    return (
        <div>
            <div>{text}</div>
            {selectedVideos && selectedVideos.length > 0 &&
                <OpenWindowButton
                    primaryColor={primaryColor}
                    onClick={onOpenVideosClick}>
                    Click to open VODs
                </OpenWindowButton>
            }
        </div>
    )
});

export default SearchWindow;