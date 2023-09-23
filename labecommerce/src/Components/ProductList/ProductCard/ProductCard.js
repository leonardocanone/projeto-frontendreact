import { useState } from "react";
import { AddToCartButton, ProductContainer, ProductImage, ProductInfo } from "./StyleProductCard";


export function ProductCard({product, addProductToCart, ordination, minFilter, maxFilter, searchFilter}) {
    // console.log(product);

    const [lista, setLista] = useState(product)

    // const listaMapeada = lista.map((item) => {
    //     return (
    //         <ProductContainer key={item.id}>
    //         <ProductImage>
    //             <img src={item.imageUrl} alt="ProductCard" />
    //             {/* <img src={props.imageUrl} alt="ProductCard" /> */}
    //         </ProductImage>
    //         <ProductInfo>
    //             <p>{item.name}</p>
    //             <p>R$ {item.value},00</p>
    //             {/* <p>{props.name}</p> */}
    //             {/* <p>R$ {props.value}</p> */}
    //             <AddToCartButton onClick={() => addProductToCart(item.id)}>Adicionar ao carrinho</AddToCartButton>
    //         </ProductInfo>
    //         </ProductContainer> 
    //         )
    //     })
    
    return (
        <>
        {lista
        .sort((a, b) => {
            if (ordination === "crescente"){
            return a.value - b.value
            } else {
                return b.value - a.value
            }
        })
        .filter((item) => {
            if (minFilter === ""){
                return item
              } else {
            return item.value >= minFilter
              }
        })
        .filter((item) => {
            if (maxFilter === ""){
                return item
              } else {
            return item.value <= maxFilter
              }
        })
        .filter((item) => {
            return item.name.toLowerCase().includes(searchFilter.toLowerCase())
        })
        .map((item) => {
        return (
            <ProductContainer key={item.id}>
            <ProductImage>
                <img src={item.imageUrl} alt="ProductImage" />
                {/* <img src={props.imageUrl} alt="ProductCard" /> */}
            </ProductImage>
            <ProductInfo>
                <h4>{item.name}</h4>
                <h3>R$ {item.value},00</h3>
                {/* <p>{props.name}</p> */}
                {/* <p>R$ {props.value}</p> */}
                <AddToCartButton onClick={() => addProductToCart(item)}>Adicionar ao carrinho</AddToCartButton>
            </ProductInfo>
            </ProductContainer> 
            )
        })}
            {/* {listaMapeada} */}
            {/* <ProductContainer> */}
            {/* <ProductImage> */}
                {/* <img src={product.imageUrl} alt="ProductCard" /> */}
                {/* <img src={props.imageUrl} alt="ProductCard" /> */}
            {/* </ProductImage> */}
            {/* <ProductInfo> */}
                {/* <p>{product.name}</p> */}
                {/* <p>{product.value}</p> */}
                {/* <p>{props.name}</p> */}
                {/* <p>R$ {props.value}</p> */}
                {/* <AddToCartButton>Adicionar ao carrinho</AddToCartButton> */}
            {/* </ProductInfo> */}
            {/* </ProductContainer> */}
        </>   
    )
}