import { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { HomeContainer, HomeHeader, HomeProductCard } from "./StyleHome";


export function Home({products, cart, setCart, amount, setAmount, addProductToCart, minFilter, maxFilter, searchFilter}) {
    // console.log(products);

    // const [lista, setLista] = useState(products)

    const [ordination, setOrdination] = useState("crescente")
    
    const alterarOrdem = (event) => {
        setOrdination(event.target.value)
    }
    // console.log(ordination);


    return (
        <HomeContainer>
            <HomeHeader>
            {/* <h4>Quantidade de produtos: {products.length} </h4> */}
            <h4>Brinquedos Espaciais</h4>
            <label>
                Ordenação por preço:
                <select value={ordination} onChange={alterarOrdem} >
                   <option value={"crescente"}>Crescente</option> 
                   <option>Decrescente</option> 
                </select>
            </label>
            </HomeHeader>
            <HomeProductCard>

                {/* <ProductCard product={products[0]} />
                <ProductCard product={products[1]} />
                <ProductCard product={products[2]} />
                <ProductCard product={products[3]} /> */}
                <ProductCard 
                product={products}
                addProductToCart={addProductToCart}
                ordination={ordination}
                minFilter={minFilter}
                maxFilter={maxFilter}
                searchFilter={searchFilter}
                cart={cart}
                setCart={setCart}
                />
                {/* <ProductCard
                name={props.produto1.name}
                value={props.produto1.value}
                imageUrl={props.produto1.imageUrl}
                /> */}
                {/* <ProductCard
                name={props.produto2.name}
                value={props.produto2.value}
                imageUrl={props.produto2.imageUrl}
                /> */}
                {/* <ProductCard
                name={props.produto3.name}
                value={props.produto3.value}
                imageUrl={props.produto3.imageUrl}
                /> */}
                {/* <ProductCard
                name={props.produto4.name}
                value={props.produto4.value}
                imageUrl={props.produto4.imageUrl}
                /> */}
            </HomeProductCard>
        </HomeContainer>        
    )
}