import { LoginStyled } from "./login.styled";
import { TitleComponent } from "../../components/title/title.component";
import { SubTitleComponent } from "../../components/subtitle/subTitle.component";
import { BackArrowComponent } from "../../components/backarrow/backarrow.component";
import FormComponent from "../../components/form/form.component";
import { Link } from "react-router-dom";

export const LoginPage = () => {

    return (
        <LoginStyled className="login-page">
            <BackArrowComponent url="/" />
            < TitleComponent text="Ready to" boldText="learn?" logo={null} size="large" />
            <SubTitleComponent text="Sign in" boldness="bold" size="medium" />

            <FormComponent isSignUp={false} />


            <div>

                <p className="forgotPassword">Forgot password?</p>

                <div className="signUpContainer">
                    <Link to="/signup"><p>Don't have an account?</p></Link>
                    <Link to="/signup" className="signUp">Sign up!</Link>
                </div>

            </div>
        </LoginStyled>
    )
}
