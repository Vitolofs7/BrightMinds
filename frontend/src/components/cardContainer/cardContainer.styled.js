import styled from "styled-components";

export const CardContainerStyled = styled.div`
margin-bottom: 2vh;

&.sideways {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 20px;
    padding: 0.5rem;
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
        display: none;
    }
}


&.vertical {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 20px;
    padding: 2vh 2vw;
}

`