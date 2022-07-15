import styled from "styled-components";

export const Mapa = styled.div`
    width: 40%;
    position: relative;
    margin-right: 10px;

    img {
        width: 100%;
    }
`;

export const Portos = styled.div`
    button {
        backgroud-color: white;
        font-weight: bold;
        border: 2p solid black;
    }

    button:hover {
        color: red;
    }
    
    #santos {
        top: 74%;
        left: 67%;
        position: absolute;
        backgroud-color: red;
    }

    #paranagua {
        top: 78%;
        left: 65%;
        position: absolute;
    }

    #itapoa {
        top: 82%;
        left: 63%;
        position: absolute;
    }

    #riogrande {
        top: 95%;
        left: 55%;
        position: absolute;
    }

    #chibatao {
        top: 23%;
        left: 12%;
        position: absolute;
    }

    #suape {
        top: 36%;
        right: 0;
        position: absolute;
    }

    #pecem {
        top: 22%;
        right: 0;
        position: absolute;
    }

    #riodejaneiro {
        top: 70%;
        right: 0;
        position: absolute;
    }

    #bahia {
        top: 48%;
        right: 0;
        position: absolute;
    }

    #vitoria {
        top: 65%;
        right: 0;
        position: absolute;
    }
`;