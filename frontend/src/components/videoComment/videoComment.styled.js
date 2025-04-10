import styled from "styled-components";

export const VideoCommentStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    margin: 1rem 0;
    padding: 1rem;
    
    
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 1rem;
        align-self: flex-end;
    }

    input {
        width: 100%;
        padding: 0.5rem;
        border-radius: 4px;
        border: 1px solid var(--color-gray-light);
        font-size: 1rem;
    }

    input:focus {
        outline: none;
        border: 1px solid var(--color-purple-dark-medium);
    }

    p {
        width: 100%;
        font-size: 1rem;
        background-color: #fff;
        padding: 1rem;
        border-radius: 15px 15px 0 0;
        border-bottom: 2px solid var(--color-purple-dark-medium);
    }

    span {
        font-size: 0.875rem;
        color: var(--color-gray-medium);
        margin-right: 1rem;
    }

    .comment-stats {
        position: absolute;
        bottom: -5px;
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
    }

    > div {
        width: 100%;
    }
    
 
    
`