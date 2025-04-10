import FormComponent from "../../components/form/form.component";
import { SignUpStyled } from "./signUp.styled";
import { TitleComponent } from "../../components/title/title.component";
import { SubTitleComponent } from "../../components/subtitle/subTitle.component";
import { BackArrowComponent } from "../../components/backarrow/backarrow.component";
import { Link } from "react-router-dom";


export const SignUpPage = () => {
    return (
        <SignUpStyled className="sign-up-page">
            <BackArrowComponent url="/" />
            < TitleComponent text="Ready to" boldText="learn?" logo={null} size="large" />

            <SubTitleComponent text="Sign up" boldness="bold" size="large" />
            <FormComponent formType="signUp" />

            <div className="sign-up-page__links">
                <Link to="/login">Already an user?</Link>
                <Link to="/login">Sign in!</Link>
            </div>


        </SignUpStyled>
    );
}