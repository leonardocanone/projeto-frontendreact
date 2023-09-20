import { Items } from "../Items/Items";
import { ShoppingCartContainer } from "./StyleCart";


export function Cart({cart, removeProductToCart, setCart, cleanCart}) {
    // console.log(cart);

    const totalCart = cart.reduce((total, current) => {
        // console.log(current);
        return total + current.value * current.quantity
    }, 0)

    // const cleanCart = () => {
    //     setCart([])     
    //   }

    return (
        <ShoppingCartContainer>
            <h3>Carrinho</h3>
            <p>Valor total: R$ {totalCart}</p>
            <button onClick={cleanCart}>Limpar carrinho</button>

            <Items 
            cart={cart}
            removeProductToCart={removeProductToCart}/>
                    
        </ShoppingCartContainer>
    )
}