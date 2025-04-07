import styled from 'styled-components';

export const LogOutButtonStyled = styled.button`
  padding: 0.8rem 1.6rem;
  background-color: #ff4d4f; /* Rojo para el color de alerta */
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #ff7875; /* Color más claro cuando se pasa el ratón */
    transform: scale(1.05);
  }

  &:active {
    background-color: #ff4d4f; /* Mantener el color rojo en estado activo */
  }
`;
