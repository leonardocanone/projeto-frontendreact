import styled from "styled-components"

export const FiltersContainer = styled.div`
    
    background-color: rgb(24, 43, 58);
    color: rgb(245, 133, 59);
    border-radius: 8px;
    /* border: 1px solid black; */
    padding: 0.8rem;
    /* width: 14.5vw; */
    width: 202px;

    h3 {
        font-size: 1.6rem;
        margin: 15% 0
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
    }

`
export const ButtonCleanFilter = styled.button`

    width: 9vw;
    height: 5vh;
    border-radius: 8px;
    font-size: 0.95rem;
    cursor: pointer;
    /* background-color: rgb(214, 210, 210); */
    background-color: white;
    color: rgb(24, 43, 58);
    :hover {
        background-color: rgb(245, 133, 59);
        color: white;
    }
`