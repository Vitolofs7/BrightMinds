import styled from "styled-components";

export const SearchbarContainer = styled.div`
  background-color: #fff;
  border: 1px var(--color-purple-dark-medium) solid;
  border-radius: 10px;
  width: 80vw;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  gap: 12px;
`;

export const SearchbarStyled = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`;
