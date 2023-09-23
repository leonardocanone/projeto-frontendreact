import { Items } from "../Items/Items";
import { ButtonCleanCart, CartCounter, ShoppingCartContainer } from "./StyleCart";
import shopcart from "./shopcart.png";


export function Cart({cart, removeProductToCart, setCart, cleanCart, addProductToCart}) {
    // console.log(cart);

    const totalCart = cart.reduce((total, current) => {
        // console.log(current);
        return total + current.value * current.quantity
    }, 0)

    const totalCartquantity = cart.reduce((total, current) => {
        // console.log(current);
        return total + current.quantity
    }, 0)

    // const cleanCart = () => {
    //     setCart([])     
    //   }

    return (
        <ShoppingCartContainer>
            <CartCounter>{cart.length}</CartCounter>
            <img src={shopcart} alt="shopcart" /> 
            <h4>Qtd total itens: {totalCartquantity}</h4>
            <h4>Valor total: R$ {totalCart},00</h4>
            <ButtonCleanCart onClick={cleanCart}>Limpar carrinho</ButtonCleanCart>

            <Items 
            cart={cart}
            removeProductToCart={removeProductToCart}
            addProductToCart={addProductToCart}
            />
                    
        </ShoppingCartContainer>
    )
}