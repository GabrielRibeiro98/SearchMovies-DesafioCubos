import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom:20px;
    margin-top:20px;
    display: flex;
    flex-direction: row;
    background: #ebebeb;
    

    h1{
        margin: 0px;
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        font-size: 32px;
        color: #00e8e4;
        margin-bottom:5px;
    }

    h2{
        margin-top:5%;
        margin-left: 4%;
        padding: 5px;
        color:#707070;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        font-size:16px;
    }

    p{
        margin-top:5px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        margin-left: 8vw;
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
        border-radius: 50%;
        width:10vh;
        height: 10vh;
        display: flex;
        justify-content:center;
        align-items:center;
        background: #116193;
        bottom: -35px;
        position: relative;
        margin-left:15px;
        margin-right:15px;
        border: 3px solid #00e8e4;
        box-shadow: 0 0 0 3px #116193;
    }

    .percent{
        font-size:23px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-display: swap;font-family: Lato;
        font-weight:200px;
        color: #00e8e4;
    }
    
    .div-movie{
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .section-movie{
        width:100%;
        display:flex;
        flex-direction: column;
    }
`;