import { HomeStyled } from "./home.styled";
import { TitleComponent } from "../../components/title/title.component";
import { SubTitleComponent } from "../../components/subtitle/subTitle.component";
import { CardComponent } from "../../components/card/card.component";
import { CardContainerComponent } from "../../components/cardContainer/cardContainer.component";
import pythonLogo from "../../assets/pythonLogo.svg";


export const HomePage = ({ username }) => {
    username = 'user'


    return (
        <HomeStyled>
            <TitleComponent text="hello, " boldText={username} logo={null} size="small" />
            <SubTitleComponent text="Ready to try something new?" boldness="light" size="small" />
            <CardContainerComponent direction="sideways" className="cards">
                <CardComponent icon={pythonLogo} color="yellow" type="courseSmall" courseName="html" courseLength='10 hours' />
                <CardComponent icon={pythonLogo} color="yellow" type="courseSmall" courseName="html" courseLength='10 hours' />
                <CardComponent icon={pythonLogo} color="yellow" type="courseSmall" courseName="html" courseLength='10 hours' />
                <CardComponent icon={pythonLogo} color="yellow" type="courseSmall" courseName="html" courseLength='10 hours' />
            </CardContainerComponent>
            <SubTitleComponent text='Continue learning' boldness="light" size="small"/>
            <CardContainerComponent direction="vertical" className="cards">
                <CardComponent icon={pythonLogo} color="yellow" type="courseLarge" courseName="html" courseLength='10 hours' courseProgress='50%' />
                <CardComponent icon={pythonLogo} color="yellow" type="courseLarge" courseName="html" courseLength='10 hours' courseProgress='50%' />
            </CardContainerComponent>

        </HomeStyled>
    );
}
