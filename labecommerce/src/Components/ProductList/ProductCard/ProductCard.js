import { AddToCartButton, ProductContainer, ProductImage, ProductInfo } from "./StyleProductCard";


export function ProductCard({product}) {
    
    return (
        <ProductContainer>
            <ProductImage>
                <img src={product.imageUrl} alt="ProductCard" />
            </ProductImage>
            <ProductInfo>
                <p>{product.name}</p>
                <p>{product.value}</p>
                <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
            </ProductInfo>
        </ProductContainer>   
    )
}