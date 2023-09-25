import styled from "styled-components"

export const FiltersContainer = styled.div`
    
    background-color: rgb(24, 43, 58);
    color: rgb(245, 133, 59);
    border-radius: 8px;
    /* border: 1px solid black; */
    padding: 0.8rem;
    /* width: 14.5vw; */
    width: 202px;

    @media only screen and (min-width: 390px) and (max-width: 767px) {
        width: 30vw;
    }

    h3 {
        font-size: 1.6rem;
        margin: 15% 0;

        @media only screen and (max-width: 390px){
            font-size: 1.4rem;
            margin-bottom: 1.5rem;
    }

    }

    button {
        margin-top: 17%;
        width: 120px;
        height: 4.5vh;
        border-radius: 8px;
        border: 1.5px solid;
        font-size: 0.9rem;
        font-weight: bold;
        color: rgb(24, 43, 58);
        cursor: pointer;
        &:hover {
            background-color: rgb(245, 133, 59);
            color: white;
        }

        @media only screen and (min-width: 391px) and (max-width: 767px){
            margin-top: 2rem;
            width: 15vw;
            height: 5vh;
    }

        @media only screen and (max-width: 390px) {
            margin-top: 2rem;
            width: 20vw;
            height: 5vh;
    }

    }
`

export const InputContainer = styled.label`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;
    font-weight: bold;

    input{
        border-radius: 8px;
        height: 4vh;
        width: 140px;

        @media only screen and (min-width: 390px) and (max-width: 767px) {
            width: 15vw;
    }

        @media only screen and (max-width: 390px){
            width: 20vw;
    }

    }

`
