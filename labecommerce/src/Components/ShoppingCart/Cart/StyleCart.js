import styled from "styled-components"

export const ShoppingCartContainer = styled.div`
    
    background-color: rgb(245, 158, 59);
    color: rgb(24, 43, 58);
    border-radius: 8px;
    /* border: 1px solid black; */
    padding: 0.7rem;
    /* width: 15vw; */
    width: 204px;

    @media only screen and (max-width: 390px){
        min-width: 42vw;
        padding: 0.4rem;
    }

    img {
        /* width: 4.5vw; */
        width: 60px;
    }

    h4 {
        margin: 5% 0%;
        font-size: 0.95rem;
    }

`

export const CartCounter = styled.p`
    
    background-color: rgb(30, 60, 84);
    color: white;
    font-weight: bold;
    border-radius: 10px;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3.4rem;
    margin-bottom: -0.8rem;
    font-size: 0.9rem;

`


export const ButtonCleanCart = styled.button`

    width: 130px;
    height: 4.5vh;
    border-radius: 8px;
    border: 1px solid;
    font-size: 0.9rem;
    font-weight: bold;
    color: rgb(24, 43, 58);
    cursor: pointer;
        &:hover {
        background-color: rgb(24, 43, 58);
        color: white;
         }
`