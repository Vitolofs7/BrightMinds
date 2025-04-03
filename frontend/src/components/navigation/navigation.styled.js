import styled from "styled-components";
import navBGCover from "../../assets/navBGCover.svg";

console.log(navBGCover);


export const NavigationStyled = styled.div`
    position: fixed;
    bottom: 0;
    background-color: var(--color-purple-light);
    z-index: 1000; 
    width: 100%; 
    border-top: 2px solid #D9D9D9;

    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1rem 0;
        margin: 0;
        list-style: none;
    }

    li {
        font-size: 1rem;
    }

    a {
        text-decoration: none;
        color: var(--color-purple-dark);
        padding: 0.5rem;
        display: flex;
    }

    a.active {
        background-image: url("${navBGCover}");
        background-size: cover; 
        background-position: center; 
        width: 100%;
        height: 100%;
        
        img {
            filter: invert(1) sepia(1) saturate(5) hue-rotate(180deg);
            
        }

    }

`;