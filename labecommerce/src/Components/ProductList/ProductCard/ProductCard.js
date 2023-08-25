import { AddToCartButton, ProductContainer, ProductImage, ProductInfo } from "./StyleProductCard";


export function ProductCard() {
    return (
        <ProductContainer>
            <ProductImage>
                <img src="" alt="ProductCard" />
            </ProductImage>
            <ProductInfo>
                <p>Nome do produto</p>
                <p>Preço R$</p>
                <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
            </ProductInfo>
        </ProductContainer>   
    )
}