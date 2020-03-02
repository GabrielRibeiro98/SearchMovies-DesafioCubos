import  styled, { createGlobalStyle} from 'styled-components';


export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root{
    height: 100%;
}

body{
    background: #ffffff;
    -webkit-font-smoothing: antialiased !important;
}

`;

export const Container = styled.span `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center
`;