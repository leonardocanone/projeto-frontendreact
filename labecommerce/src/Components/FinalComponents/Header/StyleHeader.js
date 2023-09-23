import styled from "styled-components"

export const HeaderContainer = styled.header`
    
    /* border: 1px solid black; */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    background-image: linear-gradient(to right, rgb(24, 43, 58), rgb(6, 46, 101),rgb(245, 158, 59));
    /* background-image: linear-gradient(to right, rgb(61, 13, 113), rgb(132, 50, 204), rgb(183, 120, 238)); */
    color: rgb(245, 133, 59);
    border-radius: 8px;
    height: 10vh;
    min-width: 99vw;

    img {
        /* width: 4.5vw; */
        width: 62px;
        margin-left: 1%;
    }

    h1 {
        margin-left: 1%;
    }

`