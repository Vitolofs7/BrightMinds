import { LoaderStyled } from "./loader.styled";

export const LoaderComponent = () => {
    return (
        <LoaderStyled>
            <div id="loader">
                <div className="spinner"></div>
            </div>
        </LoaderStyled>
    );
}