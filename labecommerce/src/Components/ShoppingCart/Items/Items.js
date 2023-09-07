import { ItemContainer } from "./StyleItems";


export function Items(props) {
    // console.log(props);

    return (
        <ItemContainer>
            <p>Nome do produto</p>
            <p>Qtd: 2</p>
            <button>Remover</button>
        </ItemContainer>
    )
}