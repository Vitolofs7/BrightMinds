import styled from "styled-components";

export const SubTitleStyled = styled.div`
display: flex;
gap: 0.5rem;

&.light h2{
    font-weight: 400;
}

&.bold h2{
    font-weight: 700;
}

&.large h2{
    font-size: 2.5rem;
}

&.medium h2{
    font-size: 2rem;
}

&.small h2{
    font-size: 1.5rem;
}

&.yes {
    border-bottom: 2px solid var(--color-purple-medium);
}

&.no {
    border-bottom: none;
}



`