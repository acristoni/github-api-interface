import styled from "styled-components";

export const Title = styled.div`
    position: relative;
    z-index: 2;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    h1 {
        text-align: center;
        font-weight: bold;
        font-size: 35px;
    }

    #logo {
        max-height: 50px;
        margin-right: 10px;
    }
`;

export const Header = styled.div`
    position: relative;
    overflow: hidden;

    #fundo {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
        opacity: 0.4;
`;