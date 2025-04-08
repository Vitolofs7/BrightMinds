import styled from "styled-components";

export const SignUpStyled = styled.div`

    display: flex;
    flex-direction: column;
    margin: 20% 10%;
.title {
    align-self: self-start;
    margin-bottom: 10vh;
}

.subtitle {
    margin-bottom: 2.5vh;
}

.sign-up-page__links {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    margin-top: 5vh;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    color: var(--color-primary);
    justify-self: flex-start;
}

.sign-up-page__links a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 400;
}

.sign-up-page__links a:last-child {
    font-weight: 700;
}


`