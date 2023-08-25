import { ProductCard } from "../ProductCard/ProductCard";
import { HomeContainer, HomeHeader, HomeProductCard } from "./StyleHome";


export function Home() {
    return (
        <HomeContainer>
            <HomeHeader>
            <h4>Quantidade de produtos: </h4>
            <label>
                Ordenação:
                <select>
                   <option>Crescente</option> 
                   <option>Decrescente</option> 
                </select>
            </label>
            </HomeHeader>
            <HomeProductCard>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </HomeProductCard>
        </HomeContainer>
    )
}