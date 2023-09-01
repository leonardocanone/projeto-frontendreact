import { Items } from "../Items/Items";
import { ShoppingCartContainer } from "./StyleCart";


export function Cart(props) {
    // console.log(props);
    return (
        <ShoppingCartContainer>
            <h3>Carrinho</h3>
            <Items />
            <Items />
            <p>Valor total: R$ </p>
        </ShoppingCartContainer>
    )
}