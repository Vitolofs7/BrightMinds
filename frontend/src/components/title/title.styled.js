import styled from "styled-components";

export const TitleStyled = styled.div`

    

    >div {
        display: flex;
    }

    img {
        width: 15vw;
        height: 15vw;
        margin-right: 5vw;
        align-self: center;
    }

    >div > div {
        padding-left: 5vw;
        border-left: 5px solid var(--color-purple-dark); 
        white-space: pre;
    }




    h1 {
        font-weight: 300;
    }

    p {
        font-weight: 700;
    }

    .large {
        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 3rem;
        }
    }

    .small {
        display: flex;
        width: 100%;
        >div {
            display: flex;
            align-items: center;
        }
        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 2rem;
        }
    }

    .medium {
        h1 {
            font-size: 2.5rem;
        }

        p {
            font-size: 2.5rem;
        }
    }

    

`

