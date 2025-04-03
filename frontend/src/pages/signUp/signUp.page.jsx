import FormComponent from "../../components/form/form.component";
import { SignUpStyled } from "./signUp.styled";
import { TitleComponent } from "../../components/title/title.component";
import { SubTitleComponent } from "../../components/subtitle/subTitle.component";

export const SignUpPage = () => {
    return (
        <SignUpStyled className="sign-up-page">
            < TitleComponent text="Ready to" boldText="learn?" logo={null} size="large" />
            <div>
            <SubTitleComponent text="Sign up" boldness="bold" size="large" />
            <FormComponent formType="signUp" />

            </div>
        </SignUpStyled>
    );
}