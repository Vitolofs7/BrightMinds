import styled from "styled-components";

export const ButtonStyled = styled.button`
padding: 0.5rem 1rem;
border-radius: 15px;
font-weight: 700;
width: 100%;
font-size: 1.2rem;
cursor: pointer;

&.yellow {
    background-color: var(--color-yellow-saturated);
    border: 2px solid var(--color-yellow);
}
`