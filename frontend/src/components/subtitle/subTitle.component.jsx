import { SubTitleStyled } from "./subtitle.styled";

export const SubTitleComponent = ({ text, boldness}) => {
    return (
        <SubTitleStyled className={`${boldness} subtitle`}>
                <h2>{text}</h2>
        </SubTitleStyled>
    );
}