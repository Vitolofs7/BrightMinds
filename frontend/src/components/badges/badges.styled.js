import styled from "styled-components";

export const BadgesContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas */
  gap: 10px; /* Espacio entre las badges */
  width: 100%;
  max-width: 500px; /* Limitar el tamaño máximo para que no se expanda demasiado */
  margin: 20px auto; /* Centrado y espaciado en la parte superior */
  padding: 10px;
`;

export const BadgeStyled = styled.div`
  background-color: #f0f0f0;
  padding: 12px; /* Reducir el padding para que las insignias sean más compactas */
  text-align: center;
  font-size: 14px; /* Tamaño de texto más pequeño */
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para dar más profundidad */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Asegura que el icono y el texto estén apilados verticalmente */
  height: 100px; /* Ajuste de tamaño para que los badges no se vean tan grandes */
  width: 100px; /* Ajustar el tamaño del badge */
  transition: transform 0.3s ease;
  
  svg {
    width: 24px; /* Tamaño del icono reducido */
    height: 24px; /* Tamaño del icono reducido */
    margin-bottom: 8px; /* Espacio entre el icono y el texto */
  }

  &:hover {
    transform: translateY(-5px); /* Efecto hover para darle interactividad */
  }
`;
