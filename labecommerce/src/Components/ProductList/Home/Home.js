import { ProductCard } from "../ProductCard/ProductCard";
import { HomeContainer, HomeHeader, HomeProductCard } from "./StyleHome";


export function Home({products}) {
    
    return (
        <HomeContainer>
            <HomeHeader>
            <h4>Quantidade de produtos: {products.length} </h4>
            <label>
                Ordenação:
                <select>
                   <option>Crescente</option> 
                   <option>Decrescente</option> 
                </select>
            </label>
            </HomeHeader>
            <HomeProductCard>
                <ProductCard product={products[0]} />
                <ProductCard product={products[1]} />
                <ProductCard product={products[2]} />
                <ProductCard product={products[3]} />
            </HomeProductCard>
        </HomeContainer>        
    )
}