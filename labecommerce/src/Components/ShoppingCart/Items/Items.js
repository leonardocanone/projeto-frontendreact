import { ButtonsCart, ItemContainer } from "./StyleItems";


export function Items({cart, removeProductToCart, addProductToCart}) {
    // console.log();

    return (
        <>
        {cart.map((item) => {
            return (
        <ItemContainer key={item.id}>
            <img src={item.imageUrl} alt="ProductImage" />
            <p>{item.name}</p>
            <p> • Preço: R$ {item.value},00</p>
            {/* <p> - Quantidade: {item.quantity} x</p> */}
            <ButtonsCart>
                <button onClick={() => removeProductToCart(item)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => addProductToCart(item)}>+</button>
            </ButtonsCart>
        </ItemContainer>
        )
    })}
        </>
    )
}