import styled from "styled-components";
import background from "../../assets/backgroundThingy.svg";

export const OutletStyled = styled.div`
    min-height: 100vh;
    background-color: #fff;
    background-image: url("${background}");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center -30px;
`