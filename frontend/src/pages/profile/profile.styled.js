import styled from "styled-components";

export const ProfileStyled = styled.div`
  min-height: 100vh;
  margin-top: 5vh;
  padding-left: 5%;

  .title {
    margin-bottom: 5vh;
  }

  .points-container {
    display: flex;
    flex-direction: column; /* Mantener h2 y PointsStyled en columna */
    align-items: center; /* Centra el rectángulo de los puntos */
    margin-top: 2vh; /* Espacio arriba si es necesario */
    width: 100%; /* Asegura que ocupe el 100% del ancho disponible */
  }

  .points-container h2 {
    align-self: flex-start; /* Alinea el h2 a la izquierda */
  }
`;
