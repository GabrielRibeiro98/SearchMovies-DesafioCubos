import styled from 'styled-components';

export const Container = styled.div`
    width: 60%;

    form{
        width:100%;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    input::placeholder{
        color: #4d95c1;
        font-size: 1.4em;
    }

    input{
        width: 100%;
        padding: 15px;
        font-size: 1em;
        border-radius: 15px;
        border: 0px solid;
        background: #ebebeb;
        color: #4d95c1;
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

`;