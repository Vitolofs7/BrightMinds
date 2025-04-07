import styled from "styled-components";

export const BadgesContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas */
  gap: 20px; /* Espacio entre los badges */
  width: 100%;
  max-width: 600px;
  margin: 0 auto; /* Centrado horizontal */
`;

export const BadgeStyled = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px; /* Bordes ligeramente redondeados */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombras sutiles */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Ajuste del tamaño de los badges */
`;
