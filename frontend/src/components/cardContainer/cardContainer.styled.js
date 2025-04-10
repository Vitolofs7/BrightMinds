import styled from "styled-components";

export const CardContainerStyled = styled.div`
  &.sideways {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    overflow-x: auto;
    padding-right: 5%;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &.vertical {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1rem;
    width: 100%;
    align-items: center;
    }
`;
