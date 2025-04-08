import styled from "styled-components";

export const VideoStyled = styled.div`
padding: 5%;
padding-top: 10%;

img {
    width: 100%;
}

.backArrow {
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
    width: 30px;
    height: 30px;
}

.descriptionSelector {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;

}

.descriptionContainer {
    width: 90%;
    margin: auto;
}

.active {
    border-bottom: 2px solid var(--color-purple-light);
}

`