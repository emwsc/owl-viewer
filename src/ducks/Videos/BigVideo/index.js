import React from 'react';
import { StyledVideo, StyledThumbnail, StyledTitle } from './styled';
import { openGameVOD } from '../utils';
import { TYPES } from '../constants';
import { getEmojiForLangCode } from './utils';

const BigVideo = ({
  id, title, thumbnail, label, type, url, langCode,
}) => (
  <StyledVideo
    title={`Click to open VOD ${title}`}
    onClick={() => (type === TYPES.MLG ? openGameVOD(id) : window.open(url, '_blank'))
      }
  >
    <StyledThumbnail src={thumbnail} />
    <StyledTitle>
      {getEmojiForLangCode(langCode)}
      {' '}
      {label}
      {' '}
•
      {' '}
      {title}
    </StyledTitle>
  </StyledVideo>
);

export default BigVideo;
