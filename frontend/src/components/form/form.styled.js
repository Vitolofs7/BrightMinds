import styled from "styled-components";

export const FormStyled = styled.form`
display: flex;
flex-direction: column;
align-items: center;

    input {
        width: 100%;
        padding: 1rem;
        margin: 0.5rem 0;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 1rem;
        border: 3px solid var(--color-yellow);
        border-radius: 15px;
    }

    input:focus {
        outline: none;
        border-color: var(--color-yellow-saturated);
    }

    input::placeholder {
        color: var(--color-purple-dark);
    }

    input[type="submit"] {
        background-color: var(--color-yellow-saturated);
        width: 80%;
        color: var(--color-purple-dark);
        border: 3px solid var(--color-yellow);
        cursor: pointer;
        font-size: 1rem;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }
    input[type="submit"]:hover {
        background-color: var(--color-yellow);
    }
`