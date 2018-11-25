import styled from 'styled-components'


export const GamesWrapper = styled.div`
overflow-y: auto;
height: calc(100vh - 20px);
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