import { SubTitleStyled } from "./subtitle.styled";

export const SubTitleComponent = ({ text, boldness, size, icon}) => {
    return (
        <SubTitleStyled className={`${boldness} ${size} subtitle`}>
                <h2>{text}</h2>
                {icon && <img src={icon} alt="icon" />}
        </SubTitleStyled>
    );
}