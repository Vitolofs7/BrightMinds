import { SubTitleStyled } from "../subtitle/subTitle.styled";
import React from "react";


export const SubTitleComponent = ({ text, boldness, size, icon, onClick, underline}) => {
    return (
        <SubTitleStyled className={`${boldness} ${size} ${underline} subtitle`} onClick={onClick}>
                <h2>{text}</h2>
                {icon && <img src={icon} alt="icon" />}
        </SubTitleStyled>
    );
}