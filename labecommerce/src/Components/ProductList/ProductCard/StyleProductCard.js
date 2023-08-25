import styled from "styled-components"

export const ProductContainer = styled.div`

    padding-left: 1.2rem;
`

export const ProductImage = styled.div`

    border: 1px solid black;
    min-height: 30vh;
    min-width: 15vw;
`

export const ProductInfo = styled.div`

    display: flex;
    flex-direction: column;
    border: 1px solid black;
    min-height: 14vh;
    min-width: 15vw;
    margin-top: 0.15rem;
    margin-bottom: 1.5rem;
    padding: 0.5rem;
    gap: 0.3rem;
`

export const AddToCartButton = styled.button`
    align-self: center;
    width: 11vw;
    margin-top: 0.8rem;
`