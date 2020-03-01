import styled from 'styled-components';

export const Container = styled.div`
    width:60%;
    margin-top:10px;
    margin-bottom:10px;

    .div-pagination{
        
    }

    .row-pagination{
        list-style-type: none;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items:flex-start;
        text-decoration:none;
    }

    .pagination{
        font-size: 1.5em;
        margin-left:1vw;
        margin-right:1vw;
        text-decoration:none;
        color:#1f6a99;
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

    .pagination:hover{
        color:#00e8e4;
        font-size: 2em;
    }
`;