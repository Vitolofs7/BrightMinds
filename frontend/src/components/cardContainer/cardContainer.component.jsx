import { CardContainerStyled } from "./cardContainer.styled";

export const CardContainerComponent = ({ children, direction }) => {
    return <CardContainerStyled className={direction}>{children}</CardContainerStyled>;
}