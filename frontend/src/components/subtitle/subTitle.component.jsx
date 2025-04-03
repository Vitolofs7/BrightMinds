import { SubTitleStyled } from "./subtitle.styled";

export const SubTitleComponent = ({ text, boldness, size}) => {
    return (
        <SubTitleStyled className={`${boldness} ${size} subtitle`}>
                <h2>{text}</h2>
        </SubTitleStyled>
    );
}