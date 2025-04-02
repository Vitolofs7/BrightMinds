import { TitleComponent } from "../../components/title/title.component";
import { ButtonComponent } from "../../components/button/button.component";
import { LoginStyled } from "./login.styled";
import loginGirl from "../../assets/loginGirl.svg";

export const LoginPage = () => {
    return (
        <LoginStyled>
            <TitleComponent text="Ready to" boldText="learn?" logo={null} size="large" />
            <div className="login">
                <img src={loginGirl} alt="" />
                <ButtonComponent text="Log in" onClick={() => { }} type="button" disabled={false} color='yellow' />
            </div>
            <p className="signUp">Sign up!</p>
        </LoginStyled>
    )

}