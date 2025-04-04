import { LoginStyled } from "./login.styled";
import { TitleComponent } from "../../components/title/title.component";
import { SubTitleComponent } from "../../components/subtitle/subTitle.component";
import FormComponent from "../../components/form/form.component";

export const LoginPage = () => {

    return (
        <LoginStyled className="login-page">
            < TitleComponent text="Ready to" boldText="learn?" logo={null} size="large" />
            <SubTitleComponent text="Sign in" boldness="bold" size="large" />

            <FormComponent isSignUp={false} />
        </LoginStyled>
    )
}
