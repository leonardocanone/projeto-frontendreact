import { AddToCartButton, ProductContainer, ProductImage, ProductInfo } from "./StyleProductCard";


export function ProductCard({product}) {
    
    return (
        <ProductContainer>
            <ProductImage>
                <img src={product.imageUrl} alt="ProductCard" />
                {/* <img src={props.imageUrl} alt="ProductCard" /> */}
            </ProductImage>
            <ProductInfo>
                <p>{product.name}</p>
                <p>{product.value}</p>
                {/* <p>{props.name}</p> */}
                {/* <p>R$ {props.value}</p> */}
                <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
            </ProductInfo>
        </ProductContainer>   
    )
}