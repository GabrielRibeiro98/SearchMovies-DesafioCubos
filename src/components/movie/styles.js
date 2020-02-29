import styled from 'styled-components';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Abel|Lato&display=swap');

    margin-bottom:20px;
    margin-top:20px;
    display: flex;
    flex-direction: row;
    background: #ebebeb;

    h1{
        margin: 0px;
        font-family: Lato;
        font-style: normal;
        font-size: 25px;
        color: #00e8e4;
        margin-bottom:1px;
    }

    h2{
        margin: 0px;
        padding: 5px;
        font-family: Lato;
        font-style: normal;
        font-size: 14px;
    }

    p{
        margin-top:5px;
        font-family: Lato;
    }

    .header-movie{
        display:flex;
        width:100%;
        flex-direction: row;
        justify-content: flex-start;
        align-items:flex-end;
        background-color: #116193;
    }

    .circle-popularity{
        margin: 10px;
        border-radius: 50%;
        width:50px;
        height: 50px;
        display: flex;
        justify-content:center;
        align-items:center;
        background: violet;
        margin-top:10px
    }
    
    .div-movie{
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .section-movie{
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start
    }
`;