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
        margin-left:3px;
        margin-right:3px;
    }

    .pagination{
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
`;