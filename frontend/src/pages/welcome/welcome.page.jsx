import { TitleComponent } from "../../components/title/title.component";
import { ButtonComponent } from "../../components/button/button.component";
import { WelcomeStyled } from "./welcome.styled";
import { Link } from "react-router-dom";
import loginGirl from "../../assets/loginGirl.svg";

export const WelcomePage = () => {
    return (
        <WelcomeStyled>
            <TitleComponent text="Ready to" boldText="learn?" logo={null} size="large" />
            <div className="login">
                <img src={loginGirl} alt="" />
                <ButtonComponent text="Log in" onClick={() => { }} type="button" disabled={false} color='yellow' />
            </div>
            <Link to="/signup" className="signUp">Sign up!</Link>
        </WelcomeStyled>
    )

}