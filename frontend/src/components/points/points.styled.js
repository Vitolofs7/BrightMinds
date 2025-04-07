import styled from "styled-components";

export const PointsStyled = styled.div`
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 12px 24px; /* Mayor espaciado interno para mejor visualización */
  font-size: 1.7rem; /* Tamaño de fuente más adecuado */
  font-weight: bold;
  text-align: center;
  display: inline-block;
  margin-top: 20px; /* Más espacio por encima para separarlo del contenido */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra más sutil para darle profundidad */
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05); /* Efecto de hover para mejorar la interacción */
  }
`;