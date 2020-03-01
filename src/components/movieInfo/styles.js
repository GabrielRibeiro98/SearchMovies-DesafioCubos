import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    h1{
        margin-left: 3vw;
        color: #106ea8;
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

    p{
        font-size: 1.3em;
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        color: #a9a9a9;
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #e6e6e6;
        height: 5vw;
    }

    section{
        margin: 3vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items:flex-start;
    }

    h2{
        color: #106ea8;
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

    h3{
        color: #106ea8;
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

    hr{
        margin-top: 1vw;
        border: #79edeb !important;
        color: #79edeb;
        background-color: #79edeb;
        height: 2px;
    }

    article{
        display: flex;
        flex-direction: column;
        margin-right: 1vw;
    }

    button{
        margin-left:3vw;
        margin-top:1vw;
        margin-bottom:1vw;
        padding: 10px;
        border-radius: 15px;
        background:#e6e6e6;
        transition: 0.3s;
        border: 0px;
        font-size: 1em;
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

    button:hover{
        background-color: #106ea8;
        color: white;
    }

    .p-sinopse{
        font-size: 1em;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        color: #555555;
    }

    .div-informacoes{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .div-row-main{
        display:flex;
        justify-content:flex-start;
    }

    .circle-popularity{
        border-radius: 50%;
        width:100px;
        height: 100px;
        display: flex;
        justify-content:center;
        align-items:center;
        background: #116193;
        bottom: -35px;
        margin-left:15px;
        margin-right:15px;
        border: 8px solid #00e8e4;
        box-shadow: 0 0 0 3px #116193;
    }

    .percent{
        font-size:2em;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-display: swap;font-family: Lato;
        font-weight:200px;
        color: #00e8e4;
    }

    .column-genre-percent{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;