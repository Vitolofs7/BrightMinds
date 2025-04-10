import styled from "styled-components";

export const VideoStyled = styled.div`
padding: 5%;
padding-top: 20%;

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

.video-frame {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: var(--color-purple-light);
    margin-bottom: 20px;
  }

`