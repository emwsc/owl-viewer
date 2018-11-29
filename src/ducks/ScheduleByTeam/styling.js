import styled from 'styled-components';


export const StyledTeamListWrapper = styled.div`
grid-area: teams;
border-right: 1px solid #BDBDBD;
`;

export const StyledContentWrapper = styled.div`
grid-area: content;
display: flex;
overflow-y: auto;
height: calc(100vh - 100px);
justify-content: center;
flex-wrap: wrap;
::-webkit-scrollbar-track
{
background-color: #F5F5F5;
}

::-webkit-scrollbar
{
width: 10px;
background-color: #F5F5F5;
}
::-webkit-scrollbar-thumb
{
background-color: gray;
}
`;
