import { ItemContainer } from "./StyleItems";


export function Items({cart, removeProductToCart}) {
    // console.log();

    return (
        <>
        {cart.map((item) => {
            return (
        <ItemContainer key={item.id}>
            <p>{item.name}</p>
            <p>Preço unit.: R$ {item.value}</p>
            <p>Qtd adicionada: {item.quantity} x</p>
            <button onClick={() => removeProductToCart(item)}>Remover</button>
        </ItemContainer>
        )
    })}
        </>
    )
}