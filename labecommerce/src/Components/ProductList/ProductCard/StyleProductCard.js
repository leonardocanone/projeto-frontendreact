import styled from "styled-components"

export const ProductContainer = styled.div`

    /* padding-left: 0.3rem; */
    min-height: 57vh;
    min-width: 21.6vw;
    margin-bottom: 2.2rem;
    margin-left: 0.9rem;
    border-radius: 8px;
    /* border: 1px solid red; */

    &:hover {
        box-shadow: 0.3rem 0.3rem 0.3rem #ccc
         }
    
`

export const ProductImage = styled.div`

    border: 1px solid;
    border-radius: 6px;
    height: 40vh;
    width: 22vw;

    img {
        height: 40vh;
        width: 21.7vw;
        /* height: 255px; */
        /* width: 290px; */
        padding: 2.8%;

        @media only screen and (min-width: 1148px) and (max-width: 1340px) {
            width: 22vw;
    }
        @media only screen and (min-width: 1042px) and (max-width: 1147px) {
            height: 50vh;
            width: 32vw;
    }

    @media only screen and (max-width: 1041px) {
        width: 29vw;
    }

    @media only screen and (max-width: 890px) {
        height: 55vh;
        width: 50vw;
    }


    }
    
    @media only screen and (min-width: 1148px) and (max-width: 1340px) {
        width: 22vw;
    }

    @media only screen and (min-width: 1042px) and (max-width: 1147px) {
        height: 50vh;
        width: 32vw;
    }

    @media only screen and (max-width: 1041px) {
        width: 29vw;
    }

    @media only screen and (max-width: 890px) {
        height: 55vh;
        width: 50vw;
    }
`

export const ProductInfo = styled.div`

    display: flex;
    flex-direction: column;
    border-radius: 6px;
    border: 1px solid;
    min-height: 14vh;
    width: 22vw;
    /* height: 120px; */
    /* width: 313px;  */
    margin-top: 0.05rem;
    padding: 0.5rem;
    gap: 0.35rem;

    h4{
        font-size: 0.93rem;
        color: rgb(24, 43, 58);
    }

    h3{
        font-size: 1.2rem;
        color: rgb(222, 87, 3);
    }

    @media only screen and (min-width: 1148px) and (max-width: 1340px) {
        width: 22vw;
    }

    @media only screen and (min-width: 1042px) and (max-width: 1147px) {
        width: 32vw;
    }

    @media only screen and (max-width: 1041px) {
        width: 29vw;
    }

    @media only screen and (max-width: 890px) {
        width: 50vw;
    }
    
`

export const AddToCartButton = styled.button`
    align-self: center;
    /* width: 11vw; */
    width: 200px;
    height: 4.5vh;
    margin-top: 0.8rem;
    border-radius: 6px;
    border: 1px solid;
    font-weight: bold;
    font-size: 0.9rem;
    background: rgb(245, 133, 59);
    color:black;
    cursor: pointer;
        &:hover {
            background-color:  rgb(24, 43, 58);
            color: white;
        }
`
