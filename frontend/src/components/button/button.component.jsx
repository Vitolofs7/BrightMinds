import { ButtonStyled } from "./button.styled";

export const ButtonComponent = ({ text, onClick, type, disabled, color }) => {
    return (
        <ButtonStyled onClick={onClick} type={type} disabled={disabled} className={`${color} button`} >
            {text}
        </ButtonStyled>
    );
}