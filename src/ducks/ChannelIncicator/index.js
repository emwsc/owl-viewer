import React, { useState, useEffect } from "react";
import { checkIsOWLChannelOnline } from "./utils";
import { OWL_TWICH_CHANNEL_LINK } from "./constants";
import { StyledTwitchLink, StyledLive, StyledTwichIcon } from "./styled";

const ChannelIncicator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    checkIsOWLChannelOnline().then(isChannelLive => {
      setIsLoading(false);
      setIsLive(isChannelLive);
    });
  }, []);

  if (isLoading) return null;
  if (isLive)
    return (
      <StyledTwitchLink
        rel="noreferrer"
        href={OWL_TWICH_CHANNEL_LINK}
        target="_blank"
      >
        <StyledLive />
        <StyledTwichIcon className="fab fa-twitch" /> Overwatch League Twitch
      </StyledTwitchLink>
    );

  return (
    <StyledTwitchLink
      rel="noreferrer"
      href={OWL_TWICH_CHANNEL_LINK}
      target="_blank"
    >
      <StyledTwichIcon className="fab fa-twitch" /> Overwatch League Twitch
    </StyledTwitchLink>
  );
};

export default ChannelIncicator;
