import { searchbarStyled } from "./searchbarStyled"

export const searchbarComponent = ({
    children, direction }) => {
        return <searchbarStyled className=
        {direction}>{children}
        </searchbarStyled>;
    }