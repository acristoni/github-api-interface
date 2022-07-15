import * as S from "./styled.js";
import Praia from "../../img/praia.jpg"
import Logo from "../../img/logomar.png"

export default function Header() {
    return (
        <S.Header>
            
            <S.Title>
                <img id="logo" src={Logo} alt="logo mar" />
                <h1>Tábua das Marés</h1>
            </S.Title>
            <img id="fundo" src={Praia} alt="praia" />
        </S.Header>
    )
}