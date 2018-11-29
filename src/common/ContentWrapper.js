import styled from 'styled-components';

const StyledContentWrapper = styled.div`
grid-area: content;
overflow-y: auto;
height: calc(100vh - 100px);
display: flex;
flex-wrap: wrap;
justify-content: center;
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


export default StyledContentWrapper;
