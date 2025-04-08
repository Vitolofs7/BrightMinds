import { OutletStyled } from "./outlet.styled";
import { Outlet } from "react-router-dom";

export const OutletComponent = () => {
    return (
        <OutletStyled>
            <Outlet />
        </OutletStyled>
    );
}