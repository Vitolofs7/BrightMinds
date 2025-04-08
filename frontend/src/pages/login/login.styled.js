import styled from "styled-components";

export const LoginStyled = styled.div`

    display: flex;
    flex-direction: column;
    padding: 20% 10%;
.title {
    align-self: self-start;
    margin-bottom: 15vh;
}

.subtitle {
    margin-bottom: 2.5vh;
}

.forgotPassword h2 {
    margin-top: 2.5vh;
    text-align: right;
    font-size: 1.2rem;
    color: #007bff;
    cursor: pointer;
}

.forgotPassword h2:hover {
    text-decoration: underline;
}

> div:last-of-type {
    display: flex;
    flex-direction: column;
    gap: 2.5vh;
    justify-content: center;
    align-items: center;
    gap: 4rem;
}

> div:last-child > div > a:last-child {
    font-weight: 700;
    text-align: center;
}

> div:last-child > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}




`
