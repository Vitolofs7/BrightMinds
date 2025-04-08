import { BackArrowStyled } from "./backarrow.styled";
import backArrowIcon from "../../assets/backArrowIcon.svg";
import { useNavigate } from "react-router-dom";

export const BackArrowComponent = ({ url }) => { // Destructure the `url` prop
    const navigate = useNavigate();

    const handleBackClick = () => {
        if (url) {
            navigate(url); // Navigate to the specified URL if provided
        } else {
            navigate(-1); // Go back to the previous page
        }
    };

    return (
        <BackArrowStyled onClick={handleBackClick}>
            <img src={backArrowIcon} alt="Back Arrow" />
        </BackArrowStyled>
    );
};