import styled from "styled-components";

export const StyledTeams = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 555px) {
    height: 100px;
    overflow-y: auto;
  }
`;
