import * as S from "./styled.js";

export default function Porto ({portoEscolhido}) {
    return (
        <S.PortoEscolhido>{portoEscolhido.name}</S.PortoEscolhido>
    )
}