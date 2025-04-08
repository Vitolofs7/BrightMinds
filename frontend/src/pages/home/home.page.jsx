import { HomeStyled } from "./home.styled";
import { TitleComponent } from "../../components/title/title.component";
import { SubTitleComponent } from "../../components/subtitle/subTitle.component";
import { CardComponent } from "../../components/card/card.component";
import { CardContainerComponent } from "../../components/cardContainer/cardContainer.component";
import { Link } from "react-router-dom";
import pythonLogo from "../../assets/pythonLogo.svg";


export const HomePage = ({ username }) => {
    username = 'user'


    return (
        <HomeStyled>
            <TitleComponent text="hello, " boldText={username} logo={null} size="small" />
            <SubTitleComponent text="Ready to try something new?" boldness="light" size="small" />
            <CardContainerComponent direction="sideways" className="cards">
                <Link to="/courseHomepage"> <CardComponent icon={pythonLogo} color="yellow" type="courseSmall" courseName="html" courseLength='10 hours' /> </Link>
                <Link to="/courseHomepage"> <CardComponent icon={pythonLogo} color="yellow" type="courseSmall" courseName="html" courseLength='10 hours' /> </Link>
                <Link to="/courseHomepage"> <CardComponent icon={pythonLogo} color="yellow" type="courseSmall" courseName="html" courseLength='10 hours' /> </Link>
                <Link to="/courseHomepage"> <CardComponent icon={pythonLogo} color="yellow" type="courseSmall" courseName="html" courseLength='10 hours' /> </Link>

            </CardContainerComponent>
            <SubTitleComponent text='Continue learning' boldness="light" size="small" />
            <CardContainerComponent direction="vertical" className="cards">
                <Link to="/courseHomepage">  <CardComponent icon={pythonLogo} color="yellow" type="courseLarge" courseName="html" courseLength='10 hours' courseProgress='50%' /> </Link>
                <Link to="/courseHomepage">    <CardComponent icon={pythonLogo} color="yellow" type="courseLarge" courseName="html" courseLength='10 hours' courseProgress='50%' /> </Link>
            </CardContainerComponent>

        </HomeStyled>
    );
}
