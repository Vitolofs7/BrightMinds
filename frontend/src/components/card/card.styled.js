import styled from "styled-components";

export const CardStyled = styled.div`


.courseSmall {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--color-purple-dark-medium);
    border-radius: 15px;
    width: 35vw;
    padding: 0.5rem;
    img {
        width: 33px;
        height: 33px;
    }
    p {
        align-self: flex-start;
        font-size: 0.8rem;
    }
}

.courseLarge {
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--color-purple-dark-medium);
    border-radius: 15px;
    width: 80vw;
    height: 10vh;
    padding: 0.5rem;

    >div:first-of-type {
        width: 60%;
        height: 100%;
    }
    img {
        width: 33px;
        height: 33px;
        position: absolute;
        left: 1rem;
    }
    h3 {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--color-purple-dark);
    }
    p {
        font-size: 0.8rem;
        color: var(--color-purple-dark);
    }

    .courseLength {
        position: absolute;
        right: 0.25rem;
        top: 0.25rem;
        background-color: var(--color-yellow-saturated);
        padding: 0.25rem;
        border: 2px solid var(--color-yellow);
        border-radius: 10px;
        font-weight: 700;

    } 

    .progressBarContainer {
        background-color: var(--color-purple-light);
        border-radius: 10px;
        width: 100%;
        height: 0.5rem;
        margin-top: 0.5rem;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 0.5rem;
    }

    .progressBar {
        background-color: var(--color-purple-medium);
        border-radius: 10px;
        width: 50%;
        height: 100%;
    }
}
`