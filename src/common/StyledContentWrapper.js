import styled from 'styled-components'

export const StyledContentWrapper = styled.div`
height: calc(100vh - 100px);
overflow-y: auto;
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
`
