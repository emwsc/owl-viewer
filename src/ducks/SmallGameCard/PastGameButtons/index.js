import React from "react";

import { StyledButtonsContainer, StyledVODIcon } from "./styled";

const PastGameButtons = ({
  changeScoreVisibility,
  isScoreVisible,
  onSelectGameClick
}) => (
  <StyledButtonsContainer>
    <div>
      <i
        onClick={event => {
          event.preventDefault();
          event.stopPropagation();
          changeScoreVisibility(!isScoreVisible);
        }}
        title={
          isScoreVisible
            ? "Click to hide score"
            : "Click to reaveal score of the game"
        }
        className={isScoreVisible ? "fas fa-eye-slash" : "fas fa-eye"}
      />
    </div>
    <div>
      <StyledVODIcon
        onClick={onSelectGameClick}
        title="Open VODs if available"
        className="fas fa-video"
      />
    </div>
  </StyledButtonsContainer>
);

export default PastGameButtons;
