import styled from 'styled-components';
import { StyledContentWrapper } from '../../common/StyledContentWrapper'


export const StyledTeamListWrapper = styled.div`
grid-area: teams;
border-right: 1px solid #BDBDBD;
`;

export const StyledScheduleByTeamContentWrapper = styled(StyledContentWrapper)`
grid-area: content;
display: flex;
flex-wrap: wrap;
justify-content: center;
`;
