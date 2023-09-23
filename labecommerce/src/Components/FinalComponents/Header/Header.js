import { HeaderContainer } from "./StyleHeader";
import logo from "./shopcart-logo.png";

export function Header () {
    return (
        <HeaderContainer>
        <img src={logo} alt="logo" />   
        <h1>LabeCommerce</h1>
        </HeaderContainer>
    )
}