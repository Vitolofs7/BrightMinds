import { LogOutButtonStyled } from './LogOutButton.styled';

export const LogOutButton = ({ onClick }) => {
  return (
    <LogOutButtonStyled onClick={onClick}>
      Log Out
    </LogOutButtonStyled>
  );
};
