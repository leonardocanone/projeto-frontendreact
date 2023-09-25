import styled from "styled-components"

export const ItemContainer = styled.div`

    background-color:  rgb(24, 43, 58);
    color: white;
    display: flex;
    flex-direction: column;
    margin-top: 1.4rem;
    gap: 0.5rem;
    font-size: 0.85rem;
    font-weight: bold;
    border-radius: 7px;
    padding: 0.5rem;

    @media only screen and (max-width: 390px){
        width: 39vw
    }

    img {
        border-radius: 5px;
        align-self: center;
    }
`

export const ButtonsCart = styled.div`

    background-color: white;
    color:  rgb(24, 43, 58);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.95rem;
    margin: 0.15rem 0.8rem;
    padding: 0.2rem 0.45rem;

    button {
        width: 28px;
        height: 28px;
        border-radius: 50px;
        font-size: 1.4rem;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            background-color:  rgb(245, 158, 59);
            color: black;
        }
    }

    p {
        font-size: 1.2rem;
    }

`